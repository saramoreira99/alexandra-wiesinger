<script setup>
import ServicesGrid from '@/components/organisms/ServicesGrid.vue';
import HeroText from "@/components/atoms/HeroText.vue";
import Button from "@/components/atoms/Button.vue";
import AboutSection from '@/components/sections/AboutSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import { computed } from 'vue';


const { isSm, isXs } = useBreakpoints()

const isMobile = computed(() => isSm() || isXs())

</script>

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
    <div v-if="isSm()" class="button-container">
      <Button :size="'md'" class="fixed-button">Test</Button>
    </div>
  </main>
</template>

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