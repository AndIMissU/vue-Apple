<template>
  <div class="down">
    <div class="section-footer">
      <div class="section-shop">
        更多选购方式：前往 <span class="nowrap">Apple Store 零售店</span>
        ，致电 400-666-8800 或查找在你附近的<span class="nowrap">授权经销商</span>
      </div>
      <div class="section-legal">
        <div class="section-legal-copyright">Copyright &copy; 2018 Apple Inc. 保留所有权利。</div>
        <div class="section-legal-links">
          <div class="section-legal-link">隐私政策</div>
          <div class="section-legal-link">使用条款</div>
          <div class="section-legal-link">销售政策</div>
          <div class="section-legal-link">法律信息</div>
          <div class="section-legal-link">网站地图</div>
        </div>
        <div class="section-legal-locale">
          <img src="https://images.apple.com/ac/flags/1/images/zh-cn/16.png"> 中国
        </div>
      </div>
      <p class="section-bottom">京公安网安备 11010502008968 京ICP备10214630</p>
    </div>
    
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.down {
  width: 100%;
  background: #f2f2f2;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 10px;
  padding: 0;
  margin: 0;
}
.section-footer {
  margin: auto;
  width: 980px;
  padding: 17px 0 21px;
  padding-top: 34px;
  color: #888;
}
.section-shop {
  width: 100%;
  margin-bottom: 7px;
  padding-bottom: 6px;
  border-bottom: 1px solid #d6d6d6;
  color: #999;
}
.nowrap {
  color: #0070c9;
}
.section-legal {
  width: 100%;
  position: relative;
  top: -3px;
}
.section-legal-copyright {
  float: left;
  margin-top: 3px;
  margin-right: 30px;
  color: #999;
}
.section-legal-links {
  margin-right: 30px;
  margin-top: 3px;
  position: relative;
  font-size: 10px;
  float: left;
  
}
.section-legal-link {
  border-right: 1px solid #d6d6d6;
  margin-right: 10px;
  padding-right: 12px;
  display: inline-block;
  white-space: nowrap;
  color: #555;
}
.section-legal-link:last-child {
  border: none;
  margin: 0;
  padding: 0;
}
.section-legal-locale {
  float: right;
  margin-top: 3px;
  line-height: 16px;
}
.section-legal-locale img {
  width: 16px;
  height: 16px;
  padding-right: 5px;
  float: left;
}
.section-bottom{
  margin-top: 30px;
  margin-bottom: 0;
  color: #999;
}
</style>


