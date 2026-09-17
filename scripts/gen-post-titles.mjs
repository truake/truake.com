/** Regenerate slug→title index for the /og route (avoids bundling full posts.ts). */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = fs.readFileSync(path.join(root, 'app/diffr/blog/posts.ts'), 'utf8')
const re = /slug:\s*'([^']+)',\s*\n\s*title:\s*'((?:\\'|[^'])*)'/g
const map = {}
let m
while ((m = re.exec(src))) {
  map[m[1]] = m[2].replace(/\\'/g, "'")
}
fs.writeFileSync(
  path.join(root, 'app/diffr/blog/post-titles.json'),
  JSON.stringify(map),
)
console.log(`post-titles.json: ${Object.keys(map).length} slugs`)
