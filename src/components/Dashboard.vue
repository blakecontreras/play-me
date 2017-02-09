<template lang="html">
  <div>
    <current-game :current-game="currentGame"></current-game>
    <div class="search">
      <input>
    </div>
    <div class="suggestion">
      <div class="game">
        <img :src="suggestion.image">
      </div>
    </div>
    <div class="recommendation queue" v-for="recommendation in recommendations">
      <div class="game">
        {{ recommendation }}
      </div>
    </div>
    <div class="rating queue" v-for="title in library">
      <div class="game">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import currentGame from './CurrentGame'

export default {
  data() {
    return {
      recommendations: ['rec1', 'rec2'],
      user: {username: 'test', favorite: 'Gex'},
      currentGame: {title: '', image: '../../static/wizard_cat.jpg', detail: ''},
      suggestion: {title: '', image: '../../static/wizard_cat.jpg', detail: ''},
      library: ['owned1', 'owned2']
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
  components: {
    'current-game': currentGame
  }
}
</script>

<style lang="css">
</style>
