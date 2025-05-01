import { z } from "zod";

export const formSchema = z.object({
  first_name: z.string({ message: "Imię jest wymagane" }).min(1, {
    message: "Imię jest wymagane",
  }),
  last_name: z.string({ message: "Nazwisko jest wymagane" }).min(1, {
    message: "Nazwisko jest wymagane",
  }),
  email: z
    .string({ message: "Adres e-mail jest wymagany" })
    .email({ message: "Niepoprawny adres e-mail" }),
  phone: z.string({ message: "Numer telefonu jest wymagany" }),
  content: z
    .string({ message: "Treść wiadomości jest wymagana" })
    .min(16, { message: "Treść wiadomości musi mieć co najmniej 16 znaków" }),
});
