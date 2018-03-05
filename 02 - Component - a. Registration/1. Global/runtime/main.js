/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

// Register component globally
Vue.component('greeting-component', GreetingComponent);

// Bootstrap
new Vue({
  el: '#app'
});
