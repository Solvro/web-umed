"use client";

import { createContext, useContext, useState } from "react";

import { BugForm } from "@/components/bug-form";

const BugReportContext = createContext<{
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  openDialog: () => void;
  closeDialog: () => void;
} | null>(null);

export function useBugReport() {
  const context = useContext(BugReportContext);
  if (context == null) {
    throw new Error("useBugReport must be used within a BugReportProvider");
  }
  return context;
}

export function BugReportProvider({ children }: { children: React.ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <BugReportContext.Provider
      value={{
        isDialogOpen,
        setIsDialogOpen,
        openDialog: () => {
          setIsDialogOpen(true);
        },
        closeDialog: () => {
          setIsDialogOpen(false);
        },
      }}
    >
      {children}
      <BugForm />
    </BugReportContext.Provider>
  );
}
