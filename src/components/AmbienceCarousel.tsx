"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ambienceImages = [
  "/about-desktop-1.png",
  "/fasana-desktop.png",
  "/about-desktop-1.png",
  "/fasana-desktop.png",
  "/about-desktop-1.png",
];

export default function AmbienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ambienceImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ambienceImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Image carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={ambienceImages[currentIndex]}
            alt={`Ambience ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
        {/* Previous button */}
        <button
          onClick={goToPrev}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
          aria-label="Previous image"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
          aria-label="Next image"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
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

      {/* Image counter */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        <p className="text-white text-sm font-medium">
          {currentIndex + 1} / {ambienceImages.length}
        </p>
      </div>

      {/* Feature cards section at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-24 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          {/* Quote section */}
          <div className="text-center mb-8">
            <p
              className="text-2xl md:text-3xl text-white/90 leading-relaxed"
              style={{
                fontFamily: "'Great Vibes', cursive",
                letterSpacing: "0.02em",
              }}
            >
              "A room without books is like a body without a soul"
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
            <div className="rounded-2xl bg-transparent border border-white/20 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
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
                className="text-lg font-semibold text-white mb-2 font-inria"
                style={{
                  letterSpacing: "0.04em",
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Reading Corners
              </h3>
              <p className="text-sm text-white/90">
                Cozy nooks with comfortable seating, perfect for losing yourself
                in a good book
              </p>
            </div>

            <div className="rounded-2xl bg-transparent border border-white/20 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
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
                className="text-lg font-semibold text-white mb-2 "
                style={{
                  letterSpacing: "0.04em",
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Open Tables
              </h3>
              <p className="text-sm text-white/90">
                Spacious communal areas ideal for group discussions and
                collaborative work.
              </p>
            </div>

            <div className="rounded-2xl bg-transparent border border-white/20 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
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
                className="text-lg font-semibold text-white mb-2"
                style={{
                  letterSpacing: "0.04em",
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Natural Light
              </h3>
              <p className="text-sm text-white/90">
                Large windows and warm lighting create an inviting atmosphere
                throughout the day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
