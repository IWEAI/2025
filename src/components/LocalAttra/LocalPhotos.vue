<template>
  <div>
    <el-select class="select" v-model="selectedYear" placeholder="选择年份" @change="handleYearChange">
      <el-option
        v-for="year in years"
        :key="year"
        :label="year"
        :value="year"
      />
    </el-select>

    <el-carousel :interval="2000" type="card" height="400px" v-if="selectedYear==2024">
      <el-carousel-item >
        <img src="@/assets/imgs/2024/1.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/2.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/3.png" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/4.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/5.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/6.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/7.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/imgs/2024/8.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const selectedYear = ref(2024)
const years = ref(['2024'])

// // 假设图片路径根据年份动态生成
// const photos = computed(() => {
//   if (selectedYear.value) {
//     return [
//       `@/assets/imgs/${selectedYear.value}/1.jpg`,
//       `@/assets/imgs/${selectedYear.value}/2.jpg`,
//       `@/assets/imgs/${selectedYear.value}/3.png`,
//       `@/assets/imgs/${selectedYear.value}/4.jpg`,
//       `@/assets/imgs/${selectedYear.value}/5.jpg`,
//       `@/assets/imgs/${selectedYear.value}/6.jpg`,
//       `@/assets/imgs/${selectedYear.value}/7.jpg`,
//       `@/assets/imgs/${selectedYear.value}/8.jpg`
//     ]
//   }
//   return []
// })

const handleYearChange = (year) => {
  selectedYear.value = year
}

// 默认选择最新年份
// selectedYear.value = years.value[years.value.length - 1]
</script>

<style scoped>
.el-carousel__item {
  height: 400px;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.select{
    width: 200px;
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
