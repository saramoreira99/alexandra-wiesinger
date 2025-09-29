<template>
  <main>
    <div class="hero-container">
      <HeroSection>
        <template #heroText>
          <HeroText />
        </template>
      </HeroSection>
      <AboutSection />
      <ServicesGrid />
    </div>
    <div v-if="isMobile" class="button-container">
      <Button :size="'md'" class="fixed-button">Test</Button>
    </div>
  </main>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import ServicesGrid from '@/components/ServicesGrid.vue';
import HeroText from "@/components/HeroText.vue";
import Button from "@/components/Button.vue";
import AboutSection from '@/components/AboutSection.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const { isSm } = useBreakpoints();
const isMobile = isSm();
</script>

<style scoped>
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.fixed-button {
  display: flex;
  position: fixed;
  top: 90%;
  justify-content: center;
}
.fixed-button button {
  padding-left: 3em;
}
</style>