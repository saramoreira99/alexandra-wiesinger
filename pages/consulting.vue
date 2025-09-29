<script setup>
import ConsultingText from "@/components/atoms/ConsultingText.vue";
import imgConsulting from "@/assets/images/imgConsulting.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="AW Consulting"
      :image="imgConsulting"
      cta-text="Jetzt Beratung anfragen"
  >
    <template #description>
      <ConsultingText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>