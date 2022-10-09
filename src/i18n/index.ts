import { createI18n } from 'vue-i18n';

import en from '@/assets/locales/en.json';
import fr from '@/assets/locales/fr.json';

type MessageSchema = typeof fr;

const i18n = createI18n<[MessageSchema], 'fr' | 'en'>({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en,
  },
});

export { i18n };
