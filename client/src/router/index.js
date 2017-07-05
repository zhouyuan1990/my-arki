import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
