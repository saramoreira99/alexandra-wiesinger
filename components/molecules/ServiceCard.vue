<template>
  <div class="card">
    <h2 class="service-title">{{ title }}</h2>

    <div class="image-container">
      <img :src="image" alt="Service Image" />
    </div>

    <p class="description">{{ description }}</p>

    <div class="button-container">
      <CustomButton
        v-if="link"
        :to="link"
        label="MEHR INFOS"
        size="md"
      />
      <button
        v-else
        id="ServiceButton"
        @click="$emit('more-info')"
        class="button size-md"
      >
        MEHR INFOS
      </button>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";

const props = defineProps({
  title: String,
  image: String,
  description: String,
  link: String
});
</script>

<style scoped>
.card {
  flex: 1 1 calc((100% - 2 * 3rem - 2 * 4vw) / 3);
  max-width: calc((100% - 2 * 3rem - 2 * 4vw) / 3);
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(145deg, #ffffff, #f0f0f0);
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 15px 0 10px 0;
}
</style>