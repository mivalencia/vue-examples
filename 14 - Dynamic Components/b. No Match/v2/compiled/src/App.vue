<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div>
    <label>
      <input v-model="language" type="radio" value="dutch" />
      Dutch
    </label>
    <label>
      <input v-model="language" type="radio" value="english" />
      English
    </label>
    <label>
      <input v-model="language" type="radio" value="spanish" />
      Spanish
    </label>

    <div id="result">
      <component :is="greetingLanguage"></component>
    </div>
  </div>
</template>

<script>
import GreetingDutch from './components/GreetingDutch.vue';
import GreetingEnglish from './components/GreetingEnglish.vue';
import GreetingSpanish from './components/GreetingSpanish.vue';

export default {
  name: 'App',
  components: {
    GreetingDutch,
    GreetingEnglish,
    GreetingSpanish
  },
  data() {
    return {
      language: null
    };
  },
  computed: {
    greetingLanguage() {
      return this.language ? 'greeting-' + this.language : null;
    }
  }
};
</script>

<style>
#result {
  background: bisque;
}
</style>
