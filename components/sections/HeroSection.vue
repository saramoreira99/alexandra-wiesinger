<template>
  <section class="hero">
    <div class="hero-section-container" :class="{ mobile: isMobile }">

    
      <div class="hero-left-fixed" v-if="!isMobile">
        <div class="label">
          <h1 class="heading">
            <span v-for="(line, index) in titleLines" :key="index">
              {{ line }}<br v-if="index < titleLines.length - 1">
            </span>
          </h1>
          <div class="text-wrapper">
            <slot name="heroText" />
          </div>
          <div class="button-wrapper">
            <Button size="xs" variant="filled" to="/kontakt" aria-label="Beratung anfragen">
              BERATUNG ANFRAGEN
            </Button>
            <Button size="xs" variant="outline" to="#services" aria-label="Leistungen entdecken">
              LEISTUNGEN ENTDECKEN
            </Button>
          </div>
        </div>
      </div>


      <div class="hero-image-container" :class="{ mobile: isMobile }">
        <img class="hero-image" :class="{ mobile: isMobile }" :src="heroImage" alt="Hero" />
        <div class="gradient-overlay" :class="{ mobile: isMobile }"></div>

  
        <div v-if="isMobile" class="mobile-header">
          <h1 class="heading mobile">
            <span v-for="(line, index) in titleLines" :key="index">
              {{ line }}<br v-if="index < titleLines.length - 1">
            </span>
          </h1>
        </div>
      </div>

    </div>


    <div v-if="isMobile" class="label mobile-text">
      <div class="text-wrapper">
        <slot name="heroText" />
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImageDefault from '@/assets/images/heroImage.jpg'
import { computed } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'
import Button from '@/components/atoms/Button.vue'

const { isSm, isXs } = useBreakpoints()
const isMobile = computed(() => isSm() || isXs())

const props = defineProps({
    heroImage: { type: String, default: heroImageDefault },
    titleLines: { type: Array, default: () => ["Qualität sichern.", "Standards leben."] },
    subtitle: { type: String, default: "Erfahrung, die Ihre Prozesse einfacher und sicherer macht." }
})
</script>
<style scoped>
.hero {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
}

.hero-section-container {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin: 8rem 0 4rem 0;
    justify-content: flex-end;
    gap: 2rem;
}

.hero-left-fixed {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
}

.hero-image-container {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
}

.hero-image {
    width: 90%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: var(--box-shadow-light);
    aspect-ratio: 1 / 1;
}

.heading {
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
}

.button-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 1rem 0; 
}

.hero-section-container.mobile {
    flex-direction: column;
    margin: 0;
}

.hero-left-fixed.mobile {
    width: 100%;
    padding: 1rem 2rem 0 2rem;
    margin-bottom: 2rem;
}

.hero-image-container.mobile {
    width: 100%;
    height: auto;
    padding: 0;
    position: relative;
    display: block;
}

.hero-image.mobile {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: auto;
    border-radius: 0;
    box-shadow: none;
}

.gradient-overlay.mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(to bottom,
        rgba(13, 5, 53, 0) 0%,
        rgba(13, 5, 53, 1) 100%);
}

.mobile-header {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    width: calc(100% - 2rem);
    z-index: 3;
    color: white;
    text-align: left;
}

.heading.mobile {
    padding-bottom: 0;
}

.label.mobile-text {
    padding: 0 2rem;
}

</style>