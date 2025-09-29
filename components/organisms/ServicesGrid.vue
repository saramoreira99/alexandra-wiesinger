<template>
  <section class="services-grid" aria-labelledby="services-title">
    <h2 id="services-title" class="services-overview">Qualität in allen Bereichen</h2>

    <div v-if="!isMobile" class="grid">
      <ServiceCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :image="card.image"
        :description="card.description"
        :link="card.link" 
      />
    </div>

    <el-carousel
      v-else
      ref="carouselRef"
      :interval="5000"
      arrow="never"
      pause-on-hover
      indicator-position="outside"
      class="carousel-container"
      aria-label="Services Übersicht"
    >
      <el-carousel-item
        v-for="card in cards"
        :key="card.title"
        class="mobile-card-container"
        role="group"
        aria-roledescription="slide"
        :aria-label="`Service: ${card.title}`"
      >
        <ServiceCard 
          :title="card.title" 
          :image="card.image" 
          :description="card.description"
          :link="card.link"
        />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'
import ServiceCard from './ServiceCard.vue'

import imgAcademy from "@/assets/images/imgAcademy.jpg"
import imgConsulting from "@/assets/images/imgConsulting.jpg"
import imgAudit from "@/assets/images/imgAudit.jpg"

const cards = [
  { title: "AW ACADEMY", image: imgAcademy, description: "Maßgeschneiderte Weiterbildungen für Unternehmen und Akademien", link: '/academy' },
  { title: "AW CONSULTING", image: imgConsulting, description: "Kompetente Beratung für Ihr Qualitätsmanagement", link: '/consulting' },
  { title: "AW AUDIT", image: imgAudit, description: "Externe Auditierung nach höchsten Standards", link: '/audit' },
]

const { isSm } = useBreakpoints();
const isMobile = isSm();
const carouselRef = ref(null)
</script>

<style scoped>
.services-grid {
  margin-top: 60px;
}

.services-overview {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: clamp(20px, 2vw, 25px);
  margin-bottom: 0;
}

.grid {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 3rem;
  padding: 0 4vw;
  flex-wrap: nowrap; 
  overflow-x: auto; 
  margin: 50px 15px;
  scroll-behavior: smooth; 
}

.grid::-webkit-scrollbar {
  display: none; 
}

@media (max-width: var(--breakpoint-sm)) {
  .carousel-container {
    width: 100%;
    margin: 30px 0;
    padding-bottom: 50px;
    overflow: hidden;
  }

  .mobile-card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    margin: 0 auto !important;
  }
}
</style>