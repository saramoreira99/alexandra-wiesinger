<script setup>
import { ref } from "vue";

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const responseMessage = ref('');
const loading = ref(false);

async function validateForm(event) {
  event.preventDefault();


  if (!name.value || !email.value || !subject.value || !message.value) {
    responseMessage.value = "Bitte alle Felder ausfüllen";
    return;
  }

  loading.value = true;
  responseMessage.value = "";

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: { name: name.value, email: email.value, subject: subject.value, message: message.value }
    });

    responseMessage.value = res.message || "Nachricht erfolgreich gesendet!";
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";

  } catch (error) {
    console.error(error);
    responseMessage.value = "Fehler beim Senden. Bitte versuche es später erneut.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="contact-page">
    <h1 id="contact-heading">Kontaktformular</h1>

    <form @submit="validateForm" aria-labelledby="contact-heading" class="contact-form">
      <div class="form-group">
        <label for="name">Name *</label>
        <input id="name" type="text" v-model="name" required aria-required="true" placeholder="Ihr Name" />
      </div>

      <div class="form-group">
        <label for="email">E-Mail *</label>
        <input id="email" type="email" v-model="email" required aria-required="true" placeholder="Ihre E-Mail-Adresse" />
      </div>

      <div class="form-group">
        <label for="subject">Betreff *</label>
        <input id="subject" type="text" v-model="subject" required aria-required="true" placeholder="Betreff" />
      </div>

      <div class="form-group">
        <label for="message">Nachricht *</label>
        <textarea id="message" v-model="message" required aria-required="true" placeholder="Ihre Nachricht"></textarea>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Senden..." : "Senden" }}
      </button>

      <p role="status" aria-live="polite" class="response-message">
        {{ responseMessage }}
      </p>
    </form>
  </main>
</template>

<style scoped>
.contact-page {
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
}

textarea {
  min-height: 120px;
}

button {
  background-color: #df4f83;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.response-message {
  color: #df4f83;
  font-size: 0.9rem;
}
</style>