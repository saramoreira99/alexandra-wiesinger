<template>
  <component
    :is="isMobile ? ServicesPageMobile : ServicesPage"
    v-bind="props"
  >
    <template #description>
      <slot name="description" />
    </template>
  </component>
</template>

<script setup>
import ServicesPageMobile from '@/components/templates/ServicesPageMobile.vue'
import ServicesPage from '@/components/templates/ServicesPage.vue'
import { useBreakpoints } from '@/composables/useBreakpoints'
import { computed } from 'vue'

const breakpoints = useBreakpoints();
const isMobile = computed(() => breakpoints.isSm() || breakpoints.isXs());


const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  ctaText: String,
  to: String,
})

</script>