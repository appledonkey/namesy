import { forwardRef, InputHTMLAttributes } from "react";

type InputVariant = "underlined" | "pill";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  label?: string;
  error?: string;
}

/**
 * Input - Text input with underlined or pill variants.
 * Features sage green focus states and graceful transitions.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "pill", label, error, id, ...props }, ref) => {
    const inputId = id || props.name;

    const variantStyles = {
      underlined: `
        bg-transparent border-0 border-b border-border
        rounded-none px-0 py-3
        focus:border-primary
      `,
      pill: `
        bg-card-alt border border-transparent
        rounded-full px-5 py-3
        focus:border-primary focus:bg-card
      `,
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-muted mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full text-foreground placeholder:text-muted/60
            transition-all duration-300 ease-out
            focus:outline-none
            disabled:cursor-not-allowed disabled:opacity-50
            ${variantStyles[variant]}
            ${error ? "border-accent" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-accent">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
