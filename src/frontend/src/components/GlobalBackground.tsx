const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}));

const floaters = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 16 + 10,
  duration: Math.random() * 10 + 7,
  delay: Math.random() * 12,
  opacity: Math.random() * 0.25 + 0.08,
  emoji: ["🌸", "💗", "✨", "🌺", "💕", "⭐", "🌹"][
    Math.floor(Math.random() * 7)
  ],
}));

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient — midnight navy to deep violet */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.06 280) 0%, oklch(0.13 0.09 295) 40%, oklch(0.10 0.07 265) 100%)",
        }}
      />

      {/* Radial pink glow from center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, oklch(0.28 0.12 340 / 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Top corner violet accent */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.40 0.18 290 / 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Bottom left warm rose accent */}
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.40 0.20 355 / 0.20) 0%, transparent 70%)",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: "oklch(0.96 0.02 280)",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Floating petals / emojis */}
      {floaters.map((f) => (
        <div
          key={f.id}
          className="absolute bottom-0 animate-float-up select-none"
          style={{
            left: `${f.x}%`,
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        >
          {f.emoji}
        </div>
      ))}
    </div>
  );
}
