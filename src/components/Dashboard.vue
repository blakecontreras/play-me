<template lang="html">
  <div>
    <search v-on:submit="searchForGame"></search>
    <current-game :current-game="currentGame"></current-game>
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
import search from './Search'

export default {
  data() {
    return {
      recommendations: ['rec1', 'rec2'],
      user: {username: 'test', favorite: 'Gex'},
      currentGame: {title: '', image: '../../static/wizard_cat.jpg', detail: ''},
      suggestion: {title: '', image: '../../static/wizard_cat.jpg', detail: ''},
      library: ['owned1', 'owned2'],
      searchResult: {title: '', image: '../../static/wizard_cat.jpg', detail: ''}
    }
  },
  computed: {
  },
  created() {
    this.getFavoriteGame()
  },
  attached() {},
  methods: {
    _searchGiantBomb(name) {
      console.log('searching for game: ', name)
      return axios.get('/api/giantbomb/search/' + name).then((response) => {
        console.log(response)
        return response.data.results[0]
      }).catch((err) => console.log(err))
    },
    getFavoriteGame() {
      if (this.user.favorite) {
        return Promise.resolve(this._searchGiantBomb(this.user.favorite))
          .then((results) => {
            this.setCurrentGame(results)
          })
          .catch((err) => console.log(err))
      } else {
        return {title: '', image: '../../static/wizard_cat.jpg', detail: ''}
      }
    },
    setCurrentGame(results) {
      this.currentGame = {title: results.name, image: results.image.medium_url, detail: results.site_detail_url}
      return this.currentGame
    },
    searchForGame(name) {
      return this._searchGiantBomb(name)
        .then((results) => {
          this.setCurrentGame(results)
        })
        .catch((err) => console.log(err))
    }
  },
  components: {
    'current-game': currentGame,
    'search': search
  }
}
</script>

<style lang="css">
</style>
