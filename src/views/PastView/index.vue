<template>
    <div class="local-container animate__animated animate__fadeIn" id="local">
    <LocalPhotos class="commom"></LocalPhotos>
    </div>
</template>
<script lang="ts" setup>
import LocalPhotos from '@/components/LocalAttra/LocalPhotos.vue'
</script>

<style scoped>
.local-container {
  width: 80%;
  margin: auto;
  padding: 10px 0px;
  animation-duration: 3s;
  animation-delay: 0.7s;
}
.commom {
  margin: 20px 0px;
}
</style>  