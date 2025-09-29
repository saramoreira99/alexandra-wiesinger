<script setup>
import { defineProps, defineEmits } from 'vue';
import Button from '@/components/atoms/Button.vue';

const props = defineProps({
  title: { type: String, required: true },
  ctaText: { type: String, default: 'Kontakt' },
});

const emit = defineEmits(['cta-click']);

const onCtaClick = () => emit('cta-click');
</script>

<template>
  <section
    class="bottom-sheet"
    role="region"
    aria-labelledby="sheet-title"
  >
    <header class="sheet-header">
      <div class="handle" aria-hidden="true"></div>
      <h2 id="sheet-title" class="title">{{ title }}</h2>
    </header>

    <main class="sheet-content">
      <slot name="text" />
    </main>

    <footer class="cta-container">
      <ContactButton
        class="cta-button"
        size="xl"
        :label="ctaText"
        aria-label="Kontakt aufnehmen"
        @click="onCtaClick"
      />
    </footer>
  </section>
</template>

<style scoped>
.bottom-sheet {
  background: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-top: 20px;
}

.sheet-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.handle {
  width: 40px;
  height: 4px;
  background: #ccc;
  border-radius: 2px;
  margin-bottom: 10px;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

.sheet-content {
  margin-top: 10px;
  font-size: 1em;
  line-height: 1.5;
  color: #333;
}

.cta-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.cta-button {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  font-size: 1em;
}
</style>