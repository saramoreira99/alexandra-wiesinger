<template>
  <footer class="footer">
    <div class="footer-overlay"></div>
    <div class="footer-text">
      © {{ new Date().getFullYear() }} Alexandra Wiesinger
    </div>

    <nav
      aria-label="Rechtliche Hinweise"
      class="footer-nav"
    >
      <NuxtLink
        to="/impressum"
        aria-label="Impressum Seite"
        :style="linkStyle"
      >
        Impressum
      </NuxtLink>
      <NuxtLink
        to="/datenschutzerklaerung"
        aria-label="Datenschutzerklärung Seite"
        :style="linkStyle"
      >
        Datenschutzerklärung
      </NuxtLink>
      <NuxtLink
        to="/agb"
        aria-label="Allgemeine Geschäftsbedingungen Seite"
        :style="linkStyle"
      >
        AGB
      </NuxtLink>
    </nav>
  </footer>
</template>

<script setup>
import bgImg from '@/assets/images/AW_Logo-gradient.jpg'

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  fontWeight: '500',
  transition: 'color 0.2s ease',
};
</script>

<style scoped>
.footer {
  position: relative;
  text-align: center;
  padding: 1rem 0.5rem;
  overflow: hidden;
  background-image: url('@/assets/images/AW_Logo-gradient.jpg');
  background-size: cover;
  background-position: center;
  color: #0D0535;
  box-shadow: var(--box-shadow-light);
  margin: 3rem 3rem 0 3rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  
}

.footer-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
        rgba(13, 5, 53, 0.4) 0%,
        rgba(0, 0, 0, 0.6) 100%); 
  z-index: 1;
  height: 101%;
}

.footer-text {
  position: relative;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  color: white;
}

.footer-nav {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>