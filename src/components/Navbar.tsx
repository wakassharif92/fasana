"use client";

import { useMemo, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSection, Section } from "@/context/SectionContext";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function Navbar() {
  const { section, setSection } = useSection();

  const items: NavItem[] = useMemo(
    () => [
      {
        label: "Home",
        href: "Home",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 12l9-9 9 9v-2h-2v7h-4v-4h-4v4H5v-7H3v2Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        ),
      },
      {
        label: "About",
        href: "About",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.9" />
            <path
              d="M12 11a5 5 0 0 0-5 5v5h10v-5a5 5 0 0 0-5-5Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        ),
      },
      {
        label: "Ambience",
        href: "Ambience",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M12 4v16M4 12h16"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        ),
      },
      {
        label: "Visit Us",
        href: "Visit Us",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M12 6v6l4 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.85"
            />
          </svg>
        ),
      },
    ],
    [],
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Center stack: Logo on top, navbar under it with EXACT 10px spacing */}
      <div className="flex  items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Image
            src="/logo-white.png"
            alt="Fasana"
            width={250}
            height={250}
            priority
            className="object-contain"
          />
        </Link>

        {/* EXACT 10px space */}
        <div className="h-[1px]" />

        {/* Navbar pill (with a bit of horizontal breathing room) */}
        <div className="w-full px-[10px]">
          <div
            className="
              mx-auto
              w-full
              max-w-[560px]
              rounded-full
              bg-white/20
              backdrop-blur-2xl
              border-3 border-black/50
              shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              px-2 py-2
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
                      <span className={isActive ? "text-white" : "text-white"}>
                        {item.icon}
                      </span>
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
    </nav>
  );
}
