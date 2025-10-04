<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBreakpoints } from "@/composables/useBreakpoints";

const route = useRoute();

const { isSm, isXs } = useBreakpoints();
const isMobile = computed(() => isSm() || isXs());

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const interest = ref(""); 


const nameError = ref(false);
const emailError = ref(false);
const subjectError = ref(false);
const messageError = ref(false);

function validateFields() {
  nameError.value = name.value.trim() === "";
  emailError.value = !/\S+@\S+\.\S+/.test(email.value); 
  subjectError.value = subject.value.trim() === "";
  messageError.value = message.value.trim() === "";
  return !(nameError.value || emailError.value || subjectError.value || messageError.value);
}

onMounted(() => {
  const path = route.path.toLowerCase();
  if (path.includes("audit")) interest.value = "Audit";
  else if (path.includes("consulting")) interest.value = "Consulting";
  else if (path.includes("academy")) interest.value = "Academy";
});

async function submitForm() {
  if (!validateFields()) return;

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        interest: interest.value,
      },
    });

    if (res.success) {
      alert("Nachricht erfolgreich gesendet!");
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
  <div :class="['contact-wrapper', { mobile: isMobile }]">
    <div class="contact-form">
      
      <div class="interest-options">
        <label :class="{ active: interest === 'Audit' }">
          <input type="radio" value="Audit" v-model="interest" />
          Audit
        </label>
        <label :class="{ active: interest === 'Consulting' }">
          <input type="radio" value="Consulting" v-model="interest" />
          Consulting
        </label>
        <label :class="{ active: interest === 'Academy' }">
          <input type="radio" value="Academy" v-model="interest" />
          Academy
        </label>
      </div>

      <input v-model="name" type="text" placeholder="Name" />
      <span v-if="nameError" class="error">Bitte Name angeben</span>

      <input v-model="email" type="email" placeholder="E-Mail-Adresse" />
      <span v-if="emailError" class="error">Bitte E-Mail angeben</span>

      <input v-model="subject" type="text" placeholder="Betreff" />
      <span v-if="subjectError" class="error">Bitte Betreff angeben</span>

      <textarea v-model="message" placeholder="Nachricht"></textarea>
      <span v-if="messageError" class="error">Bitte Nachricht eingeben</span>

      <button type="submit">Abschicken</button>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

.contact-form {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: var(--box-shadow-light);
}

.interest-options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  color: #0d0535;
}

.interest-options label {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid #0d053571;
  transition: all 0.3s ease;
}

.interest-options label.active {
  background-color: #df4f83;
  color: white;
  border-color: white;
}

.interest-options input {
  display: none;
}

input, textarea {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 1px solid #0d053571;
}

textarea {
  min-height: 120px;
}

button {
  width: 100%;
  padding: 1rem;
  background-color: #0d0535;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

button:hover {
  background-color: #df4f83;
}

.error {
  color: red;
  font-size: 0.7rem;
}

.contact-wrapper.mobile {
  padding: 1rem;
}

.contact-wrapper.mobile .contact-form {
  border-radius: 15px;
  padding: 1rem;
}
</style>