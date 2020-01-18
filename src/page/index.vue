<template>
  <div class="container">
    <div class="con-home">
      <div>{{name}}</div>
      <a @click="showFire">fire</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "home"
    };
  },
  methods: {
    showFire: function() {
      this.$router.push("/fire");
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}
.con-home {
  flex: 1;
}
</style>