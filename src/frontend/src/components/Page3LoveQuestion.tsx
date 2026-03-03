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
            className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ textShadow: "0 2px 40px oklch(0.72 0.25 355 / 0.6)" }}
          >
            Do you love me forever?
          </h1>
          <p className="text-pink-glow/70 font-body text-sm">
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

        {/* NO / Dodging button area */}
        <div
          className="relative h-32 w-full flex items-center justify-center animate-fade-in-up"
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
            // Dodging word — one at a time
            <button
              type="button"
              className="transition-transform duration-300 ease-out cursor-pointer select-none inline-block px-6 py-3 rounded-full border-2 border-pink-glow/60 bg-pink-glow/10 text-pink-light font-heading text-base md:text-lg font-semibold backdrop-blur-sm hover:border-pink-glow hover:bg-pink-glow/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-glow"
              style={{ transform: dodgeTransform }}
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
            className="text-white/40 text-xs font-body animate-fade-in -mt-4"
            style={{ animationDelay: "0.1s" }}
          >
            (Try clicking it... if you dare 😏)
          </p>
        )}
      </div>
    </div>
  );
}
