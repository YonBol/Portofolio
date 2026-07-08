import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: { en, es },
})
