# Keyword harvest — manual imports

Drop exported CSVs here. The harvest script auto-picks the **newest** file per prefix.

## GSC (Google Search Console)

1. [Search Console](https://search.google.com/search-console) → **效果** → **查询**
2. 日期：**过去 28 天**（或与上次 harvest 对比用「过去 7 天」）
3. 右上角 **导出** → CSV
4. 保存为以下任一形式即可：
   - `gsc-queries-YYYY-MM-DD.csv`（单文件，英文或中文列名均可）
   - 或保留 GSC 默认 zip 解压文件夹 `truake.com-Performance-on-Search-YYYY-MM-DD/`（内含 `查询数.csv`）

脚本会自动识别，**无需改名**。

Optional second export (**网页** 维度）→ `gsc-pages-YYYY-MM-DD.csv`

## Ahrefs

**Keywords Explorer** 或 **AI Search** → 选中词表 → **Export** → CSV

保存为：`ahrefs-keywords-YYYY-MM-DD.csv`

Expected columns (any of): `Keyword`, `Volume`, `KD`, `CPC`, `Traffic potential`

## Ahrefs AI Search (citations)

Export landing pages / prompts report → `ahrefs-ai-search-YYYY-MM-DD.csv`

---

Files in this folder are **local working data** — do not commit CSVs with account-specific paths if sensitive; `.gitignore` excludes `*.csv` by default.
