import FloatingWord from "./FloatingWord";
import StyledButton from "./StyledButton";

interface Page1WelcomeProps {
  onNext: () => void;
}

const loveWords = [
  { word: "My Love 💕", x: 2, y: 4, delay: 0, size: "lg" as const },
  { word: "My Baby 🥰", x: 68, y: 3, delay: 0.9, size: "md" as const },
  { word: "My Man 💪", x: 0, y: 28, delay: 1.6, size: "md" as const },
  { word: "My Everything ✨", x: 62, y: 30, delay: 2.3, size: "lg" as const },
  {
    word: "You Are Mine Forever 💍",
    x: 22,
    y: 18,
    delay: 3.1,
    size: "sm" as const,
  },
];

export default function Page1Welcome({ onNext }: Page1WelcomeProps) {
  return (
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center px-4 py-16 pb-32 overflow-hidden">
      {/* Floating love words - z-[-1] so they are always behind main content */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
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

      {/* Main content - always on top within this stacking context */}
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
            className="font-heading text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s", color: "white" }}
          >
            Happy 5th Anniversary
          </h1>
          <h2
            className="font-heading text-3xl md:text-5xl font-bold animate-fade-in-up"
            style={{
              color: "oklch(0.97 0.02 80)",
              textShadow: "0 0 40px oklch(0.65 0.22 20 / 0.7)",
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
                "linear-gradient(135deg, oklch(0.65 0.22 20), oklch(0.82 0.14 80), oklch(0.65 0.22 20))",
            }}
          />
          <div
            className="relative rounded-3xl overflow-hidden border-2 shadow-[0_0_50px_oklch(0.65_0.22_20_/_0.4)]"
            style={{ borderColor: "oklch(0.65 0.22 20 / 0.5)" }}
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
                  "linear-gradient(to top, oklch(0.10 0.05 10 / 0.5), transparent 60%)",
              }}
            />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span
                className="font-heading text-sm font-semibold px-4 py-1 rounded-full backdrop-blur-sm"
                style={{
                  color: "oklch(0.97 0.02 80)",
                  background: "oklch(0.10 0.05 10 / 0.55)",
                }}
              >
                Ambrin & Rizhan 💕
              </span>
            </div>
          </div>
        </div>

        {/* Go button */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
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
