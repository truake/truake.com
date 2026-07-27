/** Top-20 health procurement clusters for phased Contract launch (buyer_brand_id). */
export const BEHIND_THE_CONTRACT_PILOT_BUYER_IDS: number[] = [
  1014264, // INGESA (Spain)
  1014179, // Servicio Cántabro de Salud
  1014386, // UCK Warsaw
  1014182, // OSAKIDETZA
  1014837, // NÖ Landesgesundheitsagentur
  1014238, // SYKEHUSINNKJØP HF
  1014746, // Uniwersyteckie Centrum Kliniczne
  1014276, // SZPITAL UNIWERSYTECKI W KRAKOWIE
  1014289, // Steiermärkische Krankenanstaltengesellschaft
  1014409, // Krakowski Szpital Specjalistyczny
  1014309, // Universitätsklinikum Freiburg
  1014863, // Region Hovedstaden
  1014191, // Prospitalia GmbH
  1014357, // Klinički bolnički centar Zagreb
  1014767, // Unidade Local de Saúde do Algarve
  1015268, // Wiener Gesundheitsverbund
  1014560, // Wojewódzkie Centrum Onkologii
  1014351, // Samodzielny Szpital Zachodni
  1014338, // Stadt Wien — Wiener Gesundheitsverbund
  1014433, // Salzburger Landeskliniken
]

export const BEHIND_THE_CONTRACT_TOTAL_READY = 101

export function isPilotContractSlug(slug: string): boolean {
  const m = slug.match(/-(\d+)$/)
  if (!m) return false
  return BEHIND_THE_CONTRACT_PILOT_BUYER_IDS.includes(Number(m[1]))
}
