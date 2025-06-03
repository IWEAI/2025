<script setup lang="ts">
import NavView from '@/components/NavView/NavView.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
router.afterEach((to: { path: any; }) => {
  const carouselHeight = document.querySelector('.carousel')?.scrollHeight;
  if(to.path !== '/home'){
    window.scrollTo({
      top: carouselHeight+60,
      behavior: 'smooth',
    });
  }


});
// onMounted(() => {
//   const carouselHeight = document.querySelector('.carousel')?.scrollHeight;
//   console.log(carouselHeight);
//   window.scrollTo({
//     top: carouselHeight-60,
//     behavior: 'smooth',
//   });
// })
</script>
<template>
  <div id="app">
    <!-- <el-container>
      <el-header> -->
    <!-- <keep-alive> -->
    <el-affix :offset="0">
      <NavView class="nav"></NavView>
    </el-affix>
    <!-- </keep-alive> -->
    <!-- </el-header> -->
    <!-- <el-main class="main"> -->
    <Carousel class="carousel"></Carousel>
    <router-view></router-view>
    <div class="row">
      <div class="text-center">
          <el-row justify="center" align="middle">
            <el-col :xs="13" :sm="13" :md="8" :lg="4" :xl="4"> 
              <h2>
                SUPPORTING ORGANIZATIONS
              </h2>
            </el-col>
            <el-col :xs="13" :sm="13" :md="16" :lg="20" :xl="20">
              <div class="imgs">
                <img src="@/assets/imgs/btm-img1.png" alt="">
                <img src="@/assets/imgs/btm-img2.png" alt="">
                <img src="@/assets/imgs/btm-img3.png" alt="">
              </div>
            </el-col>
        </el-row>
        </div>
  </div>
    <!-- </el-main>
    </el-container> -->
  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow:auto; */
}

body {
  width: 100%;
  /* height: 100%; */
  margin: auto;
  padding: 0;
  background-color: #b1dbf4;
}


.nav {
  width: 100%;
  height: 60px;
  color: #fff;
}

.carousel {
  width: 100%;
}

.row{
  min-height: 120px;
  height: auto;
  background: #fff;
  margin: auto;
  // margin-top: 30px;
  align-content: center;
}
.text-center{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h2{
    color: #004076;
  }
}

.imgs{
  height: 55px;
  img{
    height: 100%;
    margin: 0 20px;
  }
}
</style>
