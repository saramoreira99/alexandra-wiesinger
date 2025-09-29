<script setup>
import AcademyText from "@/components/atoms/AcademyText.vue";
import imgAcademy from "@/assets/images/imgAcademy.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="AW Academy"
      :image="imgAcademy"
      cta-text="Jetzt zur Academy anmelden"
  >
    <template #description>
      <AcademyText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>