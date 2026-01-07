/**
 * Simple notification utility for user feedback
 * Uses native browser APIs where available, falls back gracefully
 */

type NotifyType = "success" | "error" | "info";

interface NotifyOptions {
  duration?: number;
}

/**
 * Show a brief notification to the user
 * Currently uses a simple timeout-based approach
 * Can be extended to use a toast library later
 */
export function notify(
  message: string,
  type: NotifyType = "info",
  options: NotifyOptions = {}
): void {
  const { duration = 2000 } = options;

  // In development, also log to console
  if (process.env.NODE_ENV === "development") {
    const logMethod = type === "error" ? console.error : console.log;
    logMethod(`[${type.toUpperCase()}]`, message);
  }

  // Create and show a simple toast notification
  if (typeof document !== "undefined") {
    showToast(message, type, duration);
  }
}

function showToast(message: string, type: NotifyType, duration: number): void {
  // Check if toast container exists, create if not
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className =
      "fixed bottom-20 sm:bottom-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none";
    document.body.appendChild(container);
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `
    px-4 py-2 rounded-full text-sm font-medium shadow-lg
    transform transition-all duration-300 ease-out
    translate-y-2 opacity-0
    ${type === "success" ? "bg-green-600 text-white" : ""}
    ${type === "error" ? "bg-red-600 text-white" : ""}
    ${type === "info" ? "bg-foreground text-background" : ""}
  `.trim();
  toast.textContent = message;

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  // Remove after duration
  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => {
      toast.remove();
      // Clean up container if empty
      if (container && container.children.length === 0) {
        container.remove();
      }
    }, 300);
  }, duration);
}

/**
 * Shorthand helpers
 */
export const toast = {
  success: (message: string, options?: NotifyOptions) =>
    notify(message, "success", options),
  error: (message: string, options?: NotifyOptions) =>
    notify(message, "error", options),
  info: (message: string, options?: NotifyOptions) =>
    notify(message, "info", options),
};
