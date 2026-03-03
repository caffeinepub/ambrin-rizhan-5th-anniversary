interface FloatingWordProps {
  word: string;
  delay: number;
  x: number;
  y: number;
  size?: "sm" | "md" | "lg";
}

export default function FloatingWord({
  word,
  delay,
  x,
  y,
  size = "md",
}: FloatingWordProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base md:text-lg",
    lg: "text-xl md:text-2xl",
  };

  return (
    <div
      className={`absolute font-heading font-semibold text-gold-light animate-float-word select-none pointer-events-none ${sizeClasses[size]}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + delay * 0.3}s`,
        textShadow: "0 0 20px oklch(0.68 0.22 355)",
        filter: "drop-shadow(0 0 8px oklch(0.68 0.22 355 / 0.6))",
        color: "oklch(0.80 0.18 355)",
      }}
    >
      {word}
    </div>
  );
}
