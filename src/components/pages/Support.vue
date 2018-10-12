<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="content">

    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from 'axios'
import footerInfo from '../common/FooterInfo'
import headerBar from '../common/HeaderBar'
export default {
  data() {
    return {
      list: [],
      prolists: [],
      body: {}
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/supportData"
      )
      .then(response => {
        this.list = response.data.list;
        this.prolists = response.data.prolists;
        this.body = response.data.body;
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  }
}
</script>
<style scoped>

</style>


