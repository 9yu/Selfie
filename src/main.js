// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
//import './assets/css/main.sass'
Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = {
  zh: {
    message: {
      hello: 'hello world',
      sankou: '配色参考',
      indexPage: '你如今在何处做着什么呢 <br> 在这片天空的延续之处吗',
      indexPageFrom: '——《you -mirror sky-》',
      bunsyou: '文章归档',
      bunsyouNotice: '待编辑。',
      link: '友链',
      about: '关于'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界',
      sankou: '色彩参考',
      indexPage: 'あなたは今どこで何をしていますか <br> この空の続く場所にいますか',
      indexPageFrom: '——『you -mirror sky-』',
      bunsyou: '文章リスト',
      bunsyouNotice: '整理中。',
      link: 'リンク',
      about: '本サイトについて'
    }
  }
}

if(window.localStorage.getItem('userLanguage')) {
	var userLanguage = window.localStorage.getItem('userLanguage')
} else {
	var userLanguage = 'ja';
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: userLanguage, // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
}).$mount('#app')
