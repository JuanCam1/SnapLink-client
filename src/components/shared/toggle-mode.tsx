"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 hover:shadow-lg border-[0.5px] dark:border-zinc-800 rounded-md w-10 dark:text-white hover:scale-105 transition-all duration-300 ease-in-out transform"
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all"
      />
      <Moon
        className="absolute w-[1.2rem] h-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}