<template>
  <div id="app">
    <com-header msg="首页"/>
    <router-view/>
  </div>
</template>

<script>
import comHeader from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    comHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
