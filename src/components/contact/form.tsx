"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { HTMLInputTypeAttribute } from "react";
import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { ContactFormSchema } from "@/config/schemas";
import { contactFormSchema } from "@/config/schemas";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { submitContactForm } from "./submit";

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          toast.promise(
            submitContactForm(values).then(() => {
              form.reset();
            }),
            {
              success: "Formularz został wysłany",
              error: "Wystąpił błąd podczas wysyłania formularza",
              loading: "Wysyłanie formularza...",
            },
          ),
        )}
        className="max-w-screen-sm space-y-3"
      >
        <div className="grid grid-cols-1 place-items-start gap-2 sm:grid-cols-2">
          <TextField
            form={form}
            name="firstName"
            label="Imię"
            placeholder="Jan"
          />
          <TextField
            form={form}
            name="lastName"
            label="Nazwisko"
            placeholder="Kowalski"
          />
        </div>
        <TextField
          form={form}
          type="email"
          name="email"
          label="Adres e-mail"
          placeholder="jan.kowalski@student.pwr.edu.pl"
        />
        <TextField
          form={form}
          type="tel"
          name="phone"
          label="Numer telefonu"
          placeholder="+48 342 834 917"
        />
        <TextareaField form={form} name="content" label="Treść wiadomości" />

        <Button
          type="submit"
          variant="contrast"
          className="h-12 w-full font-bold"
        >
          Wyślij wiadomość
        </Button>
      </form>
    </Form>
  );
}

function TextField({
  form,
  name,
  type = "text",
  label,
  placeholder,
}: {
  name: keyof ContactFormSchema;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  form: UseFormReturn<ContactFormSchema>;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-1">
          <FormLabel className="!text-primary-foreground">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className="bg-primary-foreground text-foreground h-11 px-4"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-primary-foreground mb-2 font-semibold" />
        </FormItem>
      )}
    />
  );
}
function TextareaField({
  form,
  name,
  label,
}: {
  name: keyof ContactFormSchema;
  label: string;
  form: UseFormReturn<ContactFormSchema>;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-1">
          <FormLabel className="!text-primary-foreground">{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder="Tutaj wpisz swoją wiadomość..."
              className="bg-primary-foreground text-foreground px-4"
            />
          </FormControl>
          <FormMessage className="text-primary-foreground mb-2 font-semibold" />
        </FormItem>
      )}
    />
  );
}
