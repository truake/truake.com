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
