<template>
  <div class="carousel-container">
    <el-carousel height="calc(100vh - 60px)" arrow="always">
      <el-carousel-item>
        <img class="img" src='@/assets/imgs/bg.jpg' alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img class="img" src='@/assets/imgs/bg1.jpg' alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="overlay ">
      <div class="welcome-text ">
        <h1 class="animate__animated animate__fadeInDown ">IWEAI 2024：The First International Workshop on Educational Artificial Intelligence</h1>
        <h2 class="animate__animated animate__fadeInUp">
          Kyoto, Japan
        </h2>
        <h2 class="animate__animated animate__fadeInUp">
          18-19 November 2024
        </h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// const imgs = ref([
//   '@/assets/imgs/bg.jpg',
//   '@/assets/imgs/bg1.jpg'
// ])

</script>
<style scoped>
.carousel-container {
  /* position: relative; */
  height: calc(100vh - 60px);
  /* height: 100vh; */
}

.img {
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  min-width: 100%;
  width: 100% !important;
  object-fit: cover;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
  height: 80%;
  /* background: rgba(255, 255, 255, 0.5);  */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  /* font-size: 50px; */
  font-weight: bold;
}

.welcome-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 57, 115, 0.5);
  /* background: linear-gradient( transparent 10%, rgba(0, 57, 115 ,0.6) 40%,transparent ); */
  /* 半透明黑色背景 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* 文字阴影，增加效果 */
}
</style>