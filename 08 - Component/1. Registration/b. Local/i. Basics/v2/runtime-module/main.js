/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    GreetingComponent
  }
});
