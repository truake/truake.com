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

if ! curl -s -o /dev/null -w "%{http_code}" "$BASE/diffr/blog" 2>/dev/null | grep -qE '200|301|302|308'; then
  echo "Starting dev server on port $PORT …"
  (cd "$ROOT" && npm run dev -- -p "$PORT") >/tmp/truake-dev-"$PORT".log 2>&1 &
  dev_pid=$!
  started_dev=1
  wait_for_server
  echo "Dev server ready (pid $dev_pid, log /tmp/truake-dev-${PORT}.log)"
else
  echo "Dev server already responding on $BASE"
fi

  if ! command -v npx >/dev/null 2>&1 || ! OG_BASE="$BASE" npm run bake-og -- "${SLUGS[@]}" 2>/tmp/bake-og-err.log; then
    echo "npm bake-og failed ($(head -1 /tmp/bake-og-err.log)); falling back to curl …"
    mkdir -p "$ROOT/public/diffr/blog/share" "$ROOT/public/og"
    for slug in "${SLUGS[@]}"; do
      [[ "$slug" == --* ]] && continue
      url="$BASE/diffr/blog/$slug/og"
      out="$ROOT/public/diffr/blog/share/$slug.png"
      echo "Fetching $url"
      curl -sS "$url" -o "$out"
      cp "$out" "$ROOT/public/og/$slug.png"
      python3 -c "from PIL import Image; p='$out'; Image.open(p).convert('RGB').save(p.replace('.png','.jpg'), quality=88)"
    done
  fi

echo ""
echo "Done. Next:"
echo "  git add public/diffr/blog/share/ public/og/ public/og-base/"
echo "  git commit && git push origin main"
echo "  curl -s -o /dev/null -w '%{http_code}\\n' https://truake.com/diffr/blog/${SLUGS[0]}"
