import { z } from "zod";

export const contactFormSchema = z.object({
  first_name: z.string().min(1, {
    message: "Imię jest wymagane",
  }),
  last_name: z.string().min(1, {
    message: "Nazwisko jest wymagane",
  }),
  email: z.string().email({ message: "Niepoprawny adres e-mail" }),
  phone: z.string({ message: "Numer telefonu jest wymagany" }),
  content: z
    .string()
    .min(16, { message: "Treść wiadomości musi mieć co najmniej 16 znaków" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
