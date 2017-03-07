<template>
  <form v-on:submit.prevent="search(searchTerm)">
    <input v-model="searchTerm">
  </form>
</template>

<script>
/*
  Props: Data to search.
  Display a search box that interacts with provided data.
  Emits search term when search submitted.
  Should have autosuggest based on input so far. Submit function should point to   *****this is for parent component
  single result detail page if autosuggest used, otherwise point to multi-result page.
  Eventually should intelligently decide if it has an exact match if autosuggest isn't used.
*/

export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  props: [],
  computed: {
  },
  methods: {
    search(searchTerm) {
      this.$emit('submit', searchTerm)
    }
  }
}

</script>

<style>

</style>