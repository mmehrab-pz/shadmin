"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useTheme as useNextTheme } from "next-themes";

export default function Home() {
  const { changePreset } = useTheme();
  const { theme, setTheme } = useNextTheme();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {/* <div className="bg-primary text-primary-foreground p-6 rounded-lg">
        Theme Test
      </div>

      <button
        onClick={() => changePreset("green")}
        className="border p-2 rounded"
      >
        Change Theme
      </button>
      <button onClick={() => setTheme("light")}>Light</button>

      <button onClick={() => setTheme("dark")}>Dark</button> */}
      <Button variant="outline" onClick={() => setTheme("light")}>light</Button>
      <Button variant="outline" onClick={() => setTheme("dark")}>dark</Button>
    </div>
  );
}
