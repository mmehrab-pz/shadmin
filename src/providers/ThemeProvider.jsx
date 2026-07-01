"use client";

import { useEffect, useState } from "react";
import { getTheme, applyTheme } from "@/lib/themeUtils";
import { ThemeContext } from "./ThemeContext";
import { useTheme as useNextTheme } from "next-themes";

export default function ThemeProvider({ children }) {
  const [preset, setPreset] = useState("blue");
  const { resolvedTheme } = useNextTheme();

  const changePreset = (presetName) => {
    setPreset(presetName);
  };

  useEffect(() => {
    const savedPreset = localStorage.getItem("preset");

    if (savedPreset) {
      setPreset(savedPreset);
    }
  }, []);

  useEffect(() => {
    if (!resolvedTheme) return;

    const variables = getTheme(preset, resolvedTheme);

    applyTheme(variables);

    localStorage.setItem("preset", preset);
  }, [preset, resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        preset,
        changePreset,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
