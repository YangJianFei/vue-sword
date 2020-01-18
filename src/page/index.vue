<template>
  <div class="container">
    <div class="home-sword">
      <i class="iconfont icon-gufengwujianzhongguofenggudaibingqijiangujian_huaban_huaban"></i>
    </div>
    <div class="con-home">{{name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "home"
    };
  }
};
</script>
<style lang="less" scoped>
@import '../style/mixin.less';
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.con-home {
  flex: 1;
  background-image: linear-gradient(to bottom right, #42376f, #2a4771);
}
.home-sword {
  margin-bottom: 0.4rem;
  text-align: center;  
  color: @black;
  i {
    font-size: 0.5rem;
  }
}
</style>