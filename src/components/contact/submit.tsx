"use server";

import type { z } from "zod";

import { formSchema } from "./schema";

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  await formSchema.parseAsync(values);

  console.warn("Unimplemented contact form submission", values);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (values.first_name !== "Success") {
    throw new Error("Unimplemented");
  }
}
