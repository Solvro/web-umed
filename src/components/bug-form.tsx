"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Bug, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MUTATION_KEYS, QUERY_KEYS, REPORT_FORM_URL } from "@/config/constants";
import { useBugReport } from "@/hooks/use-bug-form";
import { feedbackFormSchema } from "@/lib/schemas";
import type { FeedbackFormSchema } from "@/lib/schemas";

export function BugForm() {
  const { isDialogOpen, setIsDialogOpen } = useBugReport();

  const form = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      email: "",
      title: "",
      content: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: [MUTATION_KEYS.REPORT_FORM],
    mutationFn: async (data: FeedbackFormSchema) => {
      const body = {
        [QUERY_KEYS.EMAIL]: data.email,
        [QUERY_KEYS.TITLE]: data.title,
        [QUERY_KEYS.CONTENT]: data.content,
      };
      const response = await fetch(REPORT_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      });

      if (response.status === 0 || response.ok) {
        return true;
      }

      return false;
    },
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="text-primary bg-primary-foreground shadow-primary/80 shadow-2xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Twój feedback</DialogTitle>
          <DialogDescription className="text-primary/60 text-md font-semibold">
            To jest miejsce na twoje wszelkie uwagi i sugestie dotyczące strony.
            Jeśli znalazłeś błąd, to śmiało pisz 😉
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              toast.promise(
                mutateAsync(values).catch((error: unknown) => {
                  throw error;
                }),
                {
                  loading: "Trwa wysyłanie zgłoszenia...",
                  error: (error) => {
                    console.error("Error while sending feedback form:", error);
                    return "Nastąpił błąd podczas wysyłania zgłoszenia";
                  },
                  success: "Zgłoszenie wysłane pomyślnie!",
                },
              );
            })}
          >
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adres email</FormLabel>
                    <FormControl>
                      <Input placeholder="jan.kowalski@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tytuł</FormLabel>
                    <FormControl>
                      <Input placeholder="Coś jest nie tak" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treść</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Opis problemu..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                disabled={isPending}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {isPending ? (
                    <Loader className="h-4 w-4 animate-spin" />
                  ) : (
                    <Bug className="h-4 w-4" />
                  )}
                  {isPending ? "Wysyłanie..." : "Prześlij zgłoszenie"}
                </div>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
