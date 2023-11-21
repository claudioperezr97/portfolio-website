"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error["message"]);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong while trying to send email";
  }
  return message;
};

export const sendEmails = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "claudioprocha9@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
