<template>
  <section class="services-carousel">
    <h2 class="services-overview">Qualität in allen Bereichen</h2>

    
    <div class="desktop-grid">
      <ServiceCard
        v-for="(card, index) in cards"
        :key="'grid-' + index"
        :title="card.title"
        :image="card.image"
        :description="card.description"
        :link="card.link"
      />
    </div>


    <div class="mobile-carousel">
      <div class="carousel" ref="carouselRef" @scroll="onScroll">
        <ServiceCard
          v-for="(card, index) in loopCards"
          :key="index + '-' + card.title"
          :title="card.title"
          :image="card.image"
          :description="card.description"
          :link="card.link"
        />
      </div>

      <div class="carousel-pagination">
        <span
          v-for="(card, index) in cards"
          :key="index"
          class="dot"
          :class="{ active: activeIndex === index }"
          @click="scrollToIndex(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ServiceCard from "@/components/molecules/ServiceCard.vue";
import imgAcademy from "@/assets/images/imgAcademy.jpg";
import imgConsulting from "@/assets/images/imgConsulting.jpg";
import imgAudit from "@/assets/images/imgAudit.jpg";

const cards = [
  { title: "AW ACADEMY", image: imgAcademy, description: "Maßgeschneiderte Weiterbildungen für Unternehmen und Akademien", link: "/academy" },
  { title: "AW CONSULTING", image: imgConsulting, description: "Kompetente Beratung für Ihr Qualitätsmanagement", link: "/consulting" },
  { title: "AW AUDIT", image: imgAudit, description: "Externe Auditierung nach höchsten Standards", link: "/audit" }
];

const loopCards = [cards[cards.length - 1], ...cards, cards[0]];

const carouselRef = ref(null);
const activeIndex = ref(0);

const scrollToIndex = (index) => {
  const carousel = carouselRef.value;
  if (carousel) {
    const cardWidth = carousel.children[0]?.offsetWidth || 0;
    carousel.scrollTo({
      left: cardWidth * (index + 1),
      behavior: "smooth"
    });
    activeIndex.value = index;
  }
};

const onScroll = () => {
  const carousel = carouselRef.value;
  if (!carousel) return;

  const cardWidth = carousel.children[0]?.offsetWidth || 1;
  let index = Math.round((carousel.scrollLeft - cardWidth) / cardWidth);

  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;

  activeIndex.value = index;
};

onMounted(() => {
  const carousel = carouselRef.value;
  if (carousel) {
    const cardWidth = carousel.children[0]?.offsetWidth || 0;
    carousel.scrollLeft = cardWidth;
  }
});
</script>

<style scoped>
.services-carousel {
  margin-top: 2rem;
}

.services-overview {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin: 3rem 0 2rem 0;
}


.desktop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
}

.mobile-carousel {
  display: none;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  padding: 0;
  scroll-padding-left: 2rem;
  scroll-padding-right: 2rem;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel > * {
  scroll-snap-align: start;
  flex: 0 0 80%;
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: var(--color-primary);
}


@media (max-width: 768px) {
  .desktop-grid {
    display: none;
  }
  .mobile-carousel {
    display: block;
  }
}
</style>