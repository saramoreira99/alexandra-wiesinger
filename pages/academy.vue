<script setup>
import AcademyText from "@/components/atoms/AcademyText.vue";
import imgAcademy from "@/assets/images/imgAcademy.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="ACADEMY"
      subtitle="Praxisnahe Schulungen & Workshops für Ihr Team"
      :image="imgAcademy"
      cta-text="Kompetenzen nachhaltig stärken"
  >
    <template #description>
      <AcademyText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>