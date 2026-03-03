import FloatingHearts from "./FloatingHearts";

interface Page6FinalMessageProps {
  date: string;
}

export default function Page6FinalMessage({ date }: Page6FinalMessageProps) {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "a date we will choose together";
    const d = new Date(`${dateStr}T00:00:00`);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedDate = formatDate(date);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full text-center">
        {/* Top decoration */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.82 0.14 80))",
              }}
            />
            <span
              className="font-body text-sm tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.90 0.10 80)" }}
            >
              Forever & Always
            </span>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to left, transparent, oklch(0.82 0.14 80))",
              }}
            />
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div
            className="absolute -inset-1.5 rounded-full opacity-70 blur-lg animate-pulse-slow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.22 355), oklch(0.82 0.14 80), oklch(0.68 0.22 355))",
            }}
          />
          <div
            className="relative rounded-full overflow-hidden border-4 shadow-[0_0_70px_oklch(0.68_0.22_355_/_0.5)] w-48 h-48 md:w-56 md:h-56"
            style={{ borderColor: "oklch(0.68 0.22 355 / 0.6)" }}
          >
            <img
              src="/assets/8091dbc2-cc7f-4a1e-ba08-fdb5bcc516c3.jpeg"
              alt="Ambrin & Rizhan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Love message card */}
        <div
          className="space-y-4 animate-fade-in-up w-full"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative">
            <div
              className="absolute -inset-0.5 rounded-2xl opacity-35 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.22 355 / 0.5), oklch(0.82 0.14 80 / 0.5))",
              }}
            />
            <div
              className="relative backdrop-blur-sm rounded-2xl border p-6 md:p-8 space-y-5"
              style={{
                borderColor: "oklch(0.68 0.22 355 / 0.25)",
                background: "oklch(0.15 0.08 280 / 0.80)",
              }}
            >
              <div className="text-4xl animate-heartbeat">💍</div>

              <p className="shimmer-text font-heading text-2xl md:text-3xl font-bold leading-tight">
                I love you.
              </p>

              <p className="text-white/85 font-body text-base md:text-lg leading-relaxed">
                I know these 5 years have been a rollercoaster for us, but we
                will make it forever —
              </p>

              <div
                className="py-3 px-5 rounded-xl border"
                style={{
                  borderColor: "oklch(0.82 0.14 80 / 0.35)",
                  background: "oklch(0.82 0.14 80 / 0.08)",
                }}
              >
                <p
                  className="font-heading text-lg md:text-xl font-semibold"
                  style={{ color: "oklch(0.90 0.10 80)" }}
                >
                  and get married on
                </p>
                <p className="shimmer-text font-heading text-xl md:text-2xl font-bold mt-1">
                  {formattedDate} 💍
                </p>
              </div>

              <p
                className="font-body text-sm italic"
                style={{ color: "oklch(0.80 0.18 355 / 0.75)" }}
              >
                — Your Ambrin 💕
              </p>
            </div>
          </div>
        </div>

        {/* Emoji row */}
        <div
          className="animate-fade-in-up flex gap-3 text-2xl"
          style={{ animationDelay: "0.8s" }}
        >
          {["❤️", "💕", "💗", "💖", "💍"].map((emoji, i) => (
            <span
              key={emoji}
              className="animate-bounce-slow"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="animate-fade-in text-center mt-2"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-white/25 text-xs font-body">
            Made with ❤️ for Ambrin & Rizhan • {new Date().getFullYear()}
          </p>
          <p className="text-white/15 text-xs font-body mt-1">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "ambrin-rizhan-anniversary")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/30 transition-colors"
              style={{ color: "oklch(0.82 0.14 80 / 0.35)" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
