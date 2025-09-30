<template>
    <section class="hero">
        <div class="hero-section-container " :class="{ mobile: isMobile }">
            <div class="hero-left-fixed" :class="{ mobile: isMobile }">
                <div class="label">
                    <h1 class="heading" :class="{ mobile: isMobile }"><span v-for="(line, index) in titleLines"
                            :key="index">
                            {{ line }}<br v-if="index < titleLines.length - 1">
                        </span></h1>
                    <div class="text-wrapper" :class="{ mobile: isMobile }">
                        <slot name="heroText" />
                    </div>
                    <div class="button-wrapper" :class="{ mobile: isMobile }">
                        <Button :size="isMobile ? 'md' : 'lg'" variant="filled" class="hero-button" to="/kontakt">
                            BERATUNG ANFRAGEN </Button>
                        <Button :size="isMobile ? 'md' : 'lg'" variant="outline" class="hero-button" to="#services">
                            LEISTUNGEN ENTDECKEN </Button>
                    </div>
                </div>
            </div>

            <div class="hero-image-container" :class="{ mobile: isMobile }">
                <img class="hero-image" :class="{ mobile: isMobile }" :src="heroImage" alt="Hero" />
                <div class="gradient-overlay" :class="{ mobile: isMobile }" />
            </div>
        </div>
    </section>
</template>

<script setup>
import heroImageDefault from '@/assets/images/heroImage.jpg'
import { computed } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'
import Button from '@/components/atoms/Button.vue'

const { isSm, isXs } = useBreakpoints()

const isMobile = computed(() => isSm() || isXs())

const props = defineProps({
    heroImage: { type: String, default: heroImageDefault },
    titleLines: { type: Array, default: () => ["Qualität sichern.", "Standards leben."] },
    subtitle: { type: String, default: "Erfahrung, die Ihre Prozesse einfacher und sicherer macht." }
})
</script>

<style scoped>
.hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin: 5rem 0 3rem 0;
    padding: 0;
}

.hero-section-container {
    display: flex;
    width: 100%;
}

.hero-left-fixed {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 1rem 3rem;
}

.hero-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    position: relative;
}

.heading {
    font-weight: bold;
    margin-top: 20px;
    text-transform: uppercase;
    white-space: nowrap;
    padding-bottom: 1rem;
}

.text-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-bottom: 1.5rem;
}

.button-wrapper {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.hero-image {
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: var(--box-shadow-light);
}

.heading.mobile {
    margin-top: 0;
}

.hero-section-container.mobile {
    flex-direction: column-reverse;
}

.hero-left-fixed.mobile {
    width: 100%;
    padding: 1rem 2rem 0 2rem;
    margin-bottom: 2rem;

}

.hero-image-container.mobile {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
}

.hero-image.mobile {
    border-radius: 0px;
    box-shadow: none;
}

.gradient-overlay.mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(to bottom,
            rgba(13, 5, 53, 0) 0%,
            rgba(13, 5, 53, 1) 100%);
}
</style>