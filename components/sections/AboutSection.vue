<template>
  <section class="about-section">
    <h2>{{ title }}</h2>
    <AboutText :paragraphs="aboutText.full" />
  </section>
</template>

<script setup>
import AboutText from "./AboutText.vue";
import aboutText from "@/content/about-text.js";

const title = "ÜBER MICH";
</script>
<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 1rem 3rem;
  background-color: white;
  color: #0D0535;
  text-align: left;
  border-radius: 15px;
  max-height: 30%;
}

.about-section h2 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  font-weight: bolder;
  text-align: left;
  color: #df4f83;
}

.text-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
  gap: 2em;
  background-color: white;
}

.collumn-one,
.collumn-two {
  width: 50%;
  max-width: 50%;
}
</style>