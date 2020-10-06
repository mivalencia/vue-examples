/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const ContainerComponent = httpVueLoader('./ContainerComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    ContainerComponent
  },
  data: () => ({
    name1: 'first',
    name2: 'second'
  }),
  methods: {
    handleSwitch: function () {
      if (this.name1 === 'first') {
        this.name1 = 'second';
        this.name2 = 'first';
      } else {
        this.name1 = 'first';
        this.name2 = 'second';
      }
    }
  }
});
