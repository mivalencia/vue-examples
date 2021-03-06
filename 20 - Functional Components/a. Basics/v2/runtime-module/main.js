/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

import Greeting from './Greeting.js';
import GreetingFC from './GreetingFC.js';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    Greeting,
    GreetingFC
  },
  template: `
    <div>
      <Greeting />
      <GreetingFC />
    </div>
  `
});
