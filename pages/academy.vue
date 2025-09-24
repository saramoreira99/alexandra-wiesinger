<script setup>

import AcademyText from "@/components/AcademyText.vue";
import imgAcademy from "@/assets/images/imgAcademy.jpg"
import ResponsiveServicesPage from "@/components/ResponsiveServicesPage.vue";


</script>

<template>
  <ResponsiveServicesPage
      title="Audit-Dienstleistungen"
      :image="imgAcademy"
      cta-text="buche bruder"
  >
    <template #description>
      <AcademyText />
    </template>


  </ResponsiveServicesPage>
</template>

<style scoped>

</style>