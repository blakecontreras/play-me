<template>
  <div class="current-game">
    <img v-bind:src="currentGame.image">
  </div>
</template>

<script>
/*
  Props: Currently selected game from parent component.
  Displays selected game.
*/
  export default {
    props: ['currentGame']
  }
</script>

<style>

</style>