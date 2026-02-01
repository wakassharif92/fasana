"use client";

import { useMemo, ReactNode, useState } from "react";
import Image from "next/image";
import { useSection, Section } from "@/context/SectionContext";
import {
  HiHome,
  HiInformationCircle,
  HiSquares2X2,
  HiPhoto,
  HiMapPin,
} from "react-icons/hi2";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function Navbar() {
  const { section, setSection } = useSection();
  const [isOpen, setIsOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      {
        label: "Home",
        href: "Home",
        icon: <HiHome className="h-4 w-4" />,
      },
      {
        label: "About",
        href: "About",
        icon: <HiInformationCircle className="h-4 w-4" />,
      },
      {
        label: "Menu",
        href: "Menu",
        icon: <HiSquares2X2 className="h-4 w-4" />,
      },
      {
        label: "Ambience",
        href: "Ambience",
        icon: <HiPhoto className="h-4 w-4" />,
      },
      {
        label: "Visit Us",
        href: "Visit Us",
        icon: <HiMapPin className="h-4 w-4" />,
      },
    ],
    [],
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop: Center stack with Logo and navbar pill */}
      <div className="hidden md:flex items-center justify-center">
        {/* Logo */}
        <button
          onClick={() => setSection("Home")}
          className="flex items-center justify-center cursor-pointer"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Image
            src="/logo-white.png"
            alt="Fasana"
            width={200}
            height={200}
            priority
            className="object-contain"
          />
        </button>

        {/* Navbar pill */}
        <div className="w-full px-[10px]">
          <div
            className="
              mx-auto
              w-full
              max-w-[630px]
              rounded-full
              bg-white/20
              backdrop-blur-2xl
              
              shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              px-3 py-3
            "
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                {items.map((item) => {
                  const isActive = section === item.href;

                  return (
                    <button
                      key={item.href}
                      onClick={() => setSection(item.href as Section)}
                      className={[
                        "flex items-center gap-2",
                        "rounded-full",
                        "px-3.5 py-1.5",
                        "transition-all duration-200",
                        "text-[12.5px] leading-none font-medium",
                        "select-none whitespace-nowrap",
                        "font-inria",
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-white hover:text-white hover:bg-white/8",
                      ].join(" ")}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <span>{item.icon}</span>
                      <span className="tracking-[0.01em]">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setSection("Menu")}
                className={[
                  "rounded-full",
                  "px-4 py-1.5",
                  "transition-all duration-200",
                  "text-[12.5px] leading-none font-semibold",
                  "select-none whitespace-nowrap",
                  "font-inria",
                  "bg-white text-black",
                  "hover:bg-white/90",
                ].join(" ")}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal navbar with logo and hamburger */}
      <div className="md:hidden flex items-center justify-center px-4 py-3 bg-black/40 backdrop-blur-md relative">
        {/* Centered Logo */}
        <button
          onClick={() => setSection("Home")}
          className="flex items-center cursor-pointer"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Image
            src="/logo-white.png"
            alt="Fasana"
            width={140}
            height={140}
            priority
            className="object-contain"
          />
        </button>

        {/* Hamburger Menu Button - Positioned absolute right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu items - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  setSection(item.href as Section);
                  setIsOpen(false);
                }}
                className="text-white text-2xl font-normal tracking-wide hover:text-white/70 transition-colors"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  fontFamily: "'Inria Serif', serif",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bottom order section */}
          <div className="px-8 pb-12 flex flex-col items-center gap-4">
            <p className="text-white/60 text-xs tracking-wider uppercase font-medium">
              READY TO ORDER?
            </p>
            <p className="text-white text-sm mb-2">WhatsApp us in 1 Tap!</p>
            <button
              onClick={() => {
                setSection("Menu");
                setIsOpen(false);
              }}
              className="bg-[#00bfa5] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#00bfa5]/90 transition-colors min-w-[120px]"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
