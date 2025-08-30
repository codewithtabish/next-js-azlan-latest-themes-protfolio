export const avalible_languages = [
  { name: 'English', code: 'en' },          // Global / International
  { name: 'Mandarin Chinese', code: 'zh' }, // Most spoken native
  { name: 'Hindi', code: 'hi' },            // India
  { name: 'Spanish', code: 'es' },          // Latin America / Spain
  { name: 'Arabic', code: 'ar' },           // Middle East & North Africa
  { name: 'French', code: 'fr' },           // Africa / Europe
  { name: 'German', code: 'de' },           // Europe / Business
  { name: 'Japanese', code: 'ja' },         // Tech / Japan
  { name: 'Urdu', code: 'ur' },             // Pakistan / South Asia
  { name: 'Portuguese', code: 'pt' },       // Brazil / Europe
  { name: 'Russian', code: 'ru' },          // Eastern Europe / CIS
  { name: 'Korean', code: 'ko' },           // South Korea / Tech
]

export type LocaleType = typeof avalible_languages[number]['code']

export const allowedLocales: LocaleType[] = avalible_languages.map(lang => lang.code)

// List of languages that are written in RTL (Right-to-Left)
export const urduTypedLanguages: LocaleType[] = ['ur', 'ar', 'fa', 'ps']

export const isUrduTypedLanguage = (code: LocaleType): boolean => {
  return urduTypedLanguages.includes(code)
}
