export default function FloatingHearts() {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 24 + 12,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 8,
    emoji: ["❤️", "💕", "💗", "💖", "💍", "🌹", "✨", "💫"][
      Math.floor(Math.random() * 8)
    ],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up select-none"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            opacity: 0.6,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
