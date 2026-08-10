import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "Imię jest wymagane",
  }),
  lastName: z.string().trim().min(1, {
    message: "Nazwisko jest wymagane",
  }),
  email: z.string().trim().email({ message: "Niepoprawny adres e-mail" }),
  phone: z.string({ message: "Numer telefonu jest wymagany" }).trim(),
  content: z
    .string()
    .trim()
    .min(16, { message: "Treść wiadomości musi mieć co najmniej 16 znaków" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
