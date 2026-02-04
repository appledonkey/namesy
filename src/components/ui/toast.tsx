"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss?: () => void;
}

export function Toast({ message, type = "success", duration = 3000, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  const Icon = type === "success" ? CheckCircle : XCircle;
  const bgColor = type === "success" ? "bg-success" : "bg-error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 ${bgColor} text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 safe-bottom`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap">{message}</span>
    </motion.div>
  );
}

// Hook for managing toast state
export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    setToast({ message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const ToastComponent = (
    <AnimatePresence>
      {toast && (
        <Toast
          key={toast.message}
          message={toast.message}
          type={toast.type}
          onDismiss={hideToast}
        />
      )}
    </AnimatePresence>
  );

  return { showToast, hideToast, ToastComponent };
}
