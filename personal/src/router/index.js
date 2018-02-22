import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homepage from '@/components/homepage'
import blog from '@/components/blog'
import resume from '@/components/resume'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
