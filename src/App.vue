<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    background: #e0d8d8;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .fade-enter-active {
    transition: opacity .3s ease-in;
  }
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

}
</style>
