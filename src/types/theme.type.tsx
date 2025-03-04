import type { Dispatch, SetStateAction } from "react";

export type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange" | "Violet"

export interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: Dispatch<SetStateAction<ThemeColors>>
}