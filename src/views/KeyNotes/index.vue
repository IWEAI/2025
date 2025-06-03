<template>
    <div class="keynotes-container animate__animated animate__fadeIn" id="keynotes">
    <!-- <ProfileCard class="commom"></ProfileCard> -->
    <TBDCard class="commom"></TBDCard>
    </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
// import ProfileCard from '@/components/KeyNotes/ProfileCard.vue'
import TBDCard from '@/components/TBDView/TBDCard.vue'
</script>

<style scoped>
.keynotes-container {
  width: 80%;
  margin: auto;
  padding: 10px 0px;

  animation-duration: 2s;
  animation-delay: 0.2s;
}
.commom {
  margin: 20px 0px;
}
</style>