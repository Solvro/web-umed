import { z } from "zod";

export const feedbackFormSchema = z.object({
  email: z.string().email("Niepoprawny adres email"),
  title: z
    .string()
    .min(3, "Tytuł jest wymagany, wprowadź przynajmniej 3 znaki"),
  content: z
    .string()
    .min(10, "Treść jest wymagana, wprowadź przynajmniej 10 znaków"),
});

export type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;
