"use client";

import { useState } from "react";

const branchCards = [
  {
    id: 1,
    title: "Bahria Town",
    address: "Readings Building\n65-A, Main Gulberg\nLahore, Pakistan",
    phone: "+92 42 123 4567",
    hours: "Mon - Thu: 9:00 AM - 10:00 PM\nFri - Sun: 10:00 AM - 11:00 PM",
  },
  {
    id: 2,
    title: "DHA Branch",
    address: "Plot 123, Street 5\nPhase 2, DHA\nLahore, Pakistan",
    phone: "+92 42 987 6543",
    hours: "Mon - Thu: 9:00 AM - 10:00 PM\nFri - Sun: 10:00 AM - 11:00 PM",
  },
];

export default function VisitUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % branchCards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? branchCards.length - 1 : prev - 1));
  };

  const currentBranch = branchCards[currentIndex];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center py-8 md:py-12 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/fasana-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full max-w-2xl z-10 flex flex-col items-center justify-center">
        {/* Left Side - Title and Card */}
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-left">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center"
              style={{
                fontFamily: "'Great Vibes', cursive",
                letterSpacing: "0.02em",
              }}
            >
              Waiting to serve you
            </h1>
          </div>

          {/* Card Container */}
          <div
            className="relative w-full rounded-[30px] md:rounded-[40px] bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl border border-white/20"
            style={{
              minHeight: "360px",
              boxShadow:
                "0 8px 32px rgba(31, 38, 135, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Card Content */}
            <div className="flex flex-col h-full justify-between">
              {/* Top - Title */}
              <div className="text-center mb-4 md:mb-6">
                <p className="text-white/50 text-xs md:text-sm tracking-widest">
                  BRANCH
                </p>
                <h2
                  className="text-3xl md:text-4xl text-white mt-3 md:mt-4 mb-4 md:mb-6"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    letterSpacing: "0.02em",
                  }}
                >
                  {currentBranch.title}
                </h2>
              </div>

              {/* Middle - Content */}
              <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6">
                {/* Address */}
                <div className="text-center">
                  <p className="text-white/60 text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">
                    ADDRESS
                  </p>
                  <p
                    className="text-white/90 text-xs md:text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    {currentBranch.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <p className="text-white/60 text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">
                    PHONE
                  </p>
                  <p
                    className="text-white/90 text-xs md:text-sm"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    {currentBranch.phone}
                  </p>
                </div>

                {/* Hours */}
                <div className="text-center">
                  <p className="text-white/60 text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">
                    HOURS
                  </p>
                  <p
                    className="text-white/90 text-xs md:text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    {currentBranch.hours}
                  </p>
                </div>
              </div>

              {/* Bottom - Navigation and Button */}
              <div className="mt-8 md:mt-12">
                {/* Get Direction Button */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <button
                    className="px-4 md:px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/30 flex items-center gap-2 backdrop-blur text-xs md:text-base"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Get Direction
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mb-6 md:mb-8">
                  {branchCards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-6 bg-white"
                          : "w-2 bg-white/30"
                      }`}
                      aria-label={`Go to card ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={goToPrev}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Previous card"
                  >
                    <svg
                      className="w-4 md:w-5 h-4 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <span className="text-white/60 text-xs md:text-sm">
                    {currentIndex + 1} / {branchCards.length}
                  </span>

                  <button
                    onClick={goToNext}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Next card"
                  >
                    <svg
                      className="w-4 md:w-5 h-4 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
