<template>
  <header class="header" :class="{ mobile: isMobile }">
    <div class="header-left">
      <div v-if="isMobile" class="hamburger">
        <HamburgerMenu />
      </div>
      <div v-else class="logo-container">
        <a href="/" aria-label="Startseite">
          <img class="logo" :src="Logo" alt="Logo" />
        </a>
      </div>
    </div>

    <div v-if="!isMobile" class="nav-container">
      <NavigationBar />
    </div>

    <div class="header-right">
      <div v-if="isMobile" class="logo-container">
        <a href="/" aria-label="Startseite">
          <img class="logo" :src="Logo" alt="Logo" />
        </a>
      </div>
      <div v-if="!isMobile" class="contact-container">
        <Button size="md" aria-label="Kontakt aufnehmen" to="/kontakt">KONTAKT</Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/assets/images/Logo.png'
import NavigationBar from '@/components/molecules/NavigationBar.vue'
import Button from '@/components/atoms/Button.vue'
import HamburgerMenu from '@/components/molecules/HamburgerMenu.vue'
import { useBreakpoints } from '@/composables/useBreakpoints.js'
import { computed } from 'vue'

const { isSm, isXs } = useBreakpoints()
const isMobile = computed(() => isSm() || isXs())

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(rgba(13, 5, 53, 0.8), rgba(13, 5, 53, 0));
  z-index: 1000;
  backdrop-filter: blur(1px);
}

.header.mobile {
  padding: 0.5rem 1rem;
  background: transparent;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
}

.logo {
  width: 125px;
  height: auto;
}

.nav-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact-container {
  display: flex;
  justify-content: flex-end;
}

.hamburger {
  display: flex;
  align-items: center;
}
</style>