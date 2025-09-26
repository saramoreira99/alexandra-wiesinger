<template>
  <div class="services-page">
    <div class="services-box">
      <div class="img-box">
        <img :src="image" class="services-hero" alt="Service Hero Image" />
      </div>
      <div class="description-box">
        <h3 class="services-title">{{ title }}</h3>
        <div class="services-description">
          <slot name="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
})
</script>

<style scoped>
.services-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 120px;
}

.services-box {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  width: clamp(400px, 80%, 900px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(145deg, #ffffff, #f0f0f0);
  padding: 15px;
  margin-top: 20px;
}

.img-box {
  flex: 0 0 30%;
  aspect-ratio: 120 / 197;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.services-hero {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: #0D0535 1px solid;
}

.description-box {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0D0535;
}

.description-box h3 {
  margin: 0 0 0.5rem 0;
  font-size: 20px;
  font-weight: bold;
  color: #0D0535;
}

/* Mobile Anpassungen */
@media (max-width: 767px) {
  .services-box {
    flex-direction: column;
    align-items: center;
  }
  .img-box {
    padding: 10px;
  }
  .description-box {
    padding: 1rem 0.5rem;
  }
}
</style>