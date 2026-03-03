import FloatingWord from "./FloatingWord";
import StyledButton from "./StyledButton";

interface Page1WelcomeProps {
  onNext: () => void;
}

const loveWords = [
  { word: "My Love 💕", x: 4, y: 12, delay: 0, size: "lg" as const },
  { word: "My Baby 🥰", x: 70, y: 8, delay: 0.9, size: "md" as const },
  { word: "My Man 💪", x: 6, y: 70, delay: 1.6, size: "md" as const },
  { word: "My Everything ✨", x: 58, y: 76, delay: 2.3, size: "lg" as const },
  {
    word: "You Are Mine Forever 💍",
    x: 22,
    y: 88,
    delay: 3.1,
    size: "sm" as const,
  },
];

export default function Page1Welcome({ onNext }: Page1WelcomeProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Floating love words */}
      <div className="absolute inset-0 pointer-events-none">
        {loveWords.map((w) => (
          <FloatingWord
            key={w.word}
            word={w.word}
            x={w.x}
            y={w.y}
            delay={w.delay}
            size={w.size}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in">
          <p className="text-pink-light font-body text-sm md:text-base tracking-[0.35em] uppercase opacity-80">
            ✨ 5 Years of Us ✨
          </p>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1
            className="shimmer-text font-heading text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Happy 5th Anniversary
          </h1>
          <h2
            className="font-heading text-3xl md:text-5xl font-bold text-white animate-fade-in-up"
            style={{
              textShadow: "0 0 40px oklch(0.68 0.22 355 / 0.7)",
              animationDelay: "0.4s",
            }}
          >
            My Love 💕
          </h2>
        </div>

        {/* Couple Photo */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            className="absolute -inset-1.5 rounded-3xl opacity-70 blur-md animate-pulse-slow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.22 355), oklch(0.82 0.14 80), oklch(0.68 0.22 355))",
            }}
          />
          <div
            className="relative rounded-3xl overflow-hidden border-2 shadow-[0_0_50px_oklch(0.68_0.22_355_/_0.4)]"
            style={{ borderColor: "oklch(0.68 0.22 355 / 0.5)" }}
          >
            <img
              src="/assets/c3f26b76-aecb-4515-baf0-e49cdc8c1e1a.jpeg"
              alt="Ambrin & Rizhan"
              className="w-72 h-80 md:w-80 md:h-96 object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.10 0.06 280 / 0.5), transparent 60%)",
              }}
            />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span
                className="text-white font-heading text-sm font-semibold px-4 py-1 rounded-full backdrop-blur-sm"
                style={{ background: "oklch(0.10 0.06 280 / 0.55)" }}
              >
                Ambrin & Rizhan 💕
              </span>
            </div>
          </div>
        </div>

        {/* Love word pills */}
        <div
          className="flex flex-wrap justify-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            "My Love",
            "My Baby",
            "My Man",
            "My Everything",
            "You Are Mine Forever",
          ].map((word, i) => (
            <span
              key={word}
              className="px-3 py-1 rounded-full text-xs md:text-sm font-body backdrop-blur-sm"
              style={{
                border: "1px solid oklch(0.68 0.22 355 / 0.4)",
                color: "oklch(0.80 0.18 355)",
                background: "oklch(0.68 0.22 355 / 0.08)",
                animationDelay: `${0.9 + i * 0.1}s`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Go button */}
        <div className="animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
          <StyledButton
            size="lg"
            onClick={onNext}
            className="animate-pulse-glow"
            data-ocid="welcome.go.button"
          >
            Go 💕
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
