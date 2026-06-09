import fs from "fs";
import path from "path";
import { marked } from "marked";

// Read a legal .md source file (the single source of truth, version-controlled
// under content/legal/) and render it to HTML at build time. Static → the full
// text ships in the page HTML (App Store reviewers get readable content, not a
// JS-rendered empty div).
export function renderLegalMd(file: string): string {
  const full = path.join(process.cwd(), "content", "legal", file);
  const md = fs.readFileSync(full, "utf8");
  return marked.parse(md, { async: false }) as string;
}
