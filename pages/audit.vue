<script setup>
import ResponsiveServicesPage from "@/components/ResponsiveServicesPage.vue";
import imgAudit from "@/assets/images/imgAudit.jpg";
import AuditText from "@/components/AuditText.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="Audit-Dienstleistungen"
      :image="imgAudit"
      cta-text="buche bruder"
  >
    <template #description>
      <AuditText />
    </template>


  </ResponsiveServicesPage>
</template>

<style scoped>
</style>