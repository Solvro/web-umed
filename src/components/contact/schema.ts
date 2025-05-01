import { z } from "zod";

export const formSchema = z.object({
  name: z.string({ message: "Imię i nazwisko jest wymagane" }).min(4, {
    message: "Imię i nazwisko musi mieć co najmniej 4 znaki",
  }),
  email: z
    .string({ message: "Adres e-mail jest wymagany" })
    .email({ message: "Niepoprawny adres e-mail" }),
  phone: z.string({ message: "Numer telefonu jest wymagany" }),
  content: z
    .string({ message: "Treść wiadomości jest wymagana" })
    .min(16, { message: "Treść wiadomości musi mieć co najmniej 16 znaków" }),
});
