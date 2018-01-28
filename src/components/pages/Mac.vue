<template>
  <div class="app">
    <header-bar></header-bar>
    <div class="macheader-content">
      <div class="macheader">
        <ul class="mac-items">
          <li :class="'mac-item-'+index +' mac-item'" v-for="(item, index) in headbar" :key="item.id">
            <a href="#" class="mac-item-link">
              <img :src="item.img" class="mac-item-img">
              <span class="mac-item-label">{{item.name}}</span>
              <span class="mac-item-new" v-if="item.isnew">新款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="machines">
        <div class="section-imac">
          <div class="imac-content">
            <h2 class="product-headline">{{machines[0].headline}}</h2>
            <h3 class="product-subheadline">{{machines[0].subheadline}}</h3>
            <img :src="machines[0].img" class="imac-img">
            <div class="product-more">
              <div class="more-product-cta">进一步了解</div>
              <div class="more-product-cta">购买</div>
            </div>
          </div>
        </div>
      </div>
      <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      headbar: [],
      machines: []
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  created: function() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/macData"
      )
      .then(response => {
        this.headbar = response.data.headbar;
        this.machines = response.data.machines;
        console.log(this.machines);
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
.app {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.macheader-content {
  width: 100%;
  height: 86px;
  overflow: hidden;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background: #141414;
}
.macheader {
  height: 100%;
}
.mac-items {
  list-style: none;
  padding: 0;
  padding-bottom: 48px;
  margin: 0;
}
.mac-item {
  display: inline-block;
  margin-left: 0;
  padding-right: 20px;
  padding-left: 20px;
  height: 75px;
}
.mac-item:first-child {
  display: inline-block;
  margin-left: 0;
  padding-right: 20px;
  height: 75px;
}
.mac-item-link {
  color: #fff;
  position: relative;
  text-decoration: none;
}
.mac-item-img {
  height: 54px;
}
.mac-item-label {
  font-size: 10px;
  font-weight: 300;
  line-height: 1.09091;
  display: block;
}
.mac-item-new {
  font-size: 8px;
  color: #f46c0e;
  letter-spacing: 0.017em;
  position: absolute;
  font-weight: 300;
  line-height: 1.22226;
  width: 48px;
  margin-top: 3px;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  display: block;
}
.section-imac {
  position: relative;
  margin-top: 0;
  width: 100%;
  padding-top: 74px;
  height: 900px;
  background: #1a1a1a;
  text-align: center;
  z-index: 1;
  margin-bottom: 50px;
}
.imac-content {
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  height: 100%;
}
.product-headline {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 78px;
  line-height: 1.0625;
  font-weight: 500;
  margin-bottom: 5px;
  color: #fff;
  letter-spacing: 0em;
}
.product-subheadline {
  padding-left: 0.4em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #fff;
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 37px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: 0em;
}
.imac-img {
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -384.5px;
  z-index: -10;
}
.product-more {
  margin-top: 16px;
  display: inline-block;
  color: #6bf;
}
.more-product-cta {
  margin: 0 10px;
  font-size: 18px;
  line-height: 1.38105;
  font-weight: 250;
  letter-spacing: 0.011em;
  position: relative;
  display: inline-block;
  margin-right: 25px;
}
.more-product-cta::after {
  content: '';
  padding-left: .4em;
  top: 7px;
  height: .4em;
  margin-left: 5px;
  border-top: .083em solid #6bf;
  border-right: .083em solid #6bf;
  transform: rotate(45deg);
  position: absolute;
}
</style>


