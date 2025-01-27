import i18n from '.'

//切换语言（如果有组件库的国际化切换也放到该方法中统一切换）
export function changeLang(locale: any) {
  localStorage.setItem('lang', locale)
  i18n.global.locale.value = locale
}
