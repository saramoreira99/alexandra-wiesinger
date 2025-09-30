<template>
  <section class="about-section" :class="{ mobile: isMobile }">
    <h2>{{ title }}</h2>
    <AboutText :paragraphs="aboutText.full" />
  </section>
</template>

<script setup>
import aboutText from "@/content/aboutText.js";
import AboutText from "@/components/atoms/AboutText.vue";
import { computed } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'

const { isSm, isXs } = useBreakpoints()

const isMobile = computed(() => isSm() || isXs())

const title = "ÜBER MICH";
</script>
<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: white;
  color: #0D0535;
  text-align: left;
  border-radius: 15px;
  max-height: 30%;
  margin: 0 0 6rem 0;
  box-shadow: var(--card-shadow-light);
}

.about-section h2 {
  margin-bottom: 1rem;
  font-weight: bolder;
  text-align: left;
  color: #df4f83;
}

.text-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
  gap: 2em;
  background-color: white;
}

.collumn-one,
.collumn-two {
  width: 50%;
  max-width: 50%;
}

.text-section.mobile {
  flex-direction: column;
  gap: 0;
}
</style>