/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    'greeting-component': GreetingComponent
  }
});
