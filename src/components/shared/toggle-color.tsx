"use client";

import { useState } from "react";
import { useThemeContext } from "@/context/theme-provider";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import type { ThemeColors } from "@/types/theme.type";

type ThemeMode = "light" | "dark";
type OptionsTheme = {
  name: string;
  light: string;
  dark: string;
}

const availableThemeColors: OptionsTheme[] = [
  { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
  { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
  { name: "Violet", light: "bg-violet-600", dark: "bg-violet-700" },
];

const getBackgroundColor = (themeName: string, mode: ThemeMode = "light"): string => {
  const theme = availableThemeColors.find((t) => t.name === themeName);
  return theme ? theme[mode] : "bg-gray-500";
};

export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const themeValid = theme ? theme as ThemeMode : "light";
  const bgColor = getBackgroundColor(themeColor, themeValid);

  const [bgTheme, setBgTheme] = useState(bgColor);

  const stateTheme = (name: string, bgLight: string, bgDark: string) => {
    setThemeColor(name as ThemeColors);

    const bg = theme === "light" ? bgLight : bgDark;
    setBgTheme(bg);
  }

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <DropdownMenuItem key={name} onClick={() => stateTheme(name, light, dark)} className="flex justify-center items-center cursor-pointer">
        <div
          className={cn(
            "rounded-full",
            "w-[20px]",
            "h-[20px]",
            theme === "light" ? light : dark,
          )}
        />
      </DropdownMenuItem>
    ));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
              bgTheme
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-20" align="center">
        {createSelectItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}