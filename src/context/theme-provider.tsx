"use client";
import setGlobalColorTheme from "@/lib/theme-colors";
import { type ThemeProviderProps, useTheme } from "next-themes";
import {
  createContext,
  use,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams,
);

export default function ThemeDataProvider({
  children,
}: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc";
    } catch (error) {
      "Zinc" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors,
  );
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(theme as "light" | "dark", themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext>
  );
}

export function useThemeContext() {
  return use(ThemeContext);
}