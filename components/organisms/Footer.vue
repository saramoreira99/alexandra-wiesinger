<template>
  <footer :class="{ mobile: isSm() }">
    <nav class="rechtliche-hinweise" aria-label="Rechtliche Hinweise Seite">
      <p>Rechtliche Hinweise:</p>
      <ul>
        <li>
          <NuxtLink to="/impressum" aria-label="Impressum Seite">Impressum</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/datenschutzerklaerung" aria-label="Datenschutzerklärung Seite">
            Datenschutzerklärung
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/agb" aria-label="Allgemeine Geschäftsbedingungen Seite">AGB</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { useBreakpoints } from '@/composables/useBreakpoints';

const { isSm } = useBreakpoints();
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 2rem 2rem;
  font-size: 0.9rem;
  text-align: center;
}

.rechtliche-hinweise {
  max-width: 400px;
  width: 100%;
  margin: auto;
}

.rechtliche-hinweise p {
  font-weight: bold;
}

.rechtliche-hinweise ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rechtliche-hinweise li {
  white-space: nowrap;
}

.rechtliche-hinweise li::before {
  content: "• ";
  margin-right: 4px;
}

footer.mobile {
  padding: 4rem 0;
}

footer.mobile .rechtliche-hinweise ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

footer.mobile .rechtliche-hinweise li {
  white-space: normal;
}
</style>