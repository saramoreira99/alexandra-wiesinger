<template>
  <div class="services-page">

    <div class="img-box">
      <h2 class="services-title">{{ title }}</h2>
      <img :src="image" class="services-hero" alt="Service Hero Image" />
    </div>
    <div class="description-box">
      <h3 class="description-title">Beschreibung</h3>
      <div class="services-description">
        <slot name="description" />
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
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 4rem;
}

.services-title {
  margin: 1rem 0;
  text-align: center;
}

.services-box {
  display: flex;
  background-color: white;
  border-radius: 15px;
  max-width: fit-content;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-shadow: var(--card-shadow-light);
  width: calc(100% - 4rem);
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(145deg, #ffffff, #f0f0f0);
  padding: 1rem 1rem 1rem 2rem;
  margin-top: 3rem;
  min-height: 60vh;
}

.img-box {
  flex: 0 0 30%;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  max-height: 60%;
  background: linear-gradient(145deg, #0D0535, #df4f83);
  border-radius: 15px;
  margin: 3rem;
}

.services-hero {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border: #0D0535 1px solid;
  border-radius: 15px;
}

.description-box {
  display: flex;
  background-color: white;
  border-radius: 15px;
  max-width: fit-content;
  overflow: hidden;
  justify-content:flex-start;
  align-items: flex-start;
  box-shadow: var(--card-shadow-light);
  width: calc(100% - 4rem);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem 1rem 1rem 2rem;
  margin-top: 3rem;
  min-height: 60vh;
  flex: 1;
  flex-direction: column;
  color: #0D0535;
}

.description-title {
  color: #0D0535;
  padding-bottom: 2rem;
}


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