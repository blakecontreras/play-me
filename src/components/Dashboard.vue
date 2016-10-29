<template lang="html">
  <div>
    <div v-for="recommendation in recommendations">
      {{ recommendation }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendations: ['game1', 'game2'],
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
};
</script>

<style lang="css">
</style>
