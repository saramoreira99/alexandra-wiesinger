export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return { status: "error", message: "Alle Felder müssen ausgefüllt werden." };
    }
   
    console.log("Neue Nachricht erhalten:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    return {
      status: "success",
      message: "Deine Nachricht wurde erfolgreich gesendet!"
    };

  } catch (err) {
    console.error(err);
    return {
      status: "error",
      message: "Serverfehler. Bitte versuche es später erneut."
    };
  }
});