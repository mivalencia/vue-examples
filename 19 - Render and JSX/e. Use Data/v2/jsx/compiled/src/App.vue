<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Vue'
    };
  },
  render() {
    return <h1 id="app">Hello {this.name}!</h1>;
  }
};
</script>

<style>
#app {
  color: #444;
}
</style>
