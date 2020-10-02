/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';
import VueRouter from '../../../../../node_modules/vue-router_3/dist/vue-router.esm.browser.js';

Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };

const Page = {
  template: '<h2>Page {{ $route.params.id }} </h2>'
};

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page/:id', component: Page }
    ]
  })
}).$mount('#app');
