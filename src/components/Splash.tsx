"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash({ onDone }: { onDone?: () => void }) {
  const ENTER_MS = 1000; // slow grow
  const VISIBLE_MS = 800; // gentle hold
  const EXIT_MS = 1000; // slow shrink

  const [stage, setStage] = useState<"enter" | "visible" | "exit" | "hidden">(
    "enter",
  );

  useEffect(() => {
    const tVisible = setTimeout(() => setStage("visible"), ENTER_MS);
    const tExit = setTimeout(() => setStage("exit"), ENTER_MS + VISIBLE_MS);
    const tHidden = setTimeout(
      () => {
        setStage("hidden");
        onDone?.();
      },
      ENTER_MS + VISIBLE_MS + EXIT_MS,
    );

    return () => {
      clearTimeout(tVisible);
      clearTimeout(tExit);
      clearTimeout(tHidden);
    };
  }, [onDone]);

  if (stage === "hidden") return null;

  const containerClass =
    "fixed inset-0 z-[9999] flex items-center justify-center bg-black";

  const base =
    "transition-all ease-in-out will-change-transform will-change-opacity flex items-center justify-center";

  const motionClass =
    stage === "enter"
      ? `${base} opacity-0 scale-[0.85] duration-[400ms]`
      : stage === "visible"
        ? `${base} opacity-100 scale-100 duration-[400ms]`
        : `${base} opacity-0 scale-[0.85] duration-[400ms]`;

  return (
    <div className={containerClass} aria-hidden={stage !== "visible"}>
      <div className={motionClass}>
        <Image
          src="/logo-white.png"
          alt="Fasana"
          width={400}
          height={400}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
