import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Article from '@/components/Article'
import Link from '@/components/Link'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/article',
      name: 'Article',
      component: Article
    }, {
      path: '/link',
      name: 'Link',
      component: Link
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
