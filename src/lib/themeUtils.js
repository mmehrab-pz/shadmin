"use client";

import { themes } from "./themes";

export function getTheme(themeName, mode = "light") {
  const theme = themes[themeName];

  if (!theme) return null;

  return theme[mode];
}

export function applyTheme(themeVariables) {
  if (!themeVariables) return;

  console.log(themeVariables);

  Object.entries(themeVariables).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}