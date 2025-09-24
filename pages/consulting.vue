<script setup>
import imgConsulting from "@/assets/images/imgConsulting.jpg";
import ResponsiveServicesPage from "@/components/ResponsiveServicesPage.vue";
import ConsultingText from "@/components/ConsultingText.vue";


</script>

<template>
  <ResponsiveServicesPage
      title="Consulting-Dienstleistungen"
      :image="imgConsulting"
      cta-text="Lassen Sie sich jetzt beraten"
  >
    <template #description>
      <ConsultingText />
    </template>


  </ResponsiveServicesPage>
</template>

<style scoped>

</style>