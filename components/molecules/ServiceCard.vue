<template>
  <div class="card">
    
    <div class="image-container">
      <img :src="image" alt="Service Image" />
      <div class="overlay"></div>
    </div>
    <h3 class="service-title">{{ title }}</h3>

    

    <p class="description">{{ description }}</p>

    <div class="button-container">
      <Button v-if="link" :to="link" label="MEHR INFOS" size="xs" variant="filled" aria-label="Mehr Infos">MEHR
        INFOS</Button>
      <Button v-else id="ServiceButton" @click="$emit('more-info')" label="MEHR INFOS" size="xs" variant="filled"
        aria-label="Mehr Infos">
        MEHR INFOS
      </button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import { useBreakpoints } from '@/composables/useBreakpoints.js'
import { computed } from 'vue'

const { isSm, isXs } = useBreakpoints()
const isMobile = computed(() => isSm() || isXs())

const props = defineProps({
  title: String,
  image: String,
  description: String,
  link: String
});
</script>

<style scoped>
.card {
  flex: 1 1 calc((100% - 2 * 2rem - 2 * 2rem) / 3);
  box-sizing: border-box;
  padding: 0 0 1.5rem 0;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: var(--card-shadow-light);
}

.service-title {
  font-weight: bold;
  color: #0D0535;
  margin: 0 0 0.8rem 0;
  text-align: center;
}

.image-container{
  position: relative;
  display: flex;
  aspect-ratio: 5 / 3;
  align-items: top;
  justify-content: center;
  margin: 0;
  width: 100%;
  overflow: hidden; 
}

.overlay {
  position: absolute;
  bottom: 0;
  aspect-ratio: 5 / 2;
  height: calc(100% + 1px);
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 1));
  pointer-events: none;
  z-index: 5; 
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 5 / 3;
  top: 0;
  object-position: top;
  height: auto;
  object-fit: cover;
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid white;
}

.description{
  color: #0D0535;
  text-align: center;
  display: flex;
  padding: 0 2rem;
  object-fit: cover;
  align-items: flex-start;
  justify-content: center;
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;
}


</style>