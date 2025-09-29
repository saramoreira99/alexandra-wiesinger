<template>
  <section class="legal-notes">
    <div class="background">
      <h2 class="page-title">{{ title }}</h2>
      <div class="line"></div>
      <div class="legal-information" v-html="information"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.legal-notes {
  display: flex;
  justify-content: center;
  width: 100%;
}

.background {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  color: var(--color-bg);
  box-sizing: border-box;
}

.page-title {
  padding: 2em;
  font-weight: bold;
  text-align: left;
  font-size: var(--h2-size);
}

.line {
  background-color: var(--color-primary);
  width: 100%;
  height: 1em;
}

.legal-information {
  padding: 3em;
  font-size: var(--body-size);
  line-height: 1.6;
}

/* Breakpoints */
@media (max-width: var(--breakpoint-sm)) {
  .page-title {
    font-size: var(--h3-size);
    padding: 1.5em;
    text-align: center;
  }

  .legal-information {
    padding: 2em 1.5em;
    font-size: var(--body-size);
  }
}
</style>