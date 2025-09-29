<script setup>
import AuditText from "@/components/atoms/AuditText.vue";
import imgAudit from "@/assets/images/imgAudit.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="AW Audit"
      :image="imgAudit"
      cta-text="Audit jetzt buchen"
  >
    <template #description>
      <AuditText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>