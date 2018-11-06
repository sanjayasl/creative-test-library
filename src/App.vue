<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Quantity Button Shared Component"/>
    <quantity-button></quantity-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import QuantityButton from './components/QuantityButton.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    QuantityButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
