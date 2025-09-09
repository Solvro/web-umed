"use server";

import type { ContactFormSchema } from "@/config/schemas";
import { contactFormSchema } from "@/config/schemas";

export async function submitContactForm(values: ContactFormSchema) {
  await contactFormSchema.parseAsync(values);

  console.warn("Unimplemented contact form submission", values);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (values.firstName !== "Success") {
    throw new Error("Unimplemented");
  }
}
