<template>
  <header :class="['header', { 'is-mobile': isMobile }]" role="banner">
    <div class="logo-container">
      <a href="/" aria-label="Startseite">
        <img class="logo" :src="Logo" alt="Logo" />
      </a>
    </div>

    <nav class="nav-container" role="navigation" aria-label="Hauptnavigation">
      <NavigationBar />
    </nav>

    <div v-if="!isMobile" class="contact-container">
      <ContactButton size="md" aria-label="Kontakt aufnehmen" />
    </div>
  </header>
</template>

<script setup>
import Logo from '@/assets/images/Logo.png'
import NavigationBar from '@/components/NavigationBar.vue'
import ContactButton from '@/components/ContactButton.vue'
import { useBreakpoints } from '@/composables/useBreakpoints'

const { isMobile } = useBreakpoints()
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 2rem;
  position: fixed;
  top: 0;
  background: linear-gradient(rgba(13, 5, 53, 0.8), rgba(13, 5, 53, 0));
  z-index: 1000;
  backdrop-filter: blur(1px);
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.nav-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.logo {
  width: 125px;
  height: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  border: none; 
}

.header.is-mobile {
  background: transparent;
  backdrop-filter: blur(1px);
}

.header.is-mobile .nav-container {
  order: 2;
  justify-content: flex-start;
  flex: none;
}

.header.is-mobile .logo-container {
  order: 1;
  justify-content: flex-end;
  flex: none;
}

.header.is-mobile .logo {
  width: 90px;
}

.header.is-mobile .contact-container {
  display: none;
}
</style>