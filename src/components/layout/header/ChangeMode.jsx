import React from "react";
import { Eclipse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ChangeMode() {
     const { theme, setTheme } = useTheme();
       const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button variant="outline" size="icon-xs" aria-label="Toggle theme" onClick={toggleMode}>
      <Eclipse />
    </Button>
  );
}
