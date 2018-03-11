<template>
  <div class="body">
    <header-bar></header-bar>
    <!-- 小的配件 -->
    <div class="musicheader-content">
      <div class="musicheader">
        <ul class="music-items">
          <li :class="'music-item-'+index +' music-item'" v-for="(item, index) in headbar" :key="item.id">
            <a href="#" class="music-item-link">
              <img :src="item.img" class="music-item-img">
              <span class="music-item-label">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="music-hero">
      <div class="hero-content">
        <video :src="body.music.source" autoplay="autoplay" class="play-video"></video>
        <div class="music-wrapper">
          <img :src="body.music.img">
          <h1 class="music-headline">
            数百万首歌曲，
            <br>
            三个月尽情聆听。
          </h1>
          <p class="music-info">
            {{body.music.info}}
          </p>
          <div class="music-button">
            <span class="music-button-span">
              开始免费三个月试用
              <sup>*</sup>
            </span>
          </div>
          <p class="music-more">
            进一步了解 Apple Music
          </p>
        </div>
      </div>
    </div>
    <div class="pods">
      <div class="pods-content">
        <div class="pods-info">
          <h2 class="pods-sup">
            <div class="eyebrow">{{body.pods.name}}</div>
            无线，
            <br>
            无繁琐，
            <br>
            只有妙不可言。
          </h2>
          <p class="pods-more">
            进一步了解 {{body.pods.name}}
          </p>
        </div>
        <img :src="body.pods.img" class="pods-img" />
      </div>
    </div>
    <div class="touch">
      <div class="touch-content">
        <div class="touch-info">
          <h2 class="touch-sup">
            <div class="eyebrow">{{body.touch.name}}</div>
            你喜爱的音乐，
            <br>
            随身带走。
          </h2>
          <p class="touch-more">
            进一步了解 {{body.touch.name}}
          </p>
        </div>
        <img :src="body.touch.img" class="touch-img" />
      </div>
    </div>
    <div class="access">
      <div class="access-content">
        <div class="access-info">
          <h2 class="access-sup">
            <div class="eyebrow">{{body.access.name}}</div>
            淋漓尽致，
            <br>
            绽放你的音乐。
          </h2>
          <p class="access-more">
            选购耳机和扬声器
          </p>
        </div>
        <img :src="body.access.img" class="access-img" />
      </div>
    </div>
    <div class="itunes">
      <div class="itunes-content">
        <div class="itunes-info">
          <h2 class="itunes-sup">
            <div class="eyebrow">{{body.itunes.name}}</div>
            你的私人音乐
            <br>
            游乐园。
          </h2>
          <p class="itunes-more-1">
            进一步了解 {{body.itunes.name}}
          </p>
          <p class="itunes-more-2">
            下载 {{body.itunes.name}}
          </p>
        </div>
        <img :src="body.itunes.img" class="itunes-img" />
      </div>
    </div>
    <div class="cards">
      <div class="cards-content">
        <div class="cards-info">
          <h2 class="cards-sup">
            <div class="eyebrow">{{body.cards.name}}</div>
             为精彩游戏和 App 更添惊喜
             <div class="eyebrow-sup">1</div>。
          </h2>
          <p class="cards-more">
            进一步了解
          </p>
        </div>
        <img :src="body.cards.img" class="cards-img" />
      </div>
    </div>
    <div class="apps">
      <div class="apps-content">
        <div class="apps-headline">
          多款出色的音乐创作 App，
          <br>
          出自 Apple。
        </div>
        <img :src="body.apps.img" class="apps-img">
        <div class="app-content">
          <ul class="app-items">
            <li class="app-item" v-for="item in body.apps.item" :key="item">
              <img :src="item.img" class="app-item-img">
              <div class="app-item-title">{{item.name}}</div>
              <div class="app-item-info">{{item.info}}</div>
              <div class="app-item-more">
                进一步了解
                <br>
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="appmusic">
      <div class="appmusic-content">
        <div class="appmusic-img">
          <img :src="body.appmusic.img">
        </div>
        <div class="appmusic-info">
          <h3 class="appmusic-title">{{body.appmusic.title}}</h3>
          <p class="appmusic-subtitle">{{body.appmusic.info}}</p>
          <div class="appmusic-more">进一步了解</div>
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
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/musicData"
      )
      .then(response => {
        this.headbar = response.data.headbar;
        this.body = response.data.body;
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
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
.body {
  background: black;
  width: 100%;
  height: 100%;
}
/* 小配件的样式 */
.musicheader-content {
  width: 100%;
  height: 86px;
  overflow: hidden;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background: rgba(26, 26, 26, 0.7);
}
.musicheader {
  height: 100%;
}
.music-items {
  list-style: none;
  padding: 0;
  padding-bottom: 48px;
  margin: 0;
}
/* 配件 */
.music-item {
  display: inline-block;
  margin-left: 0;
  padding-right: 25px;
  padding-left: 25px;
  height: 75px;
}
.music-item:first-child {
  display: inline-block;
  margin-left: 0;
  padding-right: 20px;
  height: 75px;
}
.music-item-link {
  color: #fff;
  position: relative;
  text-decoration: none;
}
.music-item-link:hover {
  color: #6bf;
}
.music-item-img {
  height: 54px;
}
.music-item-label {
  font-size: 10px;
  font-weight: 300;
  line-height: 1.09091;
  display: block;
}
/* 第一个section Apple Music */
.music-hero {
  width: 100%;
  height: 650px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.hero-content {
  width: 980px;
  height: 660px;
  margin: auto;
}
.play-video {
  width: 980px;
  height: 1054px;
  margin-top: -210px;
  margin-left: 170px;
  position: absolute;
  cursor: pointer;
}
.music-wrapper {
  width: 460px;
  height: 419px;
  margin-top: 130px;
  float: left;
  position: absolute;
}
.music-headline {
  width: 460px;
  height: 88px;
  color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 44px;
  font-weight: 350;
}
.music-info {
  width: 450px;
  height: 132px;
  margin-bottom: 10px;
  color: white;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 0.09em;
  font-size: 18px;
}
.music-button {
  cursor: pointer;
  background: #ff365d;
  margin-top: 13px;
  height: 36px;
  width: 190px;
  margin-top: 25px;
  line-height: 28px;
  font-size: 15px;
  color: white;
  font-weight: 250;
  border-radius: 4px;
}
.music-button-span {
  margin-left: 15px;
  position: relative;
}
.music-button-span::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 13px;
  top: 3px;
  background: #fff;
  left: 155px;
  transform: rotate(45deg);
}
.music-button-span::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  right: -17px;
  top: 4px;
}
.music-more {
  color: white;
  margin-top: 25px;
  font-size: 15px;
  font-weight: 300;
  width: 160px;
  position: relative;
}
.music-more::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  right: -8px;
  top: 7px;
  transform: rotate(45deg);
}
.music-more:hover {
  text-decoration: underline;
}
/* 第二个 section AirPods */
.pods {
  width: 100%;
  height: 932px;
  background: #f5fdf1;
}
.pods-content,
.touch-content,
.access-content,
.itunes-content,
.cards-content {
  width: 980px;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.pods-img {
  width: 588px;
  height: 932px;
  margin-top: 50px;
  float: right;
  margin-right: -20px;
  cursor: pointer;
}
.pods-info {
  width: 327px;
  height: 255px;
  float: left;
  margin-top: 390px;
}
.pods-sup,
.touch-sup,
.access-sup,
.itunes-sup,
.cards-sup {
  font-size: 35px;
  line-height: 43px;
}
.eyebrow {
  font-weight: 350;
  width: 327px;
  height: 28px;
  font-size: 24px;
  margin-bottom: 30px;
}
.pods-more {
  margin-top: 25px;
  font-size: 16px;
  font-weight: 400;
  width: 160px;
  position: relative;
  cursor: pointer;
}
.pods-more::after,
.touch-more::after,
.access-more::after,
.itunes-more-1::after,
.itunes-more-2::after,
.cards-more::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  right: 4px;
  top: 8px;
  transform: rotate(45deg);
}
.pods-more:hover,
.touch-more:hover,
.access-more:hover,
.itunes-more-1:hover,
.itunes-more-2:hover,
.cards-more:hover {
  text-decoration: underline;
}
/* 第三个 section ipod touch */
.touch {
  width: 100%;
  height: 600px;
  padding-top: 156px;
  padding-bottom: 64px;
  background: #fff1de;
}
.touch-img {
  width: 286px;
  height: 600px;
  margin-right: 120px;
  float: right;
  cursor: pointer;
}
.touch-info {
  width: 327px;
  height: 255px;
  float: left;
  margin-top: 150px;
}
.touch-more {
  margin-top: 25px;
  font-size: 16px;
  font-weight: 400;
  width: 180px;
  position: relative;
  cursor: pointer;
}
/* 第四个section 配件 */
.access {
  width: 100%;
  height: 655px;
  padding-top: 123px;
  padding-bottom: 76px;
  background: #e9f7f8;
}
.access-img {
  width: 588px;
  height: 655px;
  float: right;
  cursor: pointer;
}
.access-info {
  width: 327px;
  height: 255px;
  float: left;
  margin-top: 230px;
}
.access-more {
  margin-top: 25px;
  font-size: 16px;
  font-weight: 400;
  width: 142px;
  position: relative;
  cursor: pointer;
}
/* 第五个section iTunes */
.itunes {
  width: 100%;
  height: 624px;
  padding-top: 156px;
  padding-bottom: 70px;
  background: #fce7e3;
}
.itunes-img {
  position: absolute;
  width: 1083px;
  height: 624px;
  margin-left: -88px;
  cursor: pointer;
}
.itunes-info {
  width: 327px;
  height: 255px;
  float: left;
  margin-top: 190px;
}
.itunes-more-1 {
  margin-top: 33px;
  font-size: 16px;
  font-weight: 400;
  width: 145px;
  position: relative;
  cursor: pointer;
}
.itunes-more-2 {
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
  width: 98px;
  position: relative;
  cursor: pointer;
}
/* 第六个section cards */
.cards {
  width: 100%;
  height: 438px;
  padding-top: 58px;
  padding-bottom: 27px;
  background: #fceffc;
}
.cards-img {
  position: absolute;
  width: 507px;
  height: 438px;
  margin-left: -88px;
  cursor: pointer;
}
.cards-info {
  width: 572px;
  height: 255px;
  float: left;
  margin-top: 120px;
}
.cards-more {
  margin-top: 25px;
  font-size: 16px;
  font-weight: 400;
  width: 95px;
  position: relative;
  cursor: pointer;
}
.eyebrow-sup {
  width: 10px;
  height: 10px;
  font-size: 12px;
  float: right;
  margin-right: 125px;
  margin-top: -10px;
}
/* 第七部分 Apps */
.apps {
  width: 100%;
  height: 1047px;
  padding-top: 132px;
  padding-bottom: 132px;
  background: white;
}
.apps-content {
  width: 980px;
  height: 100%;
  margin: auto;
}
.apps-headline {
  width: 980px;
  height: 88px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
}
.apps-img {
  width: 942px;
  height: 494px;
  margin-top: 62px;
  margin-left: 25px;
  margin-bottom: 115px;
}
.app-content {
  width: 980px;
  height: 288px;
  color: #333;
}
.app-items {
  width: 100%;
  height: 100%;
  list-style: none;
}
.app-item {
  width: 25%;
  height: 100%;
  float: left;
}
.app-item-title {
  margin-top: 20px;
  height: 28px;
  font-size: 22px;
}
.app-item-info {
  margin-top: 13.6px;
  font-size: 15px;
  line-height: 25px;
  padding-right: 32px;
  font-weight: 350;
}
.app-item-more {
  margin-top: 13.6px;
  font-size: 15px;
  line-height: 24px;
  position: relative;
  cursor: pointer;
}
.app-item-more::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  right: 160px;
  top: 32px;
  transform: rotate(45deg);
}
.app-item-more:hover {
  text-decoration: underline;
}
.app-item:nth-child(2) .app-item-more:after {
  right: 190px;
}
.app-item:nth-child(3) .app-item-more:after {
  right: 157px;
}
.app-item:nth-child(4) .app-item-more:after {
  right: 150px;
}
/* 最后一个部分 */
.appmusic {
  width: 100%;
  height: 403px;
  background: white;
}
.appmusic-content {
  width: 980px;
  height: 138px;
  padding-top: 132px;
  padding-bottom: 132px;
  border-top: 1px solid #d6d6d6;
  margin: auto;
}
.appmusic-img {
  margin-left: 8.33333%;
  width: 245px;
  height: 71px;
  text-align: right;
  float: left;
}
.appmusic-img img {
  margin-right: 35px;
}
.appmusic-info {
  width: 490px;
  height: 138px;
  float: left;
}
.appmusic-title {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 400;
  letter-spacing: 0.004em;
  color: #111;
}
.appmusic-subtitle {
  margin-top: 0.8em;
  font-size: 16px;
  line-height: 1.47059;
  font-weight: 350;
  color: #333;
}
.appmusic-more {
  margin-top: 14.6px;
  font-size: 16px;
  color: #333;
  width: 100px;
  position: relative;
  cursor: pointer;
}
.appmusic-more::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  right: 8px;
  top: 8px;
  transform: rotate(45deg);
}
.appmusic-more:hover {
  text-decoration: underline;
}
</style>


