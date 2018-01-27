<template>
  <div class="body">
    <div class="major">
      <div class="major-0">
        <div class="major-0-wrapper">
          <h2 class="headline">{{major[0].title}}</h2>
          <h3 class="subheadline">{{major[0].description}}</h3>
        </div>
        <div class="major-0-img">
          <img :src="major[0].img" class="iphoneX">
        </div>
      </div>
      <div class="major-1">
        <div class="major-1-wrapper">
          <h2 class="headline">{{major[1].title}}</h2>
          <h3 class="subheadline">{{major[1].description}}</h3>
        </div>
        <div class="major-1-img">
          <img :src="major[1].img" class="iphone8">
        </div>
      </div>
      <div class="major-2">
        <div class="major-2-wrapper">
          <h2 class="headline">{{major[2].title}}</h2>
          <h3 class="subheadline now">{{major[2].description}}</h3>
        </div>
        <div class="major-2-img">
          <img :src="major[2].img" class="choosenow">
        </div>
      </div>
    </div>
    <div class="foot">
      <ul class="ads">
        <li class="ads-0">
          <div class="ads-wrapper">
            <h4 class="logo-title">
              <img class="logo-image" :src="ads[0].title">
            </h4>
            <h5 class="logo-subheader">{{ads[0].description}}</h5>
          </div>
          <div class="ads-0-img">
            <img :src="ads[0].img">
          </div>
        </li>
        <li class="ads-1">
          <div class="ads-1-img">
            <img :src="ads[1].img">
          </div>
        </li>
        <li class="ads-2">
          <div class="ads-wrapper">
            <h4 class="logo-title ads-2-title">
              <div class="logo-title-font">
                {{ads[2].title}}
              </div>
            </h4>
            <h5 class="logo-subheader ads-2-font">{{ads[2].description}}</h5>
          </div>
          <div class="ads-2-img">
            <img :src="ads[2].img">
          </div>
        </li>
        <li class="ads-3">
          <div class="ads-wrapper">
            <h4 class="logo-title ads-3-title">
              <div class="logo-title-font">
                {{ads[3].title}}
              </div>
            </h4>
            <h5 class="logo-subheader ads-3-font">{{ads[3].description}}</h5>
          </div>
          <div class="ads-3-img">
            <img :src="ads[3].img">
          </div>
        </li>
        <li class="ads-4">
          <div class="ads-4-wrapper">
            <h4 class="logo-4-title">
              <img class="logo-image logo-4-image" :src="ads[4].title">
            </h4>
            <h5 class="logo-subheader logo-4-info">{{ads[4].description}}</h5>
          </div>
          <div class="ads-4-img">
            <img :src="ads[4].img">
          </div>
        </li>
        <li class="ads-5">
          <div class="ads-5-wrapper">
            <h4 class="logo-title logo-5-title">{{ads[5].title}}</h4>
          </div>
          <div class="ads-5-img">
            <img :src="ads[5].img">
          </div>
        </li>
      </ul>
    </div>
    <footer-info></footer-info>
  </div>
  
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
export default {
  data() {
    return {
      major: [],
      ads: []
    };
  },
  created: function() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/homedata"
      )
      .then(response => {
        this.major = response.data.major;
        this.ads = response.data.ads;
        console.log(this.major);
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  },
  components: {
    footerInfo
  }
};
</script>
<style scoped>
.headline {
  text-align: center;
  font-size: 56px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.07143;
  letter-spacing: -0.005em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.subheadline {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.008em;
  line-height: 1.14815;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.major-0 {
  cursor: pointer;
  width: 100%;
  height: 692px;
  margin-top: 0;
  background: #fafafa;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-0-wrapper {
  padding-top: 117px;
}
.major-0-img {
  margin-top: 315px;
}
.iphoneX {
  position: absolute;
  left: calc(50% - 491px);
  top: 315px;
}

.major-1 {
  cursor: pointer;
  width: 100%;
  background: #f9f0eb;
  height: 692px;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-1-wrapper {
  padding-top: 55px;
}
.iphone8 {
  bottom: 0;
  position: absolute;
  width: 673px;
  height: 505px;
  left: calc(50% - 337px);
}

.major-2 {
  cursor: pointer;
  height: 740px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.major-2-wrapper {
  padding-top: 55px;
}
.now {
  font-size: 25px;
}
.choosenow {
  position: absolute;
  left: calc(50% - 423px);
  bottom: -273px;
}

.ads {
  width: 100%;
  display: inline-block;
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-left: 6px solid #fff;
  border-right: 6px solid #fff;
  border-top: 6px solid #fff;
  box-sizing: border-box;
  padding: 0;
}
.ads li {
  cursor: pointer;
  width: 50%;
  height: 592px;
  float: left;
  border: 6px solid #fff;

  box-sizing: border-box;
  overflow: hidden;
}
.ads-0 {
  position: relative;
}
.ads-wrapper {
  position: absolute;
  z-index: 2;
  text-align: center;
  width: 100%;
}
.logo-title {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 90px;
  font-size: 40px;
}
.logo-image {
  text-align: center;
  margin-top: 57px;
  width: 129px;
  height: 33px;
  bottom: 0;
  z-index: 3;
}
.logo-subheader {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 19px;
  color: #fff;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
}
.ads-0-img,
.ads-1-img {
  position: absolute;
  left: calc(50% - 631px);
  z-index: 1;
}
.ads-1 {
  position: relative;
}
.ads-2 {
  position: relative;
  background: #fafafa;
}
.ads-2-font {
  color: #333;
}
.logo-title-font {
  margin-top: 52px;
  height: 44px;
  bottom: 0;
}
.ads-2-title {
  height: 44px;
}
.ads-2-img {
  position: absolute;
  top: calc(50% - 73px);
  left: calc(50% - 255px);
  padding-top: 55px;
}
.ads-3 {
  position: relative;
  background: rgb(26, 26, 26);
}
.ads-3-title {
  height: 44px;
  color: #fff;
  line-height: 44px;
}
.ads-3-font {
  font-weight: 150;
  font-size: 18px;
  margin-top: 4px;
}
.ads-3-img {
  position: absolute;
  left: calc(50% - 225px);
  bottom: 0;
  height: 457px;
}
.ads-4 {
  position: relative;
  background: #fafafa;
}
.logo-4-title {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 111px;
  font-size: 40px;
  text-align: center;
}
.logo-4-image {
  width: 142px;
  height: 54px;
  text-align: center;
}
.logo-4-info {
  color: #333;
  text-align: center;
  font-weight: 300;
}
.ads-4-img {
  position: absolute;
  margin-top: 55px;
  left: calc(50% - 293px);
}
.ads-5 {
  position: relative;
  background: #fafafa;
}
.ads-5-wrapper {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 140px;
  font-size: 40px;
  text-align: center;
  padding-top: 52px;
}
.logo-5-title {
  margin: auto;
  font-size: 38px;
  width: 430px;
  height: 88px;
  color: #111;
  line-height: 44px;
}
.ads-5-img {
  padding-top: 55px;
  position: absolute;
  top: calc(50% - 81px);
  left: calc(50% - 66px);
}
</style>



