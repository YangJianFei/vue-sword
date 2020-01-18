<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <head-top></head-top>
    <router-view />
    <loading></loading>
  </div>
</template>

<script>
import headTop from "./components/header";
import loading from "./components/loading";
export default {
  name: "App",
  components: {
    headTop,
    loading
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "style/common.less";
@import "style/mixin.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @word;
  background-image: linear-gradient(to bottom right, #42376f, #2a4771);
}
</style>
