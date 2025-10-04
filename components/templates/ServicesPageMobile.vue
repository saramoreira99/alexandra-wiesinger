<script setup>
import { defineProps } from 'vue';
import BottomSheet from "@/components/organisms/BottomSheet.vue";

const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  ctaText: { type: String, default: 'Kontakt' },
});
</script>

<template>
  <main class="services-page-mobile" role="main">
    <section class="img-box" aria-hidden="true">
      <img :src="image" class="services-hero" alt="Service Hero Image" />
      <div class="gradient-overlay"></div>
      <h1 class="services-title">{{ title }}</h1> 
    </section>

    <BottomSheet :cta-text="ctaText">
      <template #text>
        <slot name="description" />
      </template>
    </BottomSheet>
  </main>
</template>

<style scoped>
.services-page-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
}

.img-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  z-index: 0;
  top: -1rem; 
}

.services-hero {
  width: 100%;
  height: 40vh; 
  object-fit: cover;
  object-position: center;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(to bottom,
        rgba(13, 5, 53, 0) 0%,
        rgba(13, 5, 53, 1) 100%);
}

.services-title {
  position: absolute;
  bottom: 0.5rem;
  left: 2rem;
  font-weight: bold;
  text-align: left;
  z-index: 100;
  text-transform: uppercase; 
}
</style>