<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'element-ui/lib/theme-chalk/index.css';
@import '~@/assets/scss/style.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
