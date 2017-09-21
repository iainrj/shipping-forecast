import Vue from 'vue';
import Router from 'vue-router';
import Areas from '@/components/Areas';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Areas',
      component: Areas,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
