"use client";

import { useState } from "react";

const ambienceImages = [
  "/about-desktop-1.png",
  "/fasana-desktop.png",
  "/about-desktop-1.png",
  "/fasana-desktop.png",
  "/about-desktop-1.png",
];

export default function AmbienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ambienceImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ambienceImages.length - 1 : prev - 1,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Image carousel container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slider wrapper with touch support */}
        <div
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ambienceImages.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full relative flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Ambience ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - Desktop only */}
        <div className="hidden md:flex absolute inset-0 items-center justify-between px-6 md:px-8 pointer-events-none">
          <button
            onClick={goToPrev}
            className="pointer-events-auto w-12 md:w-14 h-12 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="pointer-events-auto w-12 md:w-14 h-12 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Bullet indicators - Top center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2.5">
          {ambienceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50 w-2.5"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Feature cards section at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-16 md:pb-24 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            {/* Quote section */}
            <div className="text-center mb-6 md:mb-8">
              <p
                className="text-lg md:text-2xl lg:text-3xl text-white/90 leading-relaxed"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  letterSpacing: "0.02em",
                }}
              >
                "A room without books is like a body without a soul"
              </p>
            </div>

            <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pointer-events-auto">
              <div className="rounded-xl md:rounded-2xl bg-transparent border border-white/20 p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-3 md:mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 md:h-5 w-4 md:w-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 6h14v12H5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M9 6v12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3
                  className="text-base md:text-lg font-semibold text-white mb-2 font-inria"
                  style={{
                    letterSpacing: "0.04em",
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  Reading Corners
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  Cozy nooks with comfortable seating, perfect for losing
                  yourself in a good book
                </p>
              </div>

              <div className="rounded-xl md:rounded-2xl bg-transparent border border-white/20 p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-3 md:mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 md:h-5 w-4 md:w-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 9a4 4 0 1 1 8 0"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 19a7 7 0 0 1 14 0"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3
                  className="text-base md:text-lg font-semibold text-white mb-2"
                  style={{
                    letterSpacing: "0.04em",
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  Open Tables
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  Spacious communal areas ideal for group discussions and
                  collaborative work.
                </p>
              </div>

              <div className="rounded-xl md:rounded-2xl bg-transparent border border-white/20 p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-3 md:mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 md:h-5 w-4 md:w-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3l2 4 4 .5-3 3 1 4.5-4-2.5-4 2.5 1-4.5-3-3 4-.5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3
                  className="text-base md:text-lg font-semibold text-white mb-2"
                  style={{
                    letterSpacing: "0.04em",
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  Natural Light
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  Large windows and warm lighting create an inviting atmosphere
                  throughout the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
