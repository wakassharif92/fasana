"use client";

import { createContext, useContext, useState } from "react";

export type Section = "Home" | "About" | "Menu" | "Ambience" | "Visit Us";

const SectionContext = createContext<{
  section: Section;
  setSection: (s: Section) => void;
}>({ section: "Home", setSection: () => {} });

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<Section>("Home");
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
