<script setup>
import AuditText from "@/components/atoms/AuditText.vue";
import imgAudit from "@/assets/images/imgAudit.jpg";
import ResponsiveServicesPage from "@/components/organisms/ResponsiveServicesPage.vue";
</script>

<template>
  <ResponsiveServicesPage
      title="AUDIT"
      subtitle="Praxisnahe Auditierung & Vorbereitung auf Ihre Zertifizierung"
      :image="imgAudit"
      cta-text="Zertifizierungsstrategie entwickeln"
  >
    <template #description>
      <AuditText />
    </template>
  </ResponsiveServicesPage>
</template>

<style scoped>
</style>