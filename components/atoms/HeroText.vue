<script setup>
import aboutText from '@/content/heroText.js'
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
  text-align: center;
  max-width: 60ch;
  margin: 0 auto;
}
</style>