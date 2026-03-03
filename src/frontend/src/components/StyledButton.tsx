import type { ButtonHTMLAttributes, ReactNode } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function StyledButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  style,
  ...props
}: StyledButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-heading font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background:
        "linear-gradient(135deg, oklch(0.60 0.26 15), oklch(0.65 0.22 20))",
      border: "2px solid oklch(0.78 0.18 20 / 0.6)",
      color: "oklch(0.97 0.02 80)",
      WebkitTextFillColor: "oklch(0.97 0.02 80)",
    },
    secondary: {
      background: "transparent",
      border: "2px solid oklch(0.65 0.22 20 / 0.5)",
      color: "oklch(0.78 0.18 20)",
      WebkitTextFillColor: "oklch(0.78 0.18 20)",
    },
    ghost: {
      background: "oklch(0.97 0.02 80 / 0.08)",
      border: "1px solid oklch(0.97 0.02 80 / 0.20)",
      color: "oklch(0.97 0.02 80)",
      WebkitTextFillColor: "oklch(0.97 0.02 80)",
    },
  };

  const variantHoverClasses: Record<string, string> = {
    primary:
      "hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.22_20_/_0.6)] active:scale-95",
    secondary:
      "hover:scale-105 hover:shadow-[0_0_25px_oklch(0.65_0.22_20_/_0.35)] active:scale-95",
    ghost: "hover:scale-105 active:scale-95",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm rounded-full",
    md: "px-8 py-3 text-base rounded-full",
    lg: "px-12 py-4 text-lg rounded-full",
  };

  return (
    <button
      className={`${base} ${variantHoverClasses[variant]} ${sizes[size]} ${className}`}
      style={{ ...variantStyles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
