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
import { onBeforeUnmount, onMounted, ref } from "vue";
import AboutSection from '@/components/AboutSection.vue';

const isMobile = ref(window.innerWidth <= 800);

function handleResize() {
  isMobile.value = window.innerWidth <= 800;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

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
