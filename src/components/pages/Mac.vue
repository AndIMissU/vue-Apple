<template>
  <div class="app">
    <!-- 顶部的导航 -->
    <header-bar></header-bar>
    <!-- 导航下面的二级导航：小电脑 -->
    <div class="macheader-content">
      <div class="macheader">
        <ul class="mac-items">
          <li :class="'mac-item-'+index +' mac-item'" v-for="(item, index) in headbar" :key="item.id">
            <a href="#" class="mac-item-link">
              <img :src="item.img" class="mac-item-img">
              <span class="mac-item-label">{{item.name}}</span>
              <!-- 小电脑是否为新款 -->
              <span class="mac-item-new" v-if="item.isnew">新款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 四台电脑的介绍 -->
    <div class="machines">
      <!-- iMac Pro -->
      <div class="section-imacpro">
        <div class="imacpro-content">
          <h2 class="product-headline imacpro-headline">{{machines[0].headline}}</h2>
          <h3 class="product-subheadline imacpro-subheadline">{{machines[0].subheadline}}</h3>
          <img :src="machines[0].img" class="imacpro-img">
          <div class="product-more">
            <div class="more-product-cta imacpro-cta">进一步了解</div>
            <div class="more-product-cta imacpro-cta">购买</div>
          </div>
        </div>
      </div>
      <!-- iMac -->
      <div class="section-imac">
        <div class="imac-content">
          <h2 class="product-headline">{{machines[1].headline}}</h2>
          <h3 class="product-subheadline">{{machines[1].subheadline}}</h3>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
            <div class="more-product-cta">购买</div>
          </div>
          <div class="imac-img-content">
            <img :src="machines[1].img" class="imac-img">
          </div>
        </div>
      </div>
      <!-- MacBook Pro -->
      <div class="section-macbookpro">
        <div class="macbookpro-content">
          <h2 class="product-headline">{{machines[2].headline}}</h2>
          <h3 class="product-subheadline">{{machines[2].subheadline}}</h3>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
            <div class="more-product-cta">购买</div>
          </div>
          <img :src="machines[2].img" class="macbookpro-img">
        </div>
      </div>
      <div class="section-macbook">
        <div class="macbook-content">
          <h2 class="product-headline">{{machines[3].headline}}</h2>
          <h3 class="product-subheadline">{{machines[3].subheadline}}</h3>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
            <div class="more-product-cta">购买</div>
          </div>
          <div class="macbook-img-content">
            <img :src="machines[3].img" class="macbook-img">
          </div>
        </div>
      </div>
    </div>
    <div class="system">
      <div class="system-content">
        <div class="system-headline">
          <div class="system-leftheadline">{{all.system.leftheadline}}</div>
          <div class="system-rightheadline">{{all.system.rightheadline}}</div>
        </div>
        <h3 class="system-subheadline">{{all.system.subheadline}}</h3>
        <div class="system-more">
          <div class="more-system-cta">进一步了解</div>
          <div class="more-system-cta2">立即升级</div>
        </div>
        <div class="system-img-content">
          <img :src="all.system.img" class="system-img">
        </div>      
      </div>
    </div>
    <div class="compare">
      <div class="compare-content">
        <h2 class="product-headline compare-headline">{{all.compare.headline}}</h2>
        <div class="product-more">
          <div class="more-product-cta compare-product-cta">找到适合你的Mac</div>
        </div>
        <div class="compare-img-content">
          <img :src="all.compare.img" class="compare-img">
        </div>
      </div>
    </div>
    <div class="change">
      <div class="change-content">
        <div class="change-section-content">
          <h2 class="change-headline">
            Mac以旧换新,
            <br>
            你现有Mac最高可折抵RMB6,120元
            <sup>*</sup>
            。
          </h2>
          <p class="change-info">买台新 Mac，时机正好，理由更好。</p>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoptrip">
      <div class="shoptrip-content">
        <div class="shoptrip-item">
          <span class="shoptrip-icon-headline">
            <img src="https://images.apple.com/v/mac/home/y/images/home/icon_pickup_large.png">
            <h2 class="shoptrip-headline">分期付款</h2>
          </span>
          <p class="shoptrip-copy">
            符合条件的信用卡用户可选择
            <br>
            灵活的分期付款方式。
          </p>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
          </div>
        </div>
        <div class="shoptrip-item">
          <span class="shoptrip-icon-headline">
            <img src="https://images.apple.com/v/mac/home/y/images/home/icon_shipping_large.png">
            <h2 class="shoptrip-headline">免费送货</h2>
          </span>
          <p class="shoptrip-copy">享受免费送货上门服务。</p>
          <div class="product-more">
            <div class="more-product-cta">进一步了解</div>
          </div>
        </div>
      </div>
    </div>
    <div class="accessory">
      <div class="accessory-content">
        <div class="accessory-headline">{{all.accessory.headline}}</div>
        <div class="product-more">
          <div class="more-product-cta">立即选购</div>
        </div>
        <img :src="all.accessory.img" class="accessory-img">
      </div>
    </div>
    <div class="macinfo">
      <div class="macinfo-content">
        <img :src="all.macinfo.img" class="macinfo-img">
        <div class="macinfo-features">
          <div class="macinfo-items">
            <h3 class="macinfo-headline">{{all.macinfo.left.headline}}</h3>
            <p class="macinfo-copy">{{all.macinfo.left.subheadline}}</p>
            <div class="product-more">
              <div class="more-product-cta macinfo-cta">进一步了解</div>
            </div>
          </div>
          <div class="macinfo-items">
            <h3 class="macinfo-headline">{{all.macinfo.right.headline}}</h3>
            <p class="macinfo-copy">{{all.macinfo.right.subheadline}}</p>
            <div class="product-more">
              <div class="more-product-cta macinfo-cta">进一步了解</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tab-nav></tab-nav>
    <div class="education">
      <div class="education-content">
        <img :src="all.educationapp.img" class="education-img">
        <div class="education-info">
          <h3 class="education-title">{{all.educationapp.headline}}</h3>
          <p class="education-title-subheadline">{{all.educationapp.subheadline}}</p>
          <span class="education-href">
            <a class="more">{{all.educationapp.firsthref}}</a>
            <a class="more">{{all.educationapp.secondhref}}</a>
          </span>
        </div>
      </div>
    </div>
    <div class="business">
      <div class="business-content">
        <img :src="all.businessapp.img" class="business-img">
        <div class="business-info">
          <h3 class="business-title">{{all.businessapp.headline}}</h3>
          <p class="business-title-subheadline">{{all.businessapp.subheadline}}</p>
          <span class="business-href">
            <a class="more">{{all.businessapp.firsthref}}</a>
            <a class="more">{{all.businessapp.secondhref}}</a>
          </span>
        </div>
      </div>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import tabNav from "@/components/common/TabNav";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      all: {},
      headbar: [],
      machines: []
    };
  },
  components: {
    headerBar,
    footerInfo,
    tabNav
  },
  mounted: function() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/macData"
      )
      .then(response => {
        this.all = response.data;
        this.headbar = response.data.headbar;
        this.machines = response.data.machines;
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  }
};
</script>
<style scoped>
/* 全局样式 */
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
/* 头部样式 */
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
/* 小电脑的ul样式 */
.mac-items {
  list-style: none;
  padding: 0;
  padding-bottom: 48px;
  margin: 0;
}
/* 小电脑 */
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
.mac-item-link:hover {
  color: #6bf;
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
/* 小电脑为新款的样式 */
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
/* 产品标题 */
.product-headline {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 78px;
  line-height: 1.0625;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
  letter-spacing: 0em;
}
/* 产品二级标题 */
.product-subheadline {
  padding-left: 0.4em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #333;
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 37px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: 0em;
}
/* 了解更多和购买 */
.product-more {
  margin-top: 19px;
  display: inline-block;
  color: #0070c9;
}
.more-product-cta {
  margin: 0 10px;
  font-size: 18px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
  position: relative;
  display: inline-block;
  margin-right: 25px;
}
/* 购买后面的伪元素 */
.more-product-cta::after {
  content: "";
  padding-left: 0.4em;
  top: 7px;
  height: 0.4em;
  margin-left: 5px;
  border-top: 0.083em solid #0070c9;
  border-right: 0.083em solid #0070c9;
  transform: rotate(45deg);
  position: absolute;
}
/* imacpro的样式 */
.section-imacpro {
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
.imacpro-content {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  height: 100%;
}
/* imacpro的字体颜色 */
.imacpro-subheadline,
.imacpro-headline {
  color: #fff;
}
.imacpro-cta {
  font-weight: 300;
  color: #6bf;
}
.imacpro-cta::after {
  border-color: #6bf;
}
/* imacpro的图片 */
.imacpro-img {
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -384.5px;
  z-index: -10;
}
/* imac的样式 */
.section-imac {
  position: relative;
  margin-top: 50px;
  background: #fafafa;
  width: 1350px;
  padding-top: 68px;
  height: 1039px;
  color: #333;
  margin: auto;
  text-align: center;
}
/* imac的照片 */
.imac-img {
  position: absolute;
  left: 50%;
  margin-left: -523.5px;
  margin-top: 56px;
  margin-bottom: 64px;
}
/* macbookpro的样式 */
.section-macbookpro {
  position: relative;
  margin: auto;
  margin-top: 50px;
  padding-top: 68px;
  height: 655px;
  width: 1350px;
  z-index: 1;
  text-align: center;
}
/* macbookpro照片的样式 */
.macbookpro-img {
  position: absolute;
  z-index: -10;
  bottom: 0;
  left: 50%;
  margin-left: -675px;
  margin-bottom: 0;
}
/* macbook的样式 */
.section-macbook {
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 1350px;
  text-align: center;
  height: 637px;
  padding-top: 68px;
  background: #fafafa;
}
.macbook-img {
  position: absolute;
  left: 50%;
  margin-left: -477.5px;
  margin-top: 75px;
  margin-bottom: 40px;
}
/* system的样式 */
.system {
  position: relative;
  z-index: 1;
  height: 500px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  color: #fff;
}
.system-content {
  padding-top: 139px;
}
.system-img-content {
  margin: auto;
  width: 1350px;
  text-align: center;
}
/* system背景图片 */
.system-img {
  position: absolute;
  z-index: -10;
  display: block;
  bottom: 0;
}
.system-headline {
  margin: auto;
  font-size: 78px;
  margin-bottom: 6px;
  color: #fff;
  width: 980px;
  height: 85px;
}
.system-leftheadline {
  display: inline-block;
  font-weight: 500;
}
.system-rightheadline {
  font-weight: 340;
  display: inline-block;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.system-subheadline {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 36px;
  margin-top: 0;
  letter-spacing: 0em;
  font-weight: 400;
  margin-top: 15px;
}
.system-more {
  margin-top: 18px;
  font-weight: 300;
  display: inline-block;
}
/* system了解的样式 */
.more-system-cta,
.more-system-cta2 {
  position: relative;
  display: inline-block;
  margin-right: 24px;
}
/* system后面的伪元素 */
.more-system-cta::after {
  content: "";
  padding-left: 0.4em;
  top: 7px;
  height: 0.4em;
  margin-left: 5px;
  border-top: 0.083em solid #fff;
  border-right: 0.083em solid #fff;
  transform: rotate(45deg);
  position: absolute;
}
/* system后面箭头用伪元素实现 */
.more-system-cta2::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 13px;
  top: 7px;
  background: #fff;
  left: 87px;
  transform: rotate(45deg);
}
.more-system-cta2::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  right: -21px;
  top: 8px;
}
/* 机型比较 compare的样式 */
.compare {
  margin-top: 50px;
  width: 100%;
  position: relative;
}
.compare-content {
  width: 1350px;
  height: 494px;
  padding-top: 72px;
  padding-bottom: 64px;
  background: #fafafa;
  margin: auto;
  text-align: center;
}
.compare-headline {
  font-size: 46px;
}
.compare-product-cta {
  margin-left: -30px;
  font-weight: 400;
  color: #0070c9;
}
.compare-product-cta::after {
  border-color: #0070c9;
}
.compare-img {
  position: absolute;
  left: 50%;
  margin-left: -378.5px;
  margin-top: 56px;
  margin-bottom: 0px;
}
/* change以旧换新的样式 */
.change {
  margin-top: 50px;
  width: 100%;
  position: relative;
}
.change-content {
  width: 1350px;
  height: 204px;
  background: #fafafa;
  margin: auto;
  padding-top: 130px;
  padding-bottom: 130px;
  text-align: center;
}
.change-headline {
  font-size: 42px;
  line-height: 1.25365;
  font-weight: 450;
  letter-spacing: 0em;
  padding-left: 0.4em;
}
.change-headline sup {
  font-size: 0.4em;
}
.change-info {
  font-size: 19px;
  color: #333;
  letter-spacing: 0.011em;
  margin-top: 1.2em;
}
/* 免费送货和分期付款的样式 */
.shoptrip-content {
  padding-top: 136px;
  padding-bottom: 130px;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  height: 182px;
}
.shoptrip-item {
  width: 50%;
  float: left;
  text-align: center;
}
.shoptrip-icon-headline {
  font-size: 13px;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 1.38105;
  margin-bottom: 0.18421em;
  margin-top: 0.57368em;
  font-weight: 400;
  color: #111;
}
.shoptrip-copy {
  margin-top: 0.35em;
  font-size: 19px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
}
/* 配件的样式 */
.accessory {
  width: 100%;
  z-index: 1;
}
.accessory-content {
  width: 1359px;
  background: #fafafa;
  position: relative;
  height: 564px;
  padding-top: 84px;
  margin: auto;
  text-align: center;
  z-index: 1;
  overflow: hidden;
}
.accessory-headline {
  font-size: 44px;
  line-height: 1.08365;
  font-weight: 600;
}
.accessory-img {
  position: absolute;
  left: 50%;
  margin-left: -718.5px;
  margin-top: -23px;
  z-index: -10;
}
/* macinfo的样式 */
.macinfo {
  width: 100%;
}
.macinfo-content {
  padding-top: 65px;
  padding-bottom: 80px;
  width: 100%;
  height: 916px;
  text-align: center;
}
.macinfo-img {
  margin: 76px auto 54px;
}
.macinfo-features {
  margin: auto;
  margin-top: 22px;
  width: 980px;
  height: 175px;
  color: #333;
  font-size: 15px;
  line-height: 1.67059;
  font-weight: 400;
}
.macinfo-items {
  width: 41.66667%;
  margin-left: 8.33333%;
  right: auto;
  float: left;
  text-align: left;
}
.macinfo-headline {
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0em;
  margin-top: 0;
  margin-bottom: 2px;
}
.macinfo-copy {
  margin-top: 1em;
}
.macinfo-cta {
  margin-left: 0;
  font-size: 15px;
  top: -5px;
}
/* education 教育应用的样式 */
.education, .business {
  width: 100%;
  margin-top: 50px;
  padding-bottom: 110px;
}
.education-content, .business-content {
  margin: auto;
  width: 1350px;
}
.education-info, .business-info {
  text-align: center;
}
.education-img, .business-img {
  margin-bottom: 50px;
}
.education-title,.business-title {
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.education-title-subheadline, .business-title-subheadline{
  margin-top: 1.5em;
  font-size: 19px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
  color: #333;
  margin-bottom: 1.3em;
}
.education-href,.business-href {
  color: #0070c9;
  font-size: 19px;
  line-height: 1.38105;
  font-weight: 350;
  letter-spacing: 0.011em;
  position: relative;
  margin-left: -40px;
}
.more:last-child {
  margin-left: 30px;
}
.more:hover {
  border-bottom: 2px solid #0070c9;
}
.more:after {
  content: "";
  padding-left: 0.4em;
  top: 8px;
  height: 0.4em;
  margin-left: 4px;
  border-top: 0.083em solid #0070c9;
  border-right: 0.083em solid #0070c9;
  transform: rotate(45deg);
  position: absolute;
}
/* business 商务应用*/
.business {
  width: 100%;
  padding-bottom: 110px;
}
</style>
