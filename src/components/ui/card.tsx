import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}

/**
 * Card - Rounded container with soft shadows and optional hover lift.
 * Uses rounded-3xl for that organic, flowing aesthetic.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = true, children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-card",
      elevated: "bg-card shadow-[var(--shadow-md)]",
      outlined: "bg-transparent border border-border",
    };

    return (
      <div
        ref={ref}
        className={`
          rounded-3xl p-6
          transition-all duration-500 ease-out
          ${variantStyles[variant]}
          ${hover ? "hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * CardHeader - Section for card title and description
 */
export function CardHeader({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * CardTitle - Card heading with Playfair Display serif font
 */
export function CardTitle({ className = "", children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`font-heading text-xl font-semibold text-foreground ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * CardDescription - Muted supporting text
 */
export function CardDescription({ className = "", children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-muted mt-1 ${className}`} {...props}>
      {children}
    </p>
  );
}

/**
 * CardContent - Main content area
 */
export function CardContent({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

/**
 * CardFooter - Footer area for actions
 */
export function CardFooter({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-4 flex items-center gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
