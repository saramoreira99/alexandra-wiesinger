<template>
  <section class="hero">
    <div class="hero-section-container" :class="{ mobile: isMobile }">
      <div class="hero-left-fixed">
        <div class="label">
          <h1 class="heading">{{ title }}</h1>
          <h3 class="subheading">{{ subtitle }}</h3>
          <div class="text-wrapper">
            <slot name="heroText" />
          </div>
        </div>
      </div>

      <div class="hero-image-container">
        <img class="hero-image" :src="heroImage" alt="Hero" />
        <div class="gradient-overlay" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBreakpoints } from '@/composables/useBreakpoints'

const { isSm, isXs } = useBreakpoints()
const isMobile = () => isSm() || isXs()

const props = defineProps({
  heroImage: { type: String, default: '' },
  title: { type: String, default: "Ihre Partnerin für Qualität" },
  subtitle: { type: String, default: "Maßgeschneiderte Schulungen, Beratung & Audits für nachhaltige Erfolge" }
})
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 5rem 0 3rem 0;
  padding: 0;
}

.hero-section-container {
  display: flex;
  width: 100%;
}

.hero-left-fixed {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 1rem 3rem;
}

.hero-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  position: relative;
}

.heading {
  line-height: 1.4;
  font-weight: bold;
  margin-top: 20px;
  text-transform: uppercase;
}

.subheading {
  padding-bottom: 15px;
  color: #df4f83;
}

.text-wrapper {
  line-height: 1.4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(13, 5, 53, 0) 0%,
    rgba(13, 5, 53, 1) 100%
  );
}

.hero-section-container.mobile {
  flex-direction: column;
}
</style>