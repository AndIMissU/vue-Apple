<template>
  <div class="apps">
    <div class="app-content">
      <div class="app-title">
        <div class="app-title-content">
          <h3 class="app-title-headline">内置 App</h3>
          <p class="app-title-subheadline">
            每台 Mac 都内置了众多激发创意、提升效率的 app。这些功能强大的工具能助你来探索、交流、高效工作。访问 
            <a class="app-title-a" href="#">Mac App Store</a>
            ，更有成百上千款 app 等你发现。
          </p>
        </div>
      </div>
      <div class="app-wrapper">
        <div class="app-lists">
          <div class="app-nav">
            <ul class="app-tablist">
              <li :class="'app-tablist-tabitem-'+ index + ' app-tablist-tabitem'" v-for="(item, index) in inapp" :key="item.id">
                <label :for="'li-'+index">
                <div class="app-item-content">
                    <a class="app-item-content-href">
                      <img :src="item.img" class="app-item-img">
                      <span class="app-item-name">{{item.name}}</span>
                    </a>
                </div>
                </label>
                <input type="radio" :id="'li-'+index" :class="'nav-'+index" name="demo" :model="index">
              </li>
            </ul>
          </div>
          <div class="app-galleys">
            <ul class="app-galley">
              <li :class="'app-galley-item galley-item-'+index" v-for="(item,index) in inapp" :key="item.id" :id="'content-'+index">
                <div class="galley-item-img">
                  <img :src="item.info.outimg" class="galley-item-outimg">
                  <img :src="item.info.inimg" class="galley-item-inimg">
                </div>
                <div class="galley-item-info">
                  <div class="galley-item-infocontent">
                    <p class="galley-item-title">{{item.name}}</p>
                    <p class="galley-item-description">{{item.info.description}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
      majorapp: [],
      picked: ""
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
  height: 976px;
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
.app-lists {
  width: 980px;
  margin: auto;
}
.app-nav {
  width: 980px;
  height: 164px;
  margin: auto;
  margin-top: 39px;
  margin-bottom: 50px;
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
.app-item-content-href {
  text-decoration: none;
}
.app-item-content-href:hover .app-item-name {
  color: #0070c9;
}
.app-galley {
  width: 100%;
  display: block;
  text-align: left;
  list-style: none;
}
.galley-item-img {
  width: 66.66667%;
  z-index: 1;
  float: left;
  box-sizing: border-box;
}
.galley-item-info {
  display: block;
  width: 33.33333%;
  height: 100%;
  float: left;
}
.galley-item-infocontent {
  margin-top: 60%;
  transform: translateY(-50%);
}
.galley-item-title {
  font-size: 29px;
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: 0.004em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #111;
}
.galley-item-description {
  margin-top: 12px;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 15px;
  line-height: 1.67059;
  font-weight: 350;
  color: #333;
}
.galley-item-img {
  position: relative;
}
.galley-item-outimg {
  margin-top: 5px;
  margin-left: 0px;
}
.galley-item-inimg {
  position: absolute;
  top: 29px;
  left: 24px;
  z-index: 10;
}
input[type="radio"] {
  /* display: none; */
}
li label {
  cursor: pointer;
}
.app-galley-item {
  display: none;
}


.galley-item-0 {
  display: block;
}
.nav-1:checked~.app-item-content,
.nav-2:checked~.app-item-content {
  border-left: 1px solid black;
}
</style>


