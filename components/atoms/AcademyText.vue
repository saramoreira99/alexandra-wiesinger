<script setup>
import Highlight from './Highlight.vue'
</script>

<template>
  <div class="academy-text">
    <p class ="text-intro">
      In der <Highlight>AW Academy</Highlight> biete ich als erfahrene Dozentin eine breite Palette an 
      <Highlight>Schulungen, Seminaren und Workshops</Highlight> an, die speziell auf die Bedürfnisse von Unternehmen und Akademien zugeschnitten sind. Mein Fokus liegt auf den Bereichen <Highlight>Qualitätsmanagement (QM)</Highlight> und <Highlight>HSE</Highlight>, mit Themen wie:
    </p>

    <ul>
      <li>Total Quality Management</li>
      <li>Grundlagen QM</li>
      <li>QM für die oberste Leitung</li>
    </ul>

    <p>
      Ein besonders wichtiger Bereich ist die 
      <Highlight>Ausbildung zum Qualitätsbeauftragten, Qualitätsmanager und internen Qualitätsauditor</Highlight>, in der ich auch als Prüferin tätig bin.
      Zusätzlich biete ich <Highlight>Schulungen zur AZAV-Zertifizierung</Highlight> an, um Bildungsträger optimal auf ihre Zertifizierung vorzubereiten. Unternehmen profitieren von meinen praxisnahen Seminaren, die sie direkt bei mir buchen können, während Akademien durch mein Angebot ihr Portfolio erweitern können.
    </p>

    <p>
      Dank meines Netzwerks kann ich zudem <Highlight>umfassende Weiterbildungen rund um integrierte Managementsysteme</Highlight> anbieten, die folgende Normen abdecken:
    </p>

    <ul>
      <li><Highlight>ISO 9001 – Qualitätsmanagement</Highlight></li>
      <li><Highlight>ISO 14001 – Umweltmanagement</Highlight></li>
      <li><Highlight>ISO 45001 – Arbeitssicherheitsmanagement</Highlight></li>
      <li><Highlight>ISO 50001 – Energiemanagement</Highlight></li>
      <li><Highlight>ISO 27001 – Informationssicherheitsmanagement</Highlight></li>
    </ul>

    <p>Alle Schulungen basieren auf der <Highlight>Harmonized Structure (HS)</Highlight>.</p>
  </div>
</template>


<style scoped>
.academy-text {
  line-height: 1.5;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}


.academy-text ul {
  list-style-type: circle;
  padding-left: 1rem;
}

.academy-text li {
  padding-left: 0.5rem;
}
</style>