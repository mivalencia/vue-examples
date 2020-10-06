/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    GreetingComponent
  }
});
