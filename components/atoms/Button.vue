<template>
  <NuxtLink
    :to="to"
    :class="['button', sizeClass, variantClass, boxShadowClass, { 'is-mobile': isMobile }]"
    :aria-label="ariaLabel"
    role="button"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'

const props = defineProps({
  to: { type: String, default: '/' },
  label: { type: String, default: 'Button' },
  size: { type: String, default: 'md', validator: value => ['xs', 'md', 'xl'].includes(value) },
  variant: { type: String, default: 'filled', validator: value => ['filled', 'outline'].includes(value) },
  ariaLabel: { type: String, default: '' },
  boxshadow: { type: String, default: 'light', validator: value => ['light', 'dark'].includes(value) }
})

const { isMobile } = useBreakpoints()

const sizeClass = computed(() => `size-${props.size}`)
const variantClass = computed(() => `variant-${props.variant}`)
const ariaLabel = computed(() => props.ariaLabel || props.label)
const boxShadowClass = computed(() => `box-shadow-${props.boxshadow}`)
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.75rem 2rem;
}

.size-xs { height: 30px; min-width: 80px; font-size: var(--button-small-size); }
.size-md { height: 40px; min-width: 120px; font-size: var(--button-medium-size); }
.size-xl { height: 50px; min-width: 200px; font-size: var(--button-large-size); }

.variant-filled {
  background-color: var(--color-primary);
  color: white;
  border: none;
}

.variant-outline {
  background: transparent;
  color: white;
  border: 1px solid white;
}

.box-shadow-light {
  box-shadow: var(--box-shadow-light);
}

.box-shadow-dark {
  box-shadow: var(--box-shadow-dark);
}

.button:hover,
.button:focus {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  outline: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
}

.button.is-mobile {
  padding: 0.5rem 1rem;
}
</style>