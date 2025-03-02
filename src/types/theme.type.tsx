type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange" | "Violet"

interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}