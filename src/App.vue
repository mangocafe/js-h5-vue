<template>
  <div id="app">
    <com-header title="首页"/>
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
html,body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
