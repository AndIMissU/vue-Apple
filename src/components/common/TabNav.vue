<template>
  <div class="apps">
    <div class="app-content">
      <div class="app-title">
        <div class="app-title-content">
          <h3 class="app-title-headline">内置 App</h3>
          <p class="app-title-subheadline">
            每台 Mac 都内置了众多激发创意、提升效率的 app。这些功能强大的工具能助你来探索、交流、高效工作。访问 
            <a class="app-title-a" href="#">Mac App Store</a>
          </p>
        </div>
      </div>
      <div class="app-wrapper">
        <div class="app-nav">
          <ul class="app-tablist">
            <li :class="'app-tablist-tabitem-'+ index + ' app-tablist-tabitem'" v-for="(item, index) in inapp" :key="item.id">
              <div class="app-item-content">
                <img :src="item.img" class="app-item-img">
                <span class="app-item-name">{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inapp: [],
      majorapp: []
    };
  },

  created: function() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/appsData"
      )
      .then(response => {
        console.log(response.data);
        this.inapp = response.data.inapp;
        this.majorapp = response.data.majorapp;
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.apps {
  width: 100%;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.app-content {
  margin: auto;
  background: #fafafa;
  width: 1350px;
  height: 744px;
  padding-bottom: 108px;
}
.app-title {
  width: 100%;
  text-align: center;
  padding-top: 96px;
  height: 128px;
}
.app-title-content {
  width: 980px;
  height: 128px;
  margin: auto;
}
.app-title-headline {
  text-align: center;
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: 0em;
  color: #111;
}
.app-title-subheadline {
  margin: auto;
  margin-top: 26px;
  width: 95.66667%;
  text-align: center;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #333;
  font-size: 19px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
}
.app-title-a {
  color: #0070c9;
  text-decoration: none;
  font-size: 20px;
}
.app-title-a:hover {
  text-decoration: underline;
}
.app-wrapper {
  width: 1350px;
  height: 852px;
  padding-bottom: 108px;
}
.app-nav {
  width: 980px;
  height: 164px;
  margin: auto;
  margin-top: 39px;
}
.app-tablist {
  list-style: none;
  margin: auto;
  padding-bottom: 2.58824em;
  text-align: center;
}
.app-tablist-tabitem {
  display: inline-block;
  padding-left: 50px;
  border-bottom: 1px solid #d6d6d6;
}
.app-tablist-tabitem:first-child {
  padding-left: 0;
}
.app-item-img {
  margin: 0 auto;
  display: block;
}
.app-item-name {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-bottom: 0;
  color: #333;
  letter-spacing: 0em;
  font-size: 14px;
  line-height: 1.42861;
  font-weight: 400;
  text-align: center;
  display: block;
}
.app-item-content {
  padding: 11px 0;
}
</style>


