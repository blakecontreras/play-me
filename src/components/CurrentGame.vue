<template>
  <div class="current-game">
    <img v-bind:src="currentGame.image">
  </div>
</template>

<script>
  export default {
    props: ['currentGame']
  }
</script>

<style>

</style>