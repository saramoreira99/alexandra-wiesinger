<script setup>
import { defineProps, defineEmits } from 'vue';
import Button from '@/components/atoms/Button.vue';

const props = defineProps({
  subtitle: { type: String, required: false, default: '' },
  ctaText: { type: String, default: 'Kontakt' },
  to: { type: String, default: '/kontakt' },
});

const emit = defineEmits(['cta-click']);

const hideButton = ref(true); 
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    
    hideButton.value = false;
  } else {
    
    hideButton.value = true;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  lastScrollY = window.scrollY; 
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const onCtaClick = () => emit("cta-click");
</script>

<template>
  <section class="bottom-sheet" role="region" aria-labelledby="sheet-title">
    <header class="sheet-header">
      <p id="sheet-title" class="subtitle">{{ subtitle }}</p>
    </header>

    <main class="sheet-content">
      <slot name="text" />
    </main>


  </section>

  <footer :class="['cta-container', { hidden: hideButton }]">
    <Button class="cta-button" size="xl" :to="to" :label="ctaText" aria-label="Kontakt aufnehmen" @click="onCtaClick" />
  </footer>
</template>

<style scoped>
.bottom-sheet {
  background: white;
  border-radius: 15px;
  padding: 2rem 2rem 6rem 2rem;
  min-height: 70vh;
  box-shadow: var(--box-shadow-light);
  z-index: 1;
}

.sheet-header {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.title {
  font-weight: bolder;
  text-align: center;
  z-index: 2; 
}

.sheet-content {
  margin-top: 10px;
  line-height: 1.5;
}

.subtitle {
  font-weight: bold;
  color: #0d0535;
}

.cta-container {
  position: fixed;
  bottom: 3rem; 
  align-items: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 1000;
}

.cta-container.hidden {
  transform: translateY(100%);
  opacity: 0;
}

.cta-button {
  width: 100%;
}
</style>