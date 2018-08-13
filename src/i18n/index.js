import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const DEFAULT_LANG = 'en'

const locales = {
  'zh':require('./lang/zh.json'),   // 中文语言包
  'en':require('./lang/en.json')   // 英文语言包
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales,
})


export default i18n