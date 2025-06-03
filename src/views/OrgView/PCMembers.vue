<template>
    <div class="program-container animate__animated animate__fadeIn" id="pcmembers">
    <MemberCard class="commom"></MemberCard>
    </div>
</template>
<script lang="ts" setup>
import MemberCard from '@/components/Org/MemberCard.vue'

</script>

<style scoped>
.program-container {
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