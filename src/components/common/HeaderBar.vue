<template>
  <div>
    <div class="adcontent">
      <div class="ad">
        <p class="adinfo"><广告></p>
      </div>
    </div>
    <div class="content">
      <div class="headbar"></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.adcontent {
  width: 100%;
  height: 40px;
  background: rgb(68, 68, 68);
}
.ad {
  width: 976px;
  height: 40px;
  margin: auto;
  /* background: lightblue; */
  font-size: 12px;
  color:white;
}
.adinfo {
  float: right;
}
.content {
  width: 100%;
  height: 44px;
  background: rgb(50, 50, 50);
}
.headbar {
  width: 1000px;
  height: 44px;
  margin: auto;
  background: red;
}
</style>


