<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <parent></parent>-->
<!--    <event-bus></event-bus>-->
<!--    <test></test>-->
<!--    <hello-world></hello-world>-->
    <test></test>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Parent from './components/parent.vue';
// import Test from './page/test.vue';
// import Parent from './components/eventBus2.vue';
// import EventBus from './components/eventBus.vue'
import Test from "@/components/test";
export default {
  name: 'App',
  components: {
    Test,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
