<script setup>

import LegalNotes from "@/components/LegalNotes.vue";

const AGBText = `
  <h4><strong>1. Geltungsbereich:</strong></h4>
  <p>Diese AGB gelten für alle von
    <span class="highlight">Alexandra Wiesinger</span> angebotenen Dienstleistungen,
    einschließlich offener Schulungen, Inhouse-Schulungen, Consulting und Audits.
    Sie gelten sowohl für Verbraucher als auch für Unternehmer, sofern nicht ausdrücklich anders vereinbart.
  </p>

  <p>
    <strong>2. Vertragsabschluss:</strong> Der Vertrag kommt durch schriftliche Bestellung
    oder Anmeldung per E-Mail durch den Kunden zustande. Nach Eingang erhält der Kunde
    eine schriftliche Bestätigung per E-Mail oder Post.
  </p>

  <p>
    <strong>3. Schulungen (Offen und Inhouse):</strong><br/>
    <em>Offene Schulungen:</em> Diese Schulungen sind auf Anfrage verfügbar und zu festgelegten Terminen durchführbar.
    Die Teilnehmerzahl ist begrenzt. Anmeldungen werden in der Reihenfolge ihres Eingangs berücksichtigt.<br/>
    <em>Inhouse-Schulungen:</em> Inhalt, Termin und Ort werden individuell vereinbart.
  </p>

  <p>
    <strong>4. Widerrufsrecht:</strong> Für Verbraucher gilt ein Widerrufsrecht von 14 Tagen nach Vertragsabschluss.
    Der Widerruf muss schriftlich per E-Mail oder Post erklärt werden.
    Das Widerrufsrecht erlischt vorzeitig, wenn die Dienstleistung vor Ablauf der Frist beginnt.
  </p>

  <p>
    <strong>5. Stornierungs- und Kündigungsbedingungen:</strong><br/>
    <em>Offene Schulungen:</em> Kostenfreie Stornierung bis 4 Wochen vor Beginn. Danach anteilige bzw. volle Gebühren.<br/>
    <em>Inhouse-Schulungen und Consulting:</em> Kostenfreie Stornierung bis 4 Wochen vor Termin. Danach 50%, bei <7 Tagen 100%.<br/>
    <em>Ersatzteilnehmer:</em> Können jederzeit kostenfrei benannt werden, sofern geeignet.
  </p>

  <p>
    <strong>6. Preise, Leistungen und Zahlungsbedingungen:</strong>
    Die Preise sind im Angebot oder der Auftragsbestätigung festgelegt.
    Zahlungen sind nach Rechnungsstellung fällig. Bei Zahlungsverzug fallen
    Verzugszinsen (5% über Basiszins) und Mahngebühren (€5) an.
  </p>

  <p>
    <strong>7. Absage durch Alexandra Wiesinger:</strong>
    Schulungen können aus organisatorischen Gründen abgesagt werden.
    Bereits geleistete Zahlungen werden vollständig erstattet, weitergehende Ansprüche sind ausgeschlossen.
  </p>

  <p>
    <strong>8. Haftung:</strong>
    Alexandra Wiesinger haftet für Vorsatz und grobe Fahrlässigkeit.
    Für einfache Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten oder Personenschäden.
    Eine Haftung für den Verlust persönlicher Gegenstände wird ausgeschlossen.
  </p>

  <p>
    <strong>9. Datenschutz:</strong>
    Personenbezogene Daten werden ausschließlich zur Vertragserfüllung und Information über ähnliche Leistungen verwendet.
    Der Nutzung zu Werbezwecken kann jederzeit widersprochen werden.
  </p>

  <p>
    <strong>10. Schlussbestimmungen:</strong>
    Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
    Gerichtsstand ist der Sitz von Alexandra Wiesinger, sofern kein anderer allgemeiner Gerichtsstand im Inland besteht.
  </p>
`;
</script>

<template>
  <LegalNotes
    title="Allgemeine Geschäftsbedingungen"
    :information="AGBText"
    />
</template>

<style scoped>

</style>