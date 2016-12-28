<template lang="html">
  <div>
    <div class="current-game">
      <img v-bind:src="currentGame.image">
    </div>
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
      recommendations: ['game1', 'game2'],
      user: {username: 'test', favorite: 'Gex'},
      currentGame: {title: '', image: '../../static/wizard_cat.jpg', detail: ''}
    }
  },
  computed: {
  },
  created() {
    this.getFavoriteGame()
  },
  attached() {},
  methods: {
    searchGame(name) {
      return axios.get('/api/giantbomb/search/' + name).then((response) => {
        console.log(response)
        return response.data.results[0]
      }).catch((err) => console.log(err))
    },
    getFavoriteGame() {
      if (this.user.favorite) {
        return Promise.resolve(this.searchGame(this.user.favorite))
          .then((results) => {
            console.log(results)
            this.currentGame = {title: results.name, image: results.image.medium_url, detail: results.site_detail_url}
            return this.currentGame
          })
          .catch((err) => console.log(err))
      } else {
        return {title: '', image: '../../static/wizard_cat.jpg', detail: ''}
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
