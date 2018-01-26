<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
export default {
  name: "App",
  components: {
    HeaderBar
  }
};
</script>

<style>

</style>
