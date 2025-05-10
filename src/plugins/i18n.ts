import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt-BR.json';
import es from '../locales/es-ES.json';

const messages = {
  en: en,
  pt: pt,
  es: es,
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});
