<template>
  <span class="highlight">
    <slot />
  </span>
</template>

<script setup>
</script>

<style scoped>
.highlight {
  color: var(--color-primary); /* z. B. Pink */
  font-weight: bold;
}
</style>