<template>
  <div v-on:click="showBag">
    <div class="adcontent">
      <div class="ad">&lt; 广告 &gt;</div>
    </div>
    <div class="content">
      <div class="headbar">
        <ul class="header-list">
          <li class="header-item head-apple">
            <router-link to="/">
              <i class="icon iconfont icon-iconfontapple"></i>

            </router-link>
          </li>
          <li class="header-item head-mac">
            <router-link to="/mac">Mac</router-link>
          </li>
          <li class="header-item head-ipad">
            <router-link to="">iPad</router-link>
          </li>
          <li class="header-item head-iphone">
            <router-link to="">iPhone</router-link>
          </li>
          <li class="header-item head-watch">
            <router-link to="">Watch</router-link>
          </li>
          <li class="header-item head-music">
            <router-link to="/music">Music</router-link>
          </li>
          <li class="header-item head-support">
            <router-link to="/support">技术支持</router-link>
          </li>
          <li class="header-item head-search">
            <router-link to="">
              <i class="icon iconfont icon-fangdajing"></i>
            </router-link>
          </li>
          <li class="header-item head-bag" >
            <router-link to="">
              <i class="icon iconfont icon-bag-copy"></i>
            </router-link>
          </li>
		    </ul>
        
      </div>
    </div>
    <div class="bagview" id="bag">
      <div class="bag-content">
        <p class="bag-message-empty">你的购物袋是空的</p>
        <nav class="bagview-nav">
          <ul class="bagview-nav-list">
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">购物袋</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">收藏</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">订单</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">账户</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">登录</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showBag(v) {
      console.log(v);
      var bag = document.getElementById("bag");
      if (v.target.className == "icon iconfont icon-bag-copy") {
        bag.style.display = "block";
      } else {
        bag.style.display = "none";
      }
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.adcontent {
  width: 100%;
  height: 40px;
  background: #444;
}
.ad {
  width: 976px;
  height: 40px;
  margin: auto;
  font-size: 10px;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 150;
  color: #a8a8aa;
  text-align: right;
  line-height: 40px;
  font-style: normal;
}
.content {
  width: 100%;
  height: 44px;
  background: rgba(0, 0, 0, 0.8);
}
.headbar {
  width: 1000px;
  height: 44px;
  margin: auto;
}
.header-list {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  height: 44px;
  position: absolute;
  cursor: pointer;
  list-style: none;
  width: auto;
  color: white;
  font-size: 13px;
  font-weight: 100;
}
.header-item {
  height: 44px;
  margin-left: 64px;
  display: inline-block;
  vertical-align: top;
  opacity: 1;
}
.header-item a {
  text-decoration: none;
  width: 40px;
  height: 44px;
  color: #fff;
  padding: 0 10px;
  line-height: 44px;
  text-align: center;
}
.header-item :hover {
  opacity: 0.65;
}
.head-apple {
  margin-left: 0;
  width: 40px;
}
.icon-iconfontapple {
  font-size: 19px;
}
.head-mac {
  width: 48px;
}
.head-ipad {
  width: 46.98px;
}
.head-iphone {
  width: 64px;
}
.head-watch {
  width: 59.98px;
}
.head-music {
  width: 57px;
}
.head-support {
  width: 65.98px;
  font-size: 11px;
}
.head-search {
  width: 36px;
}
.head-bag {
  width: 34px;
}
.icon-bag-copy {
  font-size: 16px;
}
/* 购物袋的样式 */
.bagview {
  width: 288px;
  height: 309px;
  box-sizing: content-box;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  background: white;
  opacity: 1;
  z-index: 9;
  position: absolute;
  margin-left: 1060px;
  margin-top: 4px;
  display: none;
}
.bagview::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  border-top: 1px solid #d6d6d6;
  border-left: 1px solid #d6d6d6;
  opacity: 1;
  z-index: 9;
  transform: rotate(45deg);
  margin-left: 135px;
  margin-top: -7px;
}
.bag-content {
  margin: 0 auto;
  min-height: 90px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  font-size: 13px;
}
.bag-message-empty {
  color: #888;
  padding: 35px 0;
  margin: 0;
  text-align: center;
  letter-spacing: normal;
  font-weight: 300;
  font-family: inherit;
}
.bagview-nav {
  margin-bottom: 2px;
  width: 248px;
  height: 220px;
  margin: 0 auto;
  box-sizing: content-box;
}
.bagview-nav-list {
  list-style: none;
  border-top: 1px solid #e3e3e3;
}
.bagview-nav-item {
  margin: 0;
  padding: 0;
  border-top: 1px solid #e3e3e3;
}
.bagview-nav-item:first-child {
  border-top-style: none;
}
.bagview-nav-link {
  color: #0688f3;
  display: block;
  line-height: 43px;
  padding: 0 30px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* font-weight: 300; */
}
.bagview-nav-link:hover {
  text-decoration: underline;
}
</style>


