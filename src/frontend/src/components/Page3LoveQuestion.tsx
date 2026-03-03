import { useState } from "react";
import StyledButton from "./StyledButton";

interface Page3LoveQuestionProps {
  onYes: () => void;
}

const dodgeSequence = [
  "Are you sure? 🥺",
  "Really sure? 😏",
  "Think again! 🤔",
  "Come on... 😤",
  "Nope! 🙅",
  "Try harder! 😂",
  "Liar! 😜",
  "Still no? 😅",
  "Okay fine... YES! 💕",
];

export default function Page3LoveQuestion({ onYes }: Page3LoveQuestionProps) {
  const [noStep, setNoStep] = useState(0); // 0 = not clicked, 1+ = showing dodge words
  const [dodgeTransform, setDodgeTransform] = useState("translate(0px, 0px)");

  const handleNoClick = () => {
    const next = noStep + 1;
    if (next >= dodgeSequence.length) {
      // Force yes after last step
      onYes();
    } else {
      setNoStep(next);
      // Dodge to a random position when clicked
      const x = (Math.random() - 0.5) * 220;
      const y = (Math.random() - 0.5) * 160;
      setDodgeTransform(`translate(${x}px, ${y}px)`);
    }
  };

  const dodge = () => {
    if (noStep > 0) {
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 200;
      setDodgeTransform(`translate(${x}px, ${y}px)`);
    }
  };

  const currentDodgeWord = noStep > 0 ? dodgeSequence[noStep - 1] : null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-10 max-w-xl w-full text-center">
        {/* Question */}
        <div className="space-y-4 animate-fade-in">
          <div className="text-6xl animate-bounce-slow">💕</div>
          <h1
            className="font-heading text-3xl md:text-5xl font-bold leading-tight"
            style={{
              color: "oklch(0.97 0.02 80)",
              textShadow: "0 2px 40px oklch(0.65 0.22 20 / 0.6)",
            }}
          >
            Do you love me forever?
          </h1>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.65 0.22 20 / 0.80)" }}
          >
            There is only one right answer here 😉
          </p>
        </div>

        {/* YES button - always accessible */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <StyledButton
            size="lg"
            onClick={onYes}
            className="animate-pulse-glow"
            data-ocid="love_question.yes.button"
          >
            Yes, Forever! 💕
          </StyledButton>
        </div>

        {/* NO / Dodging button area — overflow-visible so button can escape the container */}
        <div
          className="relative h-24 w-full flex items-center justify-center animate-fade-in-up overflow-visible"
          style={{ animationDelay: "0.5s" }}
        >
          {noStep === 0 ? (
            // Initial NO button
            <StyledButton
              size="md"
              variant="secondary"
              onClick={handleNoClick}
              data-ocid="love_question.no.button"
            >
              No
            </StyledButton>
          ) : (
            // Dodging button — one phrase at a time, runs away on hover
            <button
              type="button"
              className="transition-transform duration-300 ease-out cursor-pointer select-none inline-block px-6 py-3 rounded-full border-2 backdrop-blur-sm focus:outline-none"
              style={{
                transform: dodgeTransform,
                borderColor: "oklch(0.65 0.22 20 / 0.60)",
                background: "oklch(0.65 0.22 20 / 0.10)",
                color: "oklch(0.78 0.18 20)",
              }}
              onMouseEnter={dodge}
              onTouchStart={dodge}
              onClick={handleNoClick}
              data-ocid="love_question.dodge.button"
            >
              {currentDodgeWord}
            </button>
          )}
        </div>

        {noStep > 0 && (
          <p
            className="font-body text-xs animate-fade-in -mt-4"
            style={{
              color: "oklch(0.97 0.02 80 / 0.40)",
              animationDelay: "0.1s",
            }}
          >
            (Try clicking it... if you dare 😏)
          </p>
        )}
      </div>
    </div>
  );
}
