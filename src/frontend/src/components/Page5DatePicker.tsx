import { useState } from "react";
import StyledButton from "./StyledButton";

interface Page5DatePickerProps {
  onSubmit: (date: string) => void;
}

export default function Page5DatePicker({ onSubmit }: Page5DatePickerProps) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!date) {
      setError("Please pick a date, my love 🥺");
      return;
    }
    setError("");
    onSubmit(date);
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(`${dateStr}T00:00:00`);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-8 max-w-md w-full text-center">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <div className="text-6xl animate-heartbeat">💍</div>
          <h1 className="shimmer-text font-heading text-3xl md:text-5xl font-bold leading-tight">
            When will you marry me?
          </h1>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.97 0.02 80 / 0.55)" }}
          >
            Pick the date that will change our lives forever 💕
          </p>
        </div>

        {/* Date input card */}
        <div
          className="w-full animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div
              className="absolute -inset-0.5 rounded-2xl opacity-55 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 20), oklch(0.82 0.14 80), oklch(0.65 0.22 20))",
              }}
            />
            <div
              className="relative backdrop-blur-sm rounded-2xl border p-6 space-y-4"
              style={{
                borderColor: "oklch(0.65 0.22 20 / 0.35)",
                background: "oklch(0.15 0.07 15 / 0.85)",
              }}
            >
              <label
                htmlFor="wedding-date"
                className="block font-body text-sm tracking-wider uppercase"
                style={{ color: "oklch(0.90 0.10 80)" }}
              >
                Our Wedding Date 💍
              </label>
              <input
                id="wedding-date"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setError("");
                }}
                data-ocid="date_picker.input"
                className="w-full rounded-xl px-4 py-3 font-body text-base focus:outline-none transition-all duration-200 [color-scheme:dark]"
                style={{
                  background: "oklch(0.20 0.09 15)",
                  border: "1px solid oklch(0.65 0.22 20 / 0.55)",
                  color: "oklch(0.97 0.02 80)",
                  WebkitTextFillColor: "oklch(0.97 0.02 80)",
                  colorScheme: "dark",
                }}
              />
              {date && (
                <p
                  className="font-heading text-base animate-fade-in"
                  style={{ color: "oklch(0.82 0.14 80)" }}
                >
                  ✨ {formatDateDisplay(date)} ✨
                </p>
              )}
              {error && (
                <p className="text-pink-light font-body text-sm animate-fade-in">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Screenshot prompt */}
        <div
          className="animate-fade-in-up px-6 py-4 rounded-2xl border backdrop-blur-sm"
          style={{
            borderColor: "oklch(0.82 0.14 80 / 0.3)",
            background: "oklch(0.82 0.14 80 / 0.07)",
            animationDelay: "0.5s",
          }}
        >
          <p
            className="font-heading text-base font-semibold"
            style={{ color: "oklch(0.90 0.10 80)" }}
          >
            📸 Now take a screenshot and send it to Ambrin!
          </p>
          <p
            className="font-body text-xs mt-1"
            style={{ color: "oklch(0.97 0.02 80 / 0.55)" }}
          >
            She's waiting to see your answer 💕
          </p>
        </div>

        {/* Submit */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <StyledButton
            size="lg"
            onClick={handleSubmit}
            className="animate-pulse-glow"
            data-ocid="date_picker.submit.button"
          >
            Seal the Promise 💍
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
