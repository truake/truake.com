// Diffr affiliate link helpers.
// IDs are documented publicly on /diffr/affiliate-disclosure (the source of
// truth): Amazon Associates tag diffr20-20, eBay Partner Network campaign
// 5339154635. Recommendations are determined by the six-axis / fit_score, NOT
// by commission — affiliate links monetize already-independent picks.
//
// Pre-PA-API we use Amazon search URLs with the tag (the format the disclosure
// page documents). Once Amazon Product Advertising API is unlocked, these can
// be upgraded to specific ASIN/product links with live prices.

const AMAZON_TAG = "diffr20-20";
const EBAY_CAMPID = "5339154635";
const EBAY_ROVER = "https://rover.ebay.com/rover/1/711-53200-19255-0/4";

/** Amazon affiliate search link for a brand + (optional) flagship product. */
export function amazonSearchUrl(query: string): string {
  const k = encodeURIComponent(query.trim());
  return `https://www.amazon.com/s?k=${k}&tag=${AMAZON_TAG}`;
}

/** eBay Partner Network affiliate search link (rover-wrapped). */
export function ebaySearchUrl(query: string): string {
  const dest = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query.trim())}`;
  return `${EBAY_ROVER}?mpre=${encodeURIComponent(dest)}&campid=${EBAY_CAMPID}&toolid=10001`;
}

/** Search query for a slot: brand + flagship product line when available. */
export function buyQuery(brand: string, productLine: string | null): string {
  const b = brand.trim();
  const pl = (productLine ?? "").trim();
  // Avoid duplicating the brand if the product line already starts with it.
  if (pl && !pl.toLowerCase().startsWith(b.toLowerCase())) return `${b} ${pl}`;
  return pl || b;
}

// rel for affiliate outbound links (Google's guidance: sponsored).
export const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";
