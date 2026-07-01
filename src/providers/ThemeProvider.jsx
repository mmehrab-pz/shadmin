// "use client";

// import { useEffect, useState } from "react";
// import { getTheme, applyTheme } from "@/lib/themeUtils";
// import { ThemeContext } from "./ThemeContext";
// import { useTheme as useNextTheme } from "next-themes";

// export default function ThemeProvider({ children }) {
//   const [preset, setPreset] = useState("blue");
//   const { resolvedTheme } = useNextTheme();

//   const changePreset = (presetName) => {
//     setPreset(presetName);
//   };

//   useEffect(() => {
//     const savedPreset = localStorage.getItem("preset");

//     if (savedPreset) {
//       setPreset(savedPreset);
//     }
//   }, []);

//   useEffect(() => {
//     if (!resolvedTheme) return;

//     const variables = getTheme(preset, resolvedTheme);

//     applyTheme(variables);

//     localStorage.setItem("preset", preset);
//   }, [preset, resolvedTheme]);

//   return (
//     <ThemeContext.Provider
//       value={{
//         preset,
//         changePreset,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { getTheme, applyTheme } from "@/lib/themeUtils";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [preset, setPreset] = useState("blue");
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  const changePreset = (presetName) => {
    setPreset(presetName);
  };

  // mount guard (خیلی مهم)
  useEffect(() => {
    setMounted(true);

    const savedPreset = localStorage.getItem("preset");
    const savedTheme = localStorage.getItem("theme");

    if (savedPreset) setPreset(savedPreset);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const variables = getTheme(preset, theme);
    applyTheme(variables);

    localStorage.setItem("preset", preset);
    localStorage.setItem("theme", theme);
  }, [preset, theme, mounted]);

  return (
    <ThemeContext.Provider
      value={{
        preset,
        changePreset,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}