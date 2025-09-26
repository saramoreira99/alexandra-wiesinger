<template>
  <component
    :is="isMobile ? ServicesPageMobile : ServicesPage"
    :title="props.title"
    :image="props.image"
    :ctaText="props.ctaText"
  >
    <template #description>
      <slot name="description" />
    </template>
  </component>
</template>

<script setup>
import ServicesPageMobile from '@/components/ServicesPageMobile.vue'
import ServicesPage from '@/components/ServicesPage.vue'
import { useBreakpoints } from '@/composables/useBreakpoints'

const props = defineProps({
  title: String,
  image: String,
  ctaText: String,
})

const { isSm, isXs } = useBreakpoints()
const isMobile = () => isSm() || isXs()
</script>