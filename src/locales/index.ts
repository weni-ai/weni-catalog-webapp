import { createI18n } from 'vue-i18n';
import pt from './pt-BR.json';
import en from './en.json';
import es from './es-ES.json';

type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], 'en' | 'pt-BR' | 'es-ES'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'pt-BR': pt,
    'en': en,
    'es-ES': es,
  },
});
