<template>
  <div class="home-container animate__animated animate__fadeIn" id="home">
    <el-row :gutter="20" justify="center">
      <el-col :xs="20" :sm="20" :md="20" :lg="18" :xl="18">
        <NewsCard class="commom"></NewsCard>
        <WelCard class="commom"></WelCard>
      </el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="6" :xl="6">
      <DatesCard></DatesCard>
      <!-- <FlyerCard class="commom"></FlyerCard> -->
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import NewsCard from "@/components/Home/NewsCard.vue";
import WelCard from "@/components/Home/WelCard.vue";
import DatesCard from "@/components/Home/DatesCard.vue";
// import FlyerCard from "@/components/Home/FlyerCard.vue";

</script>

<style scoped>
.home-container {
  width: 80%;
  margin: auto;
  padding: 10px 0px;
  animation-duration: 3s;
  animation-delay: 1.2s;
}
.commom {
  margin: 20px 0px;
}
</style>
