import StyledButton from "./StyledButton";

interface Page4GalleryProps {
  onNext: () => void;
}

const photos = [
  {
    src: "/assets/c3f26b76-aecb-4515-baf0-e49cdc8c1e1a.jpeg",
    alt: "Ambrin & Rizhan together",
    caption: "Our Love 💕",
  },
  {
    src: "/assets/IMG_3398.jpeg",
    alt: "Ambrin & Rizhan",
    caption: "Us 🥰",
  },
  {
    src: "/assets/8091dbc2-cc7f-4a1e-ba08-fdb5bcc516c3.jpeg",
    alt: "Beautiful memories",
    caption: "Memories 🌟",
  },
  {
    src: "/assets/29c26291-48f1-486a-8845-5f7d73818568.jpeg",
    alt: "Together always",
    caption: "Always Together 💍",
  },
  {
    src: "/assets/0d355efa-88f6-4d24-bc54-a43fbbc07400.jpeg",
    alt: "5 years of love",
    caption: "5 Years Strong 🌹",
  },
];

export default function Page4Gallery({ onNext }: Page4GalleryProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-16">
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center space-y-2 animate-fade-in">
          <p className="text-pink-light font-body text-sm tracking-[0.35em] uppercase opacity-80">
            ✨ Our Story ✨
          </p>
          <h1 className="shimmer-text font-heading text-3xl md:text-5xl font-bold">
            5 Years of Beautiful Moments
          </h1>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.97 0.02 80 / 0.55)" }}
          >
            Every picture tells our story 💕
          </p>
        </div>

        {/* Gallery */}
        <div
          className="w-full grid grid-cols-2 gap-3 md:gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Large first photo */}
          <div className="col-span-2 relative group" data-ocid="gallery.item.1">
            <div
              className="absolute -inset-0.5 rounded-2xl opacity-50 blur-sm group-hover:opacity-90 transition-opacity duration-400"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 20), oklch(0.82 0.14 80), oklch(0.65 0.22 20))",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden border shadow-[0_0_35px_oklch(0.65_0.22_20_/_0.2)]"
              style={{ borderColor: "oklch(0.65 0.22 20 / 0.35)" }}
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-64 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.10 0.05 10 / 0.65), transparent 55%)",
                }}
              />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-center">
                <span
                  className="font-heading text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    color: "oklch(0.97 0.02 80)",
                    background: "oklch(0.10 0.05 10 / 0.55)",
                  }}
                >
                  {photos[0].caption}
                </span>
              </div>
            </div>
          </div>

          {/* Remaining photos */}
          {photos.slice(1).map((photo, i) => (
            <div
              key={photo.src}
              className="relative group"
              data-ocid={`gallery.item.${i + 2}`}
            >
              <div
                className="absolute -inset-0.5 rounded-xl opacity-40 blur-sm group-hover:opacity-80 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.14 80), oklch(0.65 0.22 20))",
                }}
              />
              <div
                className="relative rounded-xl overflow-hidden border shadow-[0_0_20px_oklch(0.65_0.22_20_/_0.12)]"
                style={{ borderColor: "oklch(0.82 0.14 80 / 0.25)" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-44 md:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.10 0.05 10 / 0.65), transparent 55%)",
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center">
                  <span
                    className="font-heading text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm"
                    style={{
                      color: "oklch(0.97 0.02 80)",
                      background: "oklch(0.10 0.05 10 / 0.55)",
                    }}
                  >
                    {photo.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <StyledButton
            size="lg"
            onClick={onNext}
            data-ocid="gallery.continue.button"
          >
            Continue 💕
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
