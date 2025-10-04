<template>
  <div class="services-page">
  
    <div class="img-box">
      <h2 class="services-title">{{ title }}</h2>
      <img :src="image" class="services-hero" alt="Service Hero Image" />
    </div>

  
    <div class="description-box">
      <h3 class="description-title">{{ subtitle }}</h3>
      <div class="services-description">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>

<style scoped>
.services-page {
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  margin: 9rem 3rem;
  gap: 3rem; 
}


.services-title {
  margin: 0 0 1.5rem 0;
  text-align: center;
  font-weight: bold;
}


.img-box {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.services-hero {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: var(--card-shadow-light);
}


.description-box {
  flex: 1;
  background-color: white;
  border-radius: 15px;
  box-shadow: var(--card-shadow-light);
  padding: 3rem 2rem;
  color: #0D0535;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
}

.description-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #0D0535;
}

.services-description {
  font-size: 1rem;
  line-height: 1.6;
}
</style>