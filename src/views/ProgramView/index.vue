<template>
    <div class="program-container animate__animated animate__fadeIn" id="program">
    <ProgramCard class="commom"></ProgramCard>
    <!-- <TBDCard class="commom"></TBDCard> -->

    </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
import ProgramCard from '@/components/Program/ProgramCard.vue'
// import TBDCard from '@/components/TBDView/TBDCard.vue'

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