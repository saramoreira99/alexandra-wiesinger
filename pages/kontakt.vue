<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const nameError = ref(false);
const emailError = ref(false);
const subjectError = ref(false);
const messageError = ref(false);

function validateFields() {
  nameError.value = name.value.trim() === "";
  emailError.value = email.value.trim() === "";
  subjectError.value = subject.value.trim() === "";
  messageError.value = message.value.trim() === "";
  return !(nameError.value || emailError.value || subjectError.value || messageError.value);
}

async function submitForm() {
  if (!validateFields()) return;

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: { name: name.value, email: email.value, subject: subject.value, message: message.value },
    });

    if (res.success) {
      alert("Nachricht erfolgreich gesendet!");
      router.push("/thank-you"); // Optional: Dankeseite
    } else {
      alert(res.message || "Fehler beim Senden.");
    }
  } catch (err) {
    console.error(err);
    alert("Es gab einen Fehler beim Senden.");
  }
}
</script>

<template>
  <div class="contact">
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Name" />
      <span v-if="nameError">Bitte Name angeben</span>

      <input v-model="email" type="email" placeholder="E-Mail-Adresse" />
      <span v-if="emailError">Bitte E-Mail angeben</span>

      <input v-model="subject" type="text" placeholder="Betreff" />
      <span v-if="subjectError">Bitte Betreff angeben</span>

      <textarea v-model="message" placeholder="Nachricht"></textarea>
      <span v-if="messageError">Bitte Nachricht eingeben</span>

      <button type="submit">Abschicken</button>
    </form>
  </div>
</template>