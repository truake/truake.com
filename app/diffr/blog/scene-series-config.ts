/** Scene Series hub — editorial flat-lay brand guides (EDC · WIMB · OOTD). */

export type SceneSeriesEntry = {
  slug: string
  title: string
  preset?: number
}

export type SceneSeriesCategory = {
  id: 'edc' | 'wimb' | 'ootd'
  label: string
  tagline: string
  scenes: SceneSeriesEntry[]
}

export const SCENE_SERIES_HUB_SLUG = 'scene-series'

export const APP_STORE_URL = 'https://apps.apple.com/us/app/diffr/id6772870733'

export const SCENE_SERIES_CATEGORIES: SceneSeriesCategory[] = [
  {
    id: 'edc',
    label: 'EDC Scenes',
    tagline: 'Everyday carry flat lays — one specialist brand per pocket-dump slot.',
    scenes: [
      { slug: 'tech-essentials-edc-brand-guide', title: 'Tech Essentials EDC', preset: 177 },
      { slug: 'tough-travel-edc-brand-guide', title: 'Tough Travel EDC', preset: 176 },
      { slug: 'lifetime-edc-brand-guide', title: 'Lifetime EDC Essentials', preset: 171 },
      { slug: 'garage-on-your-feet-brand-guide', title: 'A Garage On Your Feet', preset: 167 },
      { slug: 'hivis-orange-edc-brand-guide', title: 'All Orange EDC', preset: 168 },
      { slug: 'micro-edc-brand-guide', title: 'Micro EDC Essentials', preset: 164 },
      { slug: 'budget-edc-under-30-brand-guide', title: 'Budget EDC Under $30', preset: 161 },
      { slug: 'best-new-edc-2026-brand-guide', title: 'Best New EDC 2026', preset: 158 },
      { slug: 'blackout-titanium-edc-brand-guide', title: 'Blackout Titanium EDC', preset: 155 },
      { slug: 'under-100-edc-brand-guide', title: 'Under $100 Tech EDC', preset: 152 },
      { slug: 'unusual-edc-brand-guide', title: 'Unusual EDC', preset: 149 },
      { slug: 'japanese-craft-edc-brand-guide', title: 'Japanese Craft EDC', preset: 146 },
      { slug: 'evergreen-edc-brand-guide', title: 'Evergreen EDC', preset: 143 },
      { slug: 'gray-edc-knoll-brand-guide', title: 'Gray EDC Knoll', preset: 134 },
      { slug: 'charcoal-travel-tech-edc-brand-guide', title: 'Charcoal Travel-Tech EDC', preset: 142 },
      { slug: 'mini-edc-sling-brand-guide', title: 'Mini EDC Sling', preset: 141 },
      { slug: 'tech-grooming-tray-brand-guide', title: 'Tech & Grooming Tray EDC', preset: 140 },
      { slug: 'mini-but-mighty-edc-brand-guide', title: 'Mini But Mighty EDC', preset: 139 },
      { slug: 'dark-valet-tray-edc-brand-guide', title: 'Dark Valet Tray EDC', preset: 138 },
      { slug: 'xpac-monochrome-sling-edc-brand-guide', title: 'X-PAC Monochrome Sling EDC', preset: 137 },
      { slug: 'quiet-luxury-edc-brand-guide', title: 'Quiet Luxury EDC', preset: 113 },
      { slug: 'creative-desk-edc-brand-guide', title: 'Creative Desk EDC', preset: 122 },
    ],
  },
  {
    id: 'wimb',
    label: 'WIMB Scenes',
    tagline: 'What\'s in my bag spills — ten travel-ready picks, zero brand repeats.',
    scenes: [
      { slug: 'wimb-coach-gray-satchel-brand-guide', title: 'Coach Gray Satchel WIMB', preset: 178 },
      { slug: 'wimb-celine-triomphe-brand-guide', title: 'Celine Triomphe Tote WIMB', preset: 175 },
      { slug: 'wimb-nanette-lepore-brand-guide', title: 'Nanette Lepore Fall WIMB', preset: 172 },
      { slug: 'wimb-dark-brown-satchel-brand-guide', title: 'Dark Brown Satchel WIMB', preset: 165 },
      { slug: 'wimb-antique-craft-brand-guide', title: 'Antique Craft Slouchy Tote WIMB', preset: 169 },
      { slug: 'wimb-teddy-blake-brand-guide', title: 'Teddy Blake Dana WIMB', preset: 162 },
      { slug: 'wimb-straw-tote-brand-guide', title: 'Straw Tote WIMB', preset: 159 },
      { slug: 'wimb-rachel-zoe-brand-guide', title: 'Rachel Zoe Straw Tote WIMB', preset: 156 },
      { slug: 'wimb-parisa-wang-brand-guide', title: 'Parisa Wang Gabrielle WIMB', preset: 153 },
      { slug: 'wimb-speedy-brand-guide', title: 'LV Speedy 25 WIMB', preset: 150 },
      { slug: 'wimb-chubby-bag-brand-guide', title: 'Stand Oil Chubby Bag WIMB', preset: 147 },
      { slug: 'wimb-munchi-brand-guide', title: 'WIMB Munchi Creative Carry', preset: 144 },
      { slug: 'whats-in-my-bag-brand-guide', title: 'Luxury Beauty WIMB', preset: 112 },
      { slug: 'girl-essentials-brand-guide', title: 'Girl Essentials MacBook Kit', preset: 124 },
    ],
  },
  {
    id: 'ootd',
    label: 'OOTD Scenes',
    tagline: 'Outfit flat lays — wardrobe slots with one brand per layer.',
    scenes: [
      { slug: 'styling-off-white-denim-brand-guide', title: 'Navy Denim OOTD', preset: 179 },
      { slug: 'styling-puma-speedcat-brand-guide', title: 'PUMA Speedcat OOTD', preset: 174 },
      { slug: 'styling-trench-coat-brand-guide', title: 'Earth-Tone Trench Coat OOTD', preset: 173 },
      { slug: 'styling-brown-leather-jacket-brand-guide', title: 'Brown Leather Jacket OOTD', preset: 166 },
      { slug: 'styling-airport-carryon-brand-guide', title: 'Cozy Airport Carry-On OOTD', preset: 170 },
      { slug: 'styling-overcoat-brand-guide', title: 'Wool Overcoat OOTD', preset: 163 },
      { slug: 'styling-tabby-boots-brand-guide', title: 'Tabby Boots OOTD', preset: 160 },
      { slug: 'styling-navy-uniform-brand-guide', title: 'Navy Uniform OOTD', preset: 157 },
      { slug: 'styling-green-pants-brand-guide', title: 'Styling Green Pants OOTD', preset: 154 },
      { slug: 'styling-day-date-brand-guide', title: 'Day Date OOTD', preset: 151 },
      { slug: 'styling-navy-trousers-brand-guide', title: 'Styling Navy Trousers', preset: 148 },
      { slug: 'styling-summer-linen-brand-guide', title: 'Styling Summer Linen', preset: 145 },
    ],
  },
]

export function sceneSeriesCount(): number {
  return SCENE_SERIES_CATEGORIES.reduce((n, c) => n + c.scenes.length, 0)
}
