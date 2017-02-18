<template>
  <form v-on:submit.prevent="searchGame(searchTerm)">
    <input v-model="searchTerm">
    {{ searchTerm }}
  </form>
</template>

<script>
/*
  Props: Data to search. Function to return filtered data.
  Display a search box that interacts with provided data. Should return
  search results when search submitted.
  Should have autosuggest based on input so far. Submit function should point to
  single result detail page if autosuggest used, otherwise point to multi-result page.
  Eventually should intelligently decide if it has an exact match if autosuggest isn't used.
*/

export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  props: ['searchResult'],
  computed: {
  },
  methods: {
    searchGame(name) {
      // set searchResult
      console.log('I was called')
    }
  }
}

</script>

<style>

</style>