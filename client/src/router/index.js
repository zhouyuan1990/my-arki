import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Resume from '@/components/resume/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
