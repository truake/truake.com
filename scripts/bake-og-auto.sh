#!/usr/bin/env bash
# Auto-start Next.js dev server (if needed), bake OG share cards, optionally stop server.
#
# Usage:
#   ./scripts/bake-og-auto.sh travel-essentials-brand-guide
#   ./scripts/bake-og-auto.sh --brand-guides
#   PORT=3001 ./scripts/bake-og-auto.sh quiet-luxury-edc-brand-guide
#
# Env:
#   PORT          dev server port (default 3001)
#   KEEP_DEV=1    leave dev server running after bake
#   OG_BASE       override base URL (default http://localhost:$PORT)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-3001}"
BASE="${OG_BASE:-http://localhost:${PORT}}"
KEEP_DEV="${KEEP_DEV:-0}"
SLUGS=("$@")

if [[ ${#SLUGS[@]} -eq 0 ]]; then
  echo "Usage: $0 <blog-slug> [more-slugs...] | --brand-guides | --all"
  exit 1
fi

started_dev=0
dev_pid=""

cleanup() {
  if [[ "$started_dev" -eq 1 && "$KEEP_DEV" -ne 1 && -n "$dev_pid" ]]; then
    kill "$dev_pid" 2>/dev/null || true
    wait "$dev_pid" 2>/dev/null || true
    echo "Stopped dev server (pid $dev_pid)"
  fi
}
trap cleanup EXIT

wait_for_server() {
  local i
  for i in $(seq 1 60); do
    if curl -s -o /dev/null -w "%{http_code}" "$BASE/diffr/blog" 2>/dev/null | grep -qE '200|301|302|308'; then
      return 0
    fi
    sleep 1
  done
  echo "Dev server did not become ready at $BASE within 60s"
  return 1
}

start_dev() {
  echo "Starting dev server on port $PORT …"
  (cd "$ROOT" && npm run dev -- -p "$PORT") >/tmp/truake-dev-"$PORT".log 2>&1 &
  dev_pid=$!
  started_dev=1
  wait_for_server
  echo "Dev server ready (pid $dev_pid, log /tmp/truake-dev-${PORT}.log)"
}

# A dev server that predates the new post still compiles the old posts.ts, so
# posts.find() misses and /og 302s to the site-wide fallback — which is exactly
# how a generic card got baked and shipped. Never trust a server we did not
# start: make it prove it knows every slug we are about to bake.
knows_all_slugs() {
  local slug code
  for slug in "${SLUGS[@]}"; do
    [[ "$slug" == --* ]] && continue
    code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/diffr/blog/$slug" 2>/dev/null)
    if [[ "$code" != "200" ]]; then
      echo "  stale: $BASE/diffr/blog/$slug → HTTP $code"
      return 1
    fi
  done
  return 0
}

if ! curl -s -o /dev/null -w "%{http_code}" "$BASE/diffr/blog" 2>/dev/null | grep -qE '200|301|302|308'; then
  start_dev
else
  echo "Dev server already responding on $BASE — checking it knows these slugs …"
  if knows_all_slugs; then
    echo "Dev server is current."
  else
    echo "Restarting it so posts.ts is recompiled …"
    lsof -ti tcp:"$PORT" | xargs kill 2>/dev/null || true
    sleep 2
    start_dev
    knows_all_slugs || { echo "Server still does not resolve these slugs — is the post in posts.ts?"; exit 1; }
  fi
fi

# No curl fallback here on purpose: it wrote whatever came back with no
# validation, which is the silent-corruption path this script exists to close.
OG_BASE="$BASE" npm run bake-og -- "${SLUGS[@]}"

echo ""
echo "Verifying baked cards …"
npx tsx "$ROOT/scripts/verify-og-cards.ts" "${SLUGS[@]}"

echo ""
echo "Done. Next:"
echo "  git add public/diffr/blog/share/ public/og/ public/og-base/ public/diffr/blog/share/versions.json"
echo "  git commit && git push origin main"
echo "  ./scripts/verify-blog-og.sh ${SLUGS[0]}   # after deploy"
