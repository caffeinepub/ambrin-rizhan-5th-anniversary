import { useEffect, useState } from "react";
import FloatingHearts from "./FloatingHearts";

interface Page6FinalMessageProps {
  date: string;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function useCountdown(dateStr: string): Countdown | null {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    if (!dateStr) return;
    const target = new Date(`${dateStr}T00:00:00`);
    if (Number.isNaN(target.getTime())) return;

    const calc = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds, isPast: false });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [dateStr]);

  return countdown;
}

export default function Page6FinalMessage({ date }: Page6FinalMessageProps) {
  const countdown = useCountdown(date);

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
                "linear-gradient(135deg, oklch(0.65 0.22 20), oklch(0.82 0.14 80), oklch(0.65 0.22 20))",
            }}
          />
          <div
            className="relative rounded-full overflow-hidden border-4 shadow-[0_0_70px_oklch(0.65_0.22_20_/_0.5)] w-48 h-48 md:w-56 md:h-56"
            style={{ borderColor: "oklch(0.65 0.22 20 / 0.6)" }}
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
                  "linear-gradient(135deg, oklch(0.65 0.22 20 / 0.5), oklch(0.82 0.14 80 / 0.5))",
              }}
            />
            <div
              className="relative backdrop-blur-sm rounded-2xl border p-6 md:p-8 space-y-5"
              style={{
                borderColor: "oklch(0.65 0.22 20 / 0.25)",
                background: "oklch(0.15 0.07 15 / 0.80)",
              }}
            >
              <div className="text-4xl animate-heartbeat">💍</div>

              <p className="shimmer-text font-heading text-2xl md:text-3xl font-bold leading-tight">
                I love you.
              </p>

              <p
                className="font-body text-base md:text-lg leading-relaxed"
                style={{ color: "oklch(0.97 0.02 80 / 0.88)" }}
              >
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

              {/* Countdown */}
              {countdown && !countdown.isPast && (
                <div className="w-full animate-fade-in">
                  <p
                    className="font-body text-xs tracking-widest uppercase mb-3"
                    style={{ color: "oklch(0.90 0.10 80 / 0.70)" }}
                  >
                    Counting down to our big day
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: countdown.days, label: "Days" },
                      { value: countdown.hours, label: "Hours" },
                      { value: countdown.minutes, label: "Mins" },
                      { value: countdown.seconds, label: "Secs" },
                    ].map(({ value, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1 rounded-xl py-3 px-1"
                        style={{
                          background: "oklch(0.65 0.22 20 / 0.12)",
                          border: "1px solid oklch(0.65 0.22 20 / 0.3)",
                        }}
                      >
                        <span
                          className="font-heading text-2xl md:text-3xl font-bold"
                          style={{ color: "oklch(0.97 0.02 80)" }}
                        >
                          {String(value).padStart(2, "0")}
                        </span>
                        <span
                          className="font-body text-xs"
                          style={{ color: "oklch(0.78 0.18 20 / 0.80)" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {countdown?.isPast && (
                <div
                  className="w-full py-3 px-4 rounded-xl text-center animate-fade-in"
                  style={{
                    background: "oklch(0.65 0.22 20 / 0.12)",
                    border: "1px solid oklch(0.65 0.22 20 / 0.3)",
                  }}
                >
                  <p className="shimmer-text font-heading text-lg font-bold">
                    Today is our Wedding Day! 💍🎉
                  </p>
                </div>
              )}

              <p
                className="font-body text-sm italic"
                style={{ color: "oklch(0.78 0.18 20 / 0.80)" }}
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
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.97 0.02 80 / 0.30)" }}
          >
            Made with ❤️ for Ambrin & Rizhan • {new Date().getFullYear()}
          </p>
          <p
            className="font-body text-xs mt-1"
            style={{ color: "oklch(0.97 0.02 80 / 0.20)" }}
          >
            Built with love using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "ambrin-rizhan-anniversary")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-colors"
              style={{ color: "oklch(0.82 0.14 80 / 0.45)" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
