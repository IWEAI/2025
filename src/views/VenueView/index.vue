<template>
    <div class="venue-container animate__animated animate__fadeIn" id="venue">
    <VenueCard class="commom"></VenueCard>
    </div>
</template>
<script lang="ts" setup>
import VenueCard from '@/components/Venue/VenueCard.vue'
</script>

<style scoped>
.venue-container {
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