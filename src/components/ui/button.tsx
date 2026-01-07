import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-[var(--shadow-sm)]",
  secondary:
    "bg-card border border-border text-foreground hover:border-primary hover:bg-secondary/30 active:bg-secondary",
  ghost:
    "bg-transparent text-muted hover:text-foreground hover:bg-secondary/50 active:bg-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/**
 * Button - Pill-shaped buttons with organic feel and graceful hover animations.
 * Uses uppercase text with wide tracking for a refined, editorial aesthetic.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          rounded-full font-medium uppercase tracking-widest
          transition-all duration-300 ease-out
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          disabled:pointer-events-none disabled:opacity-50
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
