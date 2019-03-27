/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from 'vue';

import GreetingComponent from './GreetingComponent.vue';

const component = new Vue({
  render: createElement => createElement(GreetingComponent),
  renderError: (createElement, err) =>
    createElement('pre', { style: { color: 'red' } }, err.stack)
}).$mount();

document.body.appendChild(component.$el);
