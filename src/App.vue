<template lang="html">
  <div id="app">
    <dashboard></dashboard>
    <footer style="text-align: center;">
      Source on <a href="https://github.com/blakecontreras/play-me">Github</a>. Built with Vue.<img src="./assets/logo.png" height="20px" width="20px">
    </footer>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
