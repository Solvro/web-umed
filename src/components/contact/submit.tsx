"use server";

import type { z } from "zod";

import type { formSchema } from "./schema";

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  console.warn("Unimplemented contact form submission", values);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (values.name !== "Success") {
    throw new Error("Unimplemented");
  }
}
