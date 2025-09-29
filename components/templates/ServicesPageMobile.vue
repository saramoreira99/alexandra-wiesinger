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
    </section>

    <BottomSheet :cta-text="ctaText">
      <template #text>
        <h3 class="services-title">{{ props.title }}</h3>
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
  position: fixed; 
}

.services-hero {
  width: 100%;
  position: fixed;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 0;
  filter: blur(5px);
}

.services-title {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: bold;
  color: #0D0535;
  text-align: center;
}
</style>