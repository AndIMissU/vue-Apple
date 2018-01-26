<template>
  <div>
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
            <router-link to="">Music</router-link>
          </li>
          <li class="header-item head-support">
            <router-link to="">技术支持</router-link>
          </li>
          <li class="header-item head-search">
            <router-link to="">
              <i class="icon iconfont icon-fangdajing"></i>
            </router-link>
          </li>
          <li class="header-item head-bag">
            <router-link to="">
              <i class="icon iconfont icon-bag-copy"></i>
            </router-link>
          </li>
		</ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
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
</style>


