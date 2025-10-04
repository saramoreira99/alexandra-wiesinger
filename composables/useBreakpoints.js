import { ref, onMounted, onUnmounted } from "vue";

export function useBreakpoints() {
  const width = ref(0); // Startwert, bevor window verfügbar ist

  const breakpoints = {
    xs: 480,
    sm: 767,
    md: 1024,
    lg: 1230,
    xl: 1440,
  };

  const updateWidth = () => {
    if (typeof window !== "undefined") {
      width.value = window.innerWidth;
    }
  };

  const isXs = () => width.value < breakpoints.xs;
  const isSm = () => width.value >= breakpoints.xs && width.value < breakpoints.sm;
  const isMd = () => width.value >= breakpoints.sm && width.value < breakpoints.lg;
  const isLg = () => width.value >= breakpoints.lg && width.value < breakpoints.xl;
  const isXl = () => width.value >= breakpoints.xl;

  const isMobile = () => isXs() || isSm();
  const isTablet = () => isMd();
  const isDesktop = () => isLg() || isXl();

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return {
    width,
    breakpoints,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile,
    isTablet,
    isDesktop,
  };
}