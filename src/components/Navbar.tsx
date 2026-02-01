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
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-2 p-4">
            {items.map((item) => {
              const isActive = section === item.href;

              return (
                <button
                  key={item.href}
                  onClick={() => {
                    setSection(item.href as Section);
                    setIsOpen(false);
                  }}
                  className={[
                    "flex items-center gap-3",
                    "rounded-lg",
                    "px-4 py-3",
                    "transition-all duration-200",
                    "text-sm font-medium",
                    "font-inria",
                    "text-left",
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                setSection("Menu");
                setIsOpen(false);
              }}
              className={[
                "rounded-lg",
                "px-4 py-3",
                "transition-all duration-200",
                "text-sm font-semibold",
                "font-inria",
                "w-full",
                "bg-white text-black",
                "hover:bg-white/90 mt-2",
              ].join(" ")}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
