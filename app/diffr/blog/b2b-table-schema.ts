/** Parse supplier/award tables from Behind the Build / Contract HTML — no DOM deps. */

export interface SupplierTableRow {
  name: string
  description?: string
  url?: string
}

function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&nbsp;/g, ' ')
}

/** BtB: System slot | Supplier | Role | Evidence */
export function parseBehindTheBuildTable(html: string): SupplierTableRow[] {
  const rows: SupplierTableRow[] = []
  const re = /<tr><td>((?:[^<]|<(?!\/td>))*?)<\/td><td><strong>((?:[^<]|<(?!\/strong>))*?)<\/strong><\/td><td>((?:[^<]|<(?!\/td>))*?)<\/td><td>(?:<a href="([^"]*)")?/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    const slot = decodeHtmlEntities(m[1].trim())
    const supplier = decodeHtmlEntities(m[2].trim())
    const role = decodeHtmlEntities(m[3].trim())
    rows.push({
      name: `${supplier} · ${slot}`,
      description: role,
      url: m[4] || undefined,
    })
  }
  return rows
}

/** BtC: Award | System slot | Supplier | Evidence */
export function parseBehindTheContractTable(html: string): SupplierTableRow[] {
  const rows: SupplierTableRow[] = []
  const re = /<tr><td>((?:[^<]|<(?!\/td>))*?)<\/td><td>((?:[^<]|<(?!\/td>))*?)<\/td><td><strong>((?:[^<]|<(?!\/strong>))*?)<\/strong><\/td><td>(?:<a href="([^"]*)")?/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    const award = decodeHtmlEntities(m[1].trim())
    const slot = decodeHtmlEntities(m[2].trim())
    const supplier = decodeHtmlEntities(m[3].trim())
    rows.push({
      name: `${supplier} · ${slot}`,
      description: award,
      url: m[4] || undefined,
    })
  }
  return rows
}

export function buildSupplierItemListLd(name: string, rows: SupplierTableRow[]) {
  if (rows.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: rows.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: rows.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.name,
      ...(r.description ? { description: r.description } : {}),
      ...(r.url ? { url: r.url } : {}),
    })),
  }
}
