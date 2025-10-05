<template>
  <div class="hamburger-menu">
  
    <button
      class="hamburger"
      @click="toggleMenu"
      :aria-expanded="menuOpen.toString()"
      aria-label="Menü öffnen/schließen"
      ref="hamburgerBtn"
    >
      <img
        class="hamburger-icon"
        v-if="menuOpen"
        :src="hamburgerIconOpen"
        alt="Hamburger Icon Blau"
      />
      <img
        class="hamburger-icon"
        v-else
        :src="hamburgerIconClosed"
        alt="Hamburger Icon Pink"
      />
    </button>

   
    <div
      :class="['overlay', { open: menuOpen }]"
      role="menu"
      :aria-hidden="(!menuOpen).toString()"
    >
      <ul class="nav-links" ref="overlayMenu">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink
            :to="link.path"
            role="menuitem"
            :aria-current="route.path === link.path ? 'page' : null"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoints } from '@/composables/useBreakpoints'
import hamburgerIconOpen from '@images/hamburger-icon-blue.png'
import hamburgerIconClosed from '@images/hamburger-icon-rosa.png'


const menuOpen = ref(false)
const overlayMenu = ref(null)
const hamburgerBtn = ref(null)


const breakpoints = useBreakpoints();
const isMobile = computed(() => breakpoints.isSm() || breakpoints.isXs());


const route = useRoute()




const navLinks = [
  { path: '/', label: 'START' },
  { path: '/academy', label: 'ACADEMY' },
  { path: '/consulting', label: 'CONSULTING' },
  { path: '/audit', label: 'AUDIT' },
  { path: '/kontakt', label: 'KONTAKT' }
]

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

watch(menuOpen, (open) => {
  if (open) {
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.width = '100%'
    const firstLink = overlayMenu.value?.querySelector('a')
    firstLink?.focus()
  } else {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    setTimeout(() => hamburgerBtn.value?.focus(), 50)
  }
})


const handleKeydown = (e) => {
  if (e.key === 'Escape') closeMenu()
  if (e.key === 'Tab' && menuOpen.value && overlayMenu.value) {
    const focusableEls = overlayMenu.value.querySelectorAll('a')
    const firstEl = focusableEls[0]
    const lastEl = focusableEls[focusableEls.length - 1]
    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault()
      lastEl.focus()
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault()
      firstEl.focus()
    }
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
:root {
  --menu-text: white;
  --menu-hover: #0d0535;
}

.hamburger {
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  z-index: 2000;
  padding: 0;
  position: relative;
}

.hamburger-icon {
  width: auto;
  height: 26px;
  object-fit: contain;
  border: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(223, 79, 131, 0.95);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.nav-links li {
  font-size: 1.5rem;
}

.nav-links a {
  color: var(--menu-text);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus {
  color: var(--menu-hover);
  outline: none;
}

.nav-links a[aria-current="page"] {
  opacity: 0.6;
  border-bottom: 2px solid var(--menu-text);
}
</style>