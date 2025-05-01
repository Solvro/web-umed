"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { HTMLInputTypeAttribute } from "react";
import type { FieldErrors, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { FOOTER_LINKS } from "@/config/links";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { formSchema } from "./schema";
import { submitContactForm } from "./submit";

function onContactFormError(errors: FieldErrors<z.infer<typeof formSchema>>) {
  toast.error("Formularz zawiera błędy", {
    description: Object.entries(errors)
      .map(([field, error]) => <p key={field}>{error.message}</p>)
      .filter(Boolean),
  });
}

export function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-screen-xl px-4 py-10">
        <h2 className="mb-8 text-center text-3xl font-medium">Kontakt</h2>
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl">Dane kontaktowe</h2>
            <div>
              <p>Uniwersytet Medyczny</p>
              <p>ul. Lorem Ipsum 42</p>
              <p>08-324&nbsp;Wrocław</p>
              <a
                href={`mailto:${FOOTER_LINKS.contactMail}`}
                className="underline-offset-4 hover:underline"
              >
                {FOOTER_LINKS.contactMail}
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl">Formularz kontaktowy</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(async (values) => {
                  try {
                    await submitContactForm(values);

                    for (const field of Object.keys(formSchema.shape)) {
                      form.setValue(
                        field as keyof z.infer<typeof formSchema>,
                        "",
                      );
                    }

                    toast.success("Formularz został wysłany");
                  } catch {
                    toast.error("Wystąpił błąd podczas wysyłania formularza");
                  }
                }, onContactFormError)}
                className="max-w-screen-sm space-y-2"
              >
                <TextField
                  form={form}
                  name="name"
                  placeholder="Imię i nazwisko"
                />
                <TextField
                  form={form}
                  type="email"
                  name="email"
                  placeholder="Adres e-mail"
                />
                <TextField
                  form={form}
                  type="tel"
                  name="phone"
                  placeholder="Numer telefonu"
                />
                <TextareaField
                  form={form}
                  name="content"
                  placeholder="Treść wiadomości"
                />

                <Button
                  type="submit"
                  variant="outline"
                  className="hover:text-primary h-12 w-full cursor-pointer bg-transparent font-bold"
                >
                  Wyślij wiadomość
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextField({
  form,
  name,
  type = "text",
  placeholder,
}: {
  name: keyof z.infer<typeof formSchema>;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className="bg-primary-foreground text-foreground h-11 px-4"
              {...field}
            />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
}
function TextareaField({
  form,
  name,
  placeholder,
}: {
  name: keyof z.infer<typeof formSchema>;
  placeholder: string;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="bg-primary-foreground text-foreground px-4"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
