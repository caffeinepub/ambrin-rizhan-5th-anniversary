import { useRef, useState } from "react";

interface DodgingWordProps {
  word: string;
}

export default function DodgingWord({ word }: DodgingWordProps) {
  const [transform, setTransform] = useState("translate(0px, 0px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = () => {
    const maxX = 200;
    const maxY = 150;
    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * maxY * 2;
    setTransform(`translate(${x}px, ${y}px)`);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={dodge}
      onTouchStart={dodge}
      className="cursor-pointer select-none transition-transform duration-300 ease-out"
      style={{ transform }}
    >
      <span className="inline-block px-4 py-2 rounded-full border border-rose-medium/60 bg-rose-medium/20 text-rose-light font-heading text-sm md:text-base font-semibold hover:border-rose-medium hover:bg-rose-medium/30 backdrop-blur-sm">
        {word}
      </span>
    </div>
  );
}
