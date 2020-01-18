<template>
  <div class="load">
    <svg
      class="spinner"
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        cx="20"
        cy="20"
        r="15"
      />
    </svg>
    <div class="load-num" v-if="showProgress">{{progress}}%</div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            showProgress:true,
            progress: 0
        }
    }
};
</script>
<style lang="less" scoped>
@offset: 127;
@duration: 1.4s;

.load {    
    position: fixed;
    left: 50%;
    margin-left: -20px;
    top: 0;
    text-align: center;
    .load-num {
        font-size: 16px;
    }
}
.spinner {
  animation: rotator @duration linear infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}
.path {
  stroke-dasharray: @offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash @duration ease-in-out infinite,
    colors (@duration * 4) ease-in-out infinite;
}
@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}
@keyframes dash {
  0% {
    stroke-dashoffset: @offset;
  }
  50% {
    stroke-dashoffset: @offset/2.5;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: @offset;
    transform: rotate(450deg);
  }
}
</style>