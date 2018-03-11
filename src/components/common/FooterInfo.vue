<template>
  <div class="app">
    <div class="main">
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">选购及了解</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">Mac</li>
          <li class="section-item">iPad</li>
          <li class="section-item">iPhone</li>
          <li class="section-item">Watch</li>
          <li class="section-item">Music</li>
          <li class="section-item">iTunes</li>
          <li class="section-item">iPod touch</li>
          <li class="section-item">配件</li>
          <li class="section-item">App Store 充值卡</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">Apple Store 商店</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">查找零售店</li>
          <li class="section-item">Genius Bar 天才吧</li>
          <li class="section-item">Today at Apple</li>
          <li class="section-item">Apple 夏令营</li>
          <li class="section-item">Field Trip 课外活动</li>
          <li class="section-item">Apple Store App</li>
          <li class="section-item">翻新和优惠</li>
          <li class="section-item">分期付款</li>
          <li class="section-item">重复使用和循环利用</li>
          <li class="section-item">订单状态</li>
          <li class="section-item">选购帮助</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">教育应用</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">Apple 与教育</li>
          <li class="section-item">高校师生选购</li>
        </ul>
        <div class="section-label section-second">
          <h3 class="section-title">商务应用</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">Apple 与商务</li>
          <li class="section-item">商务选购</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">账户</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">管理你的 Apple ID</li>
          <li class="section-item">Apple Store 账户</li>
          <li class="section-item">iCloud.com</li>
        </ul>
        <div class="section-label section-second">
          <h3 class="section-title">Apple 价值观</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">辅助功能</li>
          <li class="section-item">环境责任</li>
          <li class="section-item">隐私</li>
          <li class="section-item">供应商责任</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">关于Apple</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">Newsroom</li>
          <li class="section-item">Apple 管理层</li>
          <li class="section-item">工作机会</li>
          <li class="section-item">活动</li>
          <li class="section-item">联系 Apple</li>
        </ul>
      </div>
    </div>
    <last-footer></last-footer>
  </div>
</template>
<script>
import lastFooter from "@/components/common/LastFooer";
export default {
  components: {
    lastFooter
  }
};
</script>
<style scoped>
.app {
  width: 100%;
  background: #f2f2f2;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 10px;
  padding: 0;
  margin: 0;
}
.main {
  padding-top: 40px;
  width: 980px;
  height: 234px;
  margin: auto;
}
.section {
  width: 20%;
  float: left;
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  position: relative;
}
.section-label {
  margin: 0;
  padding: 0;
}
.section-title {
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 10px;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.005em;
  margin-bottom: 6px;
}
.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 20px;
}
.section-item {
  color: #888;
  margin-bottom: 6px;
}
.section-item:hover {
  cursor: pointer;
  text-decoration: underline;
  color: black;
  text-decoration-color: black;
  
}
.section-second {
  padding-top: 24px;
}
</style>


