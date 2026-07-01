"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useTheme as useNextTheme } from "next-themes";
import { redirect } from 'next/navigation'

export default function Home() {
  const { changePreset } = useTheme();
  const { theme, setTheme } = useNextTheme();
  return (
    <>hello</>
  );
}
