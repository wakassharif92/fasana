"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Splash from "./../components/Splash";
import { useSection } from "@/context/SectionContext";
import MenuSection from "@/components/MenuSection";
import AmbienceCarousel from "@/components/AmbienceCarousel";
import VisitUsSection from "@/components/VisitUsSection";

// Menu data by category
const menuData = {
  All: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Turkish Pizza Deluxe",
      description: "Classic Turkish pizza with special toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
    {
      name: "Chicken Mandi",
      description: "Traditional Arabian rice dish with tender chicken.",
      price: "1,200",
      tags: ["Most Ordered"],
      category: "Mandi",
    },
  ],
  Popular: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
  ],
  Shawarma: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Chicken Shawarma Wrap",
      description: "Fresh chicken shawarma wrapped in saj bread.",
      price: "550",
      tags: ["Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Beef Shawarma Plate",
      description: "Tender beef shawarma with sides.",
      price: "1,200",
      tags: ["Single Serving"],
      category: "Shawarma",
    },
  ],
  "Turkish Fatayer": [
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Fatayer Beef",
      description: "Traditional Turkish pastry with spiced beef.",
      price: "950",
      tags: ["Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Fatayer Spinach & Cheese",
      description: "Vegetarian option with fresh spinach.",
      price: "800",
      tags: ["Single Serving"],
      category: "Turkish Fatayer",
    },
  ],
  "Falafel Sandwich": [
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Falafel Deluxe",
      description: "Premium falafel with extra toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Falafel Sandwich",
    },
  ],
  Mandi: [
    {
      name: "Chicken Mandi",
      description: "Traditional Arabian rice dish with tender chicken.",
      price: "1,200",
      tags: ["Most Ordered"],
      category: "Mandi",
    },
    {
      name: "Lamb Mandi",
      description: "Aromatic rice with succulent lamb.",
      price: "1,500",
      tags: ["Single Serving"],
      category: "Mandi",
    },
  ],
  "Turkish Pizza": [
    {
      name: "Turkish Pizza Deluxe",
      description: "Classic Turkish pizza with special toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
    {
      name: "Meat Lovers Pizza",
      description: "Loaded with mixed meats.",
      price: "950",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
  ],
  Sides: [
    {
      name: "Hummus Bowl",
      description: "Creamy chickpea dip with olive oil.",
      price: "350",
      tags: ["Single Serving"],
      category: "Sides",
    },
    {
      name: "Baba Ghanoush",
      description: "Smoky eggplant dip.",
      price: "380",
      tags: ["Single Serving"],
      category: "Sides",
    },
    {
      name: "Tabbouleh Salad",
      description: "Fresh parsley and bulgur salad.",
      price: "400",
      tags: ["Single Serving"],
      category: "Sides",
    },
  ],
  Mutabbaq: [
    {
      name: "Chicken Mutabbaq",
      description: "Stuffed savory pastry with chicken.",
      price: "650",
      tags: ["Single Serving"],
      category: "Mutabbaq",
    },
    {
      name: "Vegetable Mutabbaq",
      description: "Mixed vegetables in crispy pastry.",
      price: "550",
      tags: ["Single Serving"],
      category: "Mutabbaq",
    },
  ],
  Fries: [
    {
      name: "Classic French Fries",
      description: "Crispy golden fries.",
      price: "250",
      tags: ["Single Serving"],
      category: "Fries",
    },
    {
      name: "Loaded Cheese Fries",
      description: "Fries with melted cheese and toppings.",
      price: "450",
      tags: ["Popular", "Single Serving"],
      category: "Fries",
    },
  ],
};

const sectionContent = {
  Home: {
    type: "video" as const,
    videoSrc: "/images/fasana-desktop-video-2.mp4",
    imageSrc: "/fasana-desktop.png",
    content: (
      <div className="text-center max-w-2xl">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 font-inria"
          style={{
            WebkitTextStroke: "1.5px rgba(226, 232, 240, 0.9)",
            color: "transparent",
            textShadow: `
              0 0 8px rgba(255, 255, 255, 0.25),
              0 0 16px rgba(255, 255, 255, 0.15)
            `,
            letterSpacing: "0.04em",
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Where Stories Brew
        </h1>
        <p
          className="text-lg md:text-md text-gray-100 mb-8"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Fasana Café is more than a coffee shop, it's a sanctuary for readers,
          thinkers, and dreamers. Born from Pakistan's beloved Readings
          bookstore, we blend the aroma of freshly brewed coffee with the
          timeless charm of literature.
        </p>
        <button
          style={{
            letterSpacing: "0.04em",
            fontFamily: "'Great Vibes', cursive",
          }}
          className="px-8 py-2.5 rounded-full text-[15px] font-semibold text-black 
              bg-gradient-to-b from-[#ffffff] to-[#d9d9d9]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.15)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_3px_6px_rgba(0,0,0,0.25)]
              transition-all duration-300 ease-out hover:scale-[1.02] font-inria"
        >
          Order Now
        </button>
      </div>
    ),
  },
  About: {
    type: "image" as const,
    imageSrc: "/about-desktop-1.png",
    content: (
      <div className="w-full max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* <div className="rounded-3xl bg-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="aspect-[4/3] w-full flex items-center justify-center bg-[#f2f2f2]">
              <div className="text-gray-400 text-sm">Image</div>
            </div>
          </div> */}
          <div className="text-left text-[#f6eadc]">
            <h2
              style={{
                letterSpacing: "0.04em",
                fontFamily: "'Great Vibes', cursive",
              }}
              className="text-3xl md:text-4xl font-semibold mb-4 "
            >
              A Story Worth Telling
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-[#f0e0cf] font-inria">
              Fasana—meaning "story" in Urdu—is an extension of Readings, the
              beloved bookstore that has nurtured Pakistan's reading culture for
              years. We believe that the best conversations happen over a good
              book and a great cup of coffee.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#f0e0cf]">
              Our café is designed as a cultural gathering space where
              literature meets life, where strangers become friends over shared
              stories, and where every visit writes a new chapter.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Literary Heritage
            </h3>
            <p className="text-sm text-white/90">
              Curated book collections from Readings, available to browse while
              you sip.
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
              Community Space
            </h3>
            <p className="text-sm text-white/90">
              Regular book clubs, author meetups, and creative writing sessions.
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
              Thoughtful Ambience
            </h3>
            <p className="text-sm text-white/90">
              Quiet corners for reading, spacious tables for conversations, and
              warm lighting throughout.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  Menu: {
    type: "none" as const,
    content: <MenuSection />,
  },
  Ambience: {
    type: "none" as const,
    content: <AmbienceCarousel />,
  },
  "Visit Us": {
    type: "none" as const,
    content: <VisitUsSection />,
  },
};

export default function Home() {
  const { section } = useSection();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // splash gate
  const [splashDone, setSplashDone] = useState(false);

  // video -> image transition state
  const [showFallback, setShowFallback] = useState(false);
  const [flight, setFlight] = useState(false);

  // soft flash when image appears
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (!splashDone || section !== "Home") return;

    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      setShowFallback(true);
      setFlash(true);
      requestAnimationFrame(() => setFlight(true));
      setTimeout(() => setFlash(false), 200);
    };

    const onError = () => {
      setShowFallback(true);
      setFlash(true);
      requestAnimationFrame(() => setFlight(true));
      setTimeout(() => setFlash(false), 200);
    };

    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError);

    // ensure play starts after splash
    v.play().catch(() => {
      setShowFallback(true);
      setFlash(true);
      requestAnimationFrame(() => setFlight(true));
      setTimeout(() => setFlash(false), 200);
    });

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError);
    };
  }, [splashDone]);

  const current = sectionContent[section];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Splash */}
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}

      {/* Sliding background (video on Home, image on other sections) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={section}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.8, 0.2, 1] }}
          className="absolute inset-0"
        >
          {current.type === "video" ? (
            <>
              <video
                ref={videoRef}
                className={[
                  "absolute inset-0 h-full w-full object-cover",
                  "transition-opacity duration-700 ease-in-out",
                  showFallback ? "opacity-0" : "opacity-100",
                  splashDone ? "opacity-100" : "opacity-0",
                ].join(" ")}
                src={splashDone ? current.videoSrc : undefined}
                autoPlay={splashDone}
                muted
                playsInline
                preload="auto"
              />

              <div
                className={[
                  "absolute inset-0",
                  "bg-cover bg-center",
                  "transition-opacity duration-[1400ms] ease-in-out",
                  showFallback ? "opacity-100" : "opacity-0",
                ].join(" ")}
                style={{ backgroundImage: `url('${current.imageSrc}')` }}
              >
                <div
                  className={[
                    "absolute inset-0 bg-white",
                    "transition-opacity duration-[900ms] ease-out",
                    flash ? "opacity-[0.18]" : "opacity-0",
                  ].join(" ")}
                />

                <div
                  className={[
                    "absolute inset-0",
                    "transition-transform duration-[1400ms] ease-out",
                    flight
                      ? "scale-100 translate-y-0"
                      : "scale-[1.06] translate-y-[14px]",
                  ].join(" ")}
                  style={{
                    backgroundImage: `url('${current.imageSrc}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </>
          ) : current.type === "image" ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${current.imageSrc}')` }}
            />
          ) : (
            <div className="absolute inset-0 bg-black" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content Overlay with horizontal slider */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={section}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.4, 0.8, 0.2, 1] }}
            className="w-full flex justify-center"
          >
            {current.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Social Media Icons - Only show on Home */}
      {section === "Home" && (
        <div className="absolute bottom-6 right-6 z-10 flex gap-3">
          <a
            href={"https://instagram.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-black/70 hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href={"https://facebook.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-black/70 hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
