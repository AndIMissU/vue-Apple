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
          <div class="ads-0-wrapper">
            <h4 class="logo-title">
              <img class="logo-image" :src="ads[0].title">
            </h4>
            <h5 class="logo-subheader">{{ads[0].description}}</h5>
          </div>
          <div class="ads-0-img">
            <img :src="ads[0].img" class="img-content">
          </div>
        </li>
        <li class="ads-1"></li>
        <li class="ads-2"></li>
        <li class="ads-3"></li>
        <li class="ads-4"></li>
        <li class="ads-5"></li>
      </ul>
    </div>
  </div>
  
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      major: [],
      ads: []
    }
  },
  created: function() {
    axios.get("https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/homedata")
    .then( response => {
      this.major = response.data.major;
      this.ads = response.data.ads;
      console.log(this.major);
    })
    .catch( error => {
      alert('网络错误不能访问');
    });
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
  letter-spacing: -.005em;
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  
}
.subheadline {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: .008em;
  line-height: 1.14815;
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
}
.major-0{
  width: 100%;
  height: 692px;
  margin-top: 0;
  background: #fafafa;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-0-wrapper{
  padding-top: 117px;
}
.major-0-img{
  margin-top: 315px;
}
.iphoneX {
  position: absolute;
  left: calc(50% - 491px);
  top: 315px;
}

.major-1 {
  width: 100%;
  background: #f9f0eb;
  height: 692px;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-1-wrapper{
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
  height: 740px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.major-2-wrapper{
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
  border: 6px solid #fff;
  box-sizing: border-box;
  padding: 0;
}
.ads li {
  width: 50%;
  height: 580px;
  float: left;
  border: 6px solid #fff;
  box-sizing: border-box;
  overflow: hidden;
  background: lightblue;
}
.ads-0 {
  position: relative;
}
.ads-0-wrapper {
  position: absolute;
  z-index: 2;
  text-align: center;
  width: 100%;
  float: left;
}
.logo-title {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 90px;
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
  /* margin-top: 0; */
  margin-bottom: 0;
  font-size: 19px;
  color: #fff;
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: 300;
}
.ads-0-img {
  position: absolute;
  left: calc(50% - 631px);
  z-index: 1;
  float: left;
}
</style>



