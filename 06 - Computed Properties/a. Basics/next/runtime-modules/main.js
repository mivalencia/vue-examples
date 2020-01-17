/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue-next/dist/vue.esm.js';

Vue.createApp().mount(
  {
    data: {
      greeting: 'Hello World!'
    },
    computed: {
      uppercaseGreeting: function() {
        return this.greeting.toUpperCase();
      }
    }
  },
  '#app'
);
