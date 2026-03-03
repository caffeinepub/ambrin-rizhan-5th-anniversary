import StyledButton from "./StyledButton";

interface Page2TogetherProps {
  onNext: () => void;
}

export default function Page2Together({ onNext }: Page2TogetherProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-8 max-w-lg w-full text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in">
          <p className="text-pink-light font-body text-sm tracking-[0.35em] uppercase opacity-80">
            ✨ Since Day One ✨
          </p>
        </div>

        {/* Names */}
        <div
          className="space-y-2 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1
            className="font-heading text-5xl md:text-7xl font-bold"
            style={{
              color: "oklch(0.97 0.02 80)",
              textShadow: "0 0 40px oklch(0.65 0.22 20 / 0.5)",
            }}
          >
            Ambrin
          </h1>
          <div className="flex items-center justify-center gap-4 my-1">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.65 0.22 20))",
              }}
            />
            <span className="text-3xl animate-heartbeat">💗</span>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to left, transparent, oklch(0.65 0.22 20))",
              }}
            />
          </div>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold"
            style={{
              color: "oklch(0.97 0.02 80)",
              textShadow: "0 0 40px oklch(0.65 0.22 20 / 0.5)",
            }}
          >
            Rizhan
          </h1>
        </div>

        {/* Milestone badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 backdrop-blur-sm"
            style={{
              borderColor: "oklch(0.82 0.14 80 / 0.55)",
              background: "oklch(0.82 0.14 80 / 0.08)",
            }}
          >
            <span
              className="font-heading text-lg md:text-xl font-semibold"
              style={{ color: "oklch(0.90 0.10 80)" }}
            >
              Together Since 5 Years 💕
            </span>
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            className="absolute -inset-1.5 rounded-3xl opacity-60 blur-md"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.82 0.14 80), oklch(0.65 0.22 20), oklch(0.82 0.14 80))",
            }}
          />
          <div
            className="relative rounded-3xl overflow-hidden border-2 shadow-[0_0_50px_oklch(0.65_0.22_20_/_0.3)]"
            style={{ borderColor: "oklch(0.82 0.14 80 / 0.45)" }}
          >
            <img
              src="/assets/IMG_3398.jpeg"
              alt="Ambrin & Rizhan together"
              className="w-72 h-80 md:w-80 md:h-96 object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.10 0.05 10 / 0.55), transparent 60%)",
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
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

        {/* Fun fact card */}
        <div
          className="w-full animate-fade-in-up rounded-2xl border p-4 text-center backdrop-blur-sm"
          style={{
            borderColor: "oklch(0.65 0.22 20 / 0.25)",
            background: "oklch(0.65 0.22 20 / 0.06)",
            animationDelay: "0.7s",
          }}
        >
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.97 0.02 80 / 0.75)" }}
          >
            That's{" "}
            <span className="text-pink-light font-semibold">1,826 days</span> of
            loving each other, growing together, and making beautiful memories
            🌟
          </p>
        </div>

        {/* Continue */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <StyledButton
            size="lg"
            onClick={onNext}
            data-ocid="together.continue.button"
          >
            Continue 💕
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
