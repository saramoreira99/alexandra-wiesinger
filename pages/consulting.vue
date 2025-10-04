<script setup>
import ConsultingText from "@/components/atoms/ConsultingText.vue";
import imgConsulting from "@/assets/images/imgConsulting.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="CONSULTING"
      subtitle="Individuelle Beratung für Ihre Unternehmensziele"
      :image="imgConsulting"
      cta-text="Ihr Erfolgskonzept entwickeln"
  >
    <template #description>
      <ConsultingText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>