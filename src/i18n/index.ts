import en from './lang/en'
import zh from './lang/zh'
import { createI18n } from 'vue-i18n'

const messages = {
  zh,
  en,
}

const i18n = createI18n({
  legacy: false, // 如果你使用的是 Composition API 模式
  messages,
  locale: localStorage.getItem('lang') || 'zh',
})

export default i18n
