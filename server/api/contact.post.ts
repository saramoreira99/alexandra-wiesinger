import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true wenn Port 465 ist
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.CONTACT_EMAIL,
    subject: body.subject,
    text: `Name: ${body.name}\nE-Mail: ${body.email}\n\n${body.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "success" };
  } catch (error: unknown) {
  const message =
    error instanceof Error ? error.message : 'Unbekannter Fehler';
  return {
    statusCode: 500,
    body: { message }
  }
}
});