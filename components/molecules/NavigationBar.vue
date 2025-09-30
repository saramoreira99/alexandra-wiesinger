<template>
  <ul class="nav-links-desktop">
    <li><NuxtLink to="/" :aria-current="route.path === '/' ? 'page' : null">START</NuxtLink></li>
    <li><NuxtLink to="/academy" :aria-current="route.path === '/academy' ? 'page' : null">ACADEMY</NuxtLink></li>
    <li><NuxtLink to="/consulting" :aria-current="route.path === '/consulting' ? 'page' : null">CONSULTING</NuxtLink></li>
    <li><NuxtLink to="/audit" :aria-current="route.path === '/audit' ? 'page' : null">AUDIT</NuxtLink></li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.nav-links-desktop {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links-desktop li a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.nav-links-desktop li a[aria-current="page"] {
  border-bottom: 2px solid #df4f83;
}
</style>