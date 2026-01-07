import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  italic?: boolean;
}

const sizeStyles = {
  xs: "text-lg md:text-xl",
  sm: "text-xl md:text-2xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-5xl",
  "2xl": "text-5xl md:text-6xl",
  "3xl": "text-6xl md:text-7xl",
  "4xl": "text-7xl md:text-8xl",
};

/**
 * Heading - Playfair Display serif headings with optional italic emphasis.
 * Use italic={true} on specific words for the editorial aesthetic.
 */
export function Heading({
  as: Component = "h2",
  size = "lg",
  italic = false,
  className = "",
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={`
        font-heading font-semibold leading-tight text-foreground
        ${sizeStyles[size]}
        ${italic ? "italic" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Text - Body text using Source Sans 3
 */
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "xl";
  muted?: boolean;
  as?: "p" | "span" | "div";
}

export function Text({
  as: Component = "p",
  size = "base",
  muted = false,
  className = "",
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <Component
      className={`
        font-body leading-relaxed
        ${sizeClasses[size]}
        ${muted ? "text-muted" : "text-foreground"}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Italic - Wrapper for italic emphasis within headings
 */
export function Italic({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <em className={`italic ${className}`} {...props}>
      {children}
    </em>
  );
}

/**
 * Label - Small uppercase text for categories/tags
 */
export function Label({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`text-xs font-medium uppercase tracking-widest text-muted ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
