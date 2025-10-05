<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <NuxtPage />
    </main>

    <Footer />

    <LinkedinIcon
      url="https://www.linkedin.com/in/alexandra-wiesinger-2784352b9"
      name="Alexandra Wiesinger"
    />
  </div>
</template>

<script setup>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
</style>