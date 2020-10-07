/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  template: '<h1>Component Template</h1>',
  render: function (createElement) {
    return createElement('h1', ['Render()']);
  }
});
