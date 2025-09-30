<template>
  <div>
    <Header />
    <NuxtPage /> <!-- <- Wichtig -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
</script>