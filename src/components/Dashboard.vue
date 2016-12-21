<template lang="html">
  <div>
    <div v-for="recommendation in recommendations">
      <div class="game">
        {{ recommendation }}
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      recommendations: ['game1', 'game2']
    }
  },
  computed: {},
  created() {
    this.searchGame('Gex')
  },
  attached() {},
  methods: {
    searchGame(name) {
      axios.get('/api/giantbomb/search/' + name).then((response) => console.log(response))
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
