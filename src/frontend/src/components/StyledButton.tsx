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
  ...props
}: StyledButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-heading font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-glow focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-magenta to-pink-glow border-2 border-pink-light/60 text-white hover:from-pink-glow hover:to-magenta hover:scale-105 hover:shadow-[0_0_40px_oklch(0.68_0.22_355_/_0.6)] active:scale-95",
    secondary:
      "bg-transparent border-2 border-pink-glow/50 text-pink-light hover:bg-pink-glow/10 hover:border-pink-glow hover:scale-105 hover:shadow-[0_0_25px_oklch(0.68_0.22_355_/_0.35)] active:scale-95",
    ghost:
      "bg-white/8 border border-white/20 text-white hover:bg-white/15 hover:scale-105 active:scale-95",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm rounded-full",
    md: "px-8 py-3 text-base rounded-full",
    lg: "px-12 py-4 text-lg rounded-full",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
