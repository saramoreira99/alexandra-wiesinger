<template>
  <div class="about-grid">
    <div class="about-column" v-for="(column, index) in columns" :key="index">
      <p v-for="(paragraph, pIndex) in column" :key="pIndex" v-html="paragraph"></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  paragraphs: {
    type: Array,
    required: true
  }
});

const columns = computed(() => {
  const mid = Math.ceil(props.paragraphs.length / 2);
  return [
    props.paragraphs.slice(0, mid),
    props.paragraphs.slice(mid)
  ];
});
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.about-column p {
  margin-bottom: 1rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 0; 
  }
  .about-column p {
    margin-bottom: 0.8rem; 
  }
}
</style>