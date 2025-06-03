<template>
    <div class="local-container animate__animated animate__fadeIn" id="local">
    <LocalCard class="commom"></LocalCard>
    </div>
</template>
<script lang="ts" setup>
import LocalCard from '@/components/LocalAttra/LocalCard.vue'
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