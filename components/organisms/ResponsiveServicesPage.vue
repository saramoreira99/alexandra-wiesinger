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

const { isSm, isXs } = useBreakpoints()
const isMobile = computed(() => isSm() || isXs())


const props = defineProps({
  title: String,
  image: String,
  ctaText: String,
})

</script>