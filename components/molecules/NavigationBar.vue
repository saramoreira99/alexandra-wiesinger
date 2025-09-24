<template>
  <nav class="navbar" role="navigation" aria-label="Hauptnavigation">
    <HamburgerMenu v-if="isMobile" />
    <ul v-else class="nav-links-desktop">
      <li>
        <NuxtLink :to="'/'" :aria-current="route.path === '/' ? 'page' : null">START</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="'/academy'" :aria-current="route.path === '/academy' ? 'page' : null">ACADEMY</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="'/consulting'" :aria-current="route.path === '/consulting' ? 'page' : null">CONSULTING</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="'/audit'" :aria-current="route.path === '/audit' ? 'page' : null">AUDIT</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import HamburgerMenu from "@/components/molecules/HamburgerMenu.vue";
import { useBreakpoints } from "@/composables/useBreakpoints.js";

const route = useRoute();
const { isMobile } = useBreakpoints();
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  max-width: 100%;
  overflow-x: hidden;
}

.nav-links-desktop {
  display: flex;
  gap: 24px;
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
}

.nav-links-desktop li {
  text-align: center;
  flex-shrink: 1;
  white-space: nowrap;
}

.nav-links-desktop a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links-desktop a:hover,
.nav-links-desktop a:focus {
  color: #df4f83;
  outline: none;
}

.nav-links-desktop a[aria-current="page"] {
  opacity: 0.6;
  border-bottom: 2px solid #df4f83;
}
</style>