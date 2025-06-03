<template>
    <div class="paper-container animate__animated animate__fadeIn" id="papers">
    <PaperCard class="commom"></PaperCard>
    </div>
</template>
<script lang="ts" setup>
import PaperCard from '@/components/Paper/PaperCard.vue'
</script>

<style scoped>
.paper-container {
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