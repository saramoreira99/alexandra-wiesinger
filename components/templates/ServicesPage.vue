<template>
  <div class="services-page">
    <div class="services-content">
      <div class="description-box">
        
        <!-- Bild-Box -->
        <div class="img-box">
          <img :src="image" class="services-hero" alt="Service Hero Image" />
          <div class="image-overlay"></div>
        </div>

        <!-- Inhalt -->
        <div class="description-content">
          <h3 class="description-title">{{ subtitle }}</h3>
          <div class="services-description">
            <slot name="description" />
          </div>
          <div class="button-wrapper">
            <Button size="md" variant="filled" to="#kontakt" aria-label="Beratungstermin vereinbaren">
              KOSTENLOSER BERATUNGSTERMIN
            </Button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import Button
 from '../atoms/Button.vue';
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>

<style scoped>
.services-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.services-content {
  flex: 1; 
  display: flex;
  justify-content: center;
  padding: 8rem 3rem;
 
}

.description-box {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  color: #0d0535;
  box-shadow: var(--card-shadow-light);
  overflow: hidden; 
  
}

.img-box {
  flex: 0 0 30%; 
  position: relative;
}

.services-hero {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  pointer-events: none; 
}

.description-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.description-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  max-width: 34rem;
}

.services-description {
  flex: 1;
}

.button-wrapper {
  margin-top: 2rem;
}
</style>