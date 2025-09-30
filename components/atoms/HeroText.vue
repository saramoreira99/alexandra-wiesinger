<script setup>
import heroText from '@/content/heroText.js'
</script>

<template>
  <div class="hero-text">
    {{ heroText.teaser }}
  </div>
</template>

<style scoped>
.hero-text {
  line-height: 1.5;
  color: white;
  text-align: left;
  max-width: 60ch;
  margin: 0;
}
</style>