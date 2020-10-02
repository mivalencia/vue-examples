/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// To use Vue Router v4 in the browser:
// Shim: https://github.com/guybedford/es-module-shims
// Or Chrome: chrome://flags/#enable-experimental-productivity-features

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';
import {
  createRouter,
  createWebHashHistory
} from '../../../../../node_modules/vue-router_4/dist/vue-router.esm-browser.js';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
