"use client";

import { createContext, useContext, useState, useCallback } from "react";

import { Toast } from "@/components/toast/toast";

type ToastType = "success" | "error";

interface Toast {
  id: number;
  title: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (title: string, message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

let toastId = 0;

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const showToast = useCallback(
    (title: string, message: string, type: ToastType = "success") => {
      const id = toastId++;
      setToasts((prev) => [...prev, { id, title, message, type }]);
      setTimeout(() => removeToast(id), 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed w-full flex flex-col gap-2 items-center justify-center top-8 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
