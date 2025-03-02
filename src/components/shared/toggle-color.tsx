"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useThemeContext } from "@/context/theme-provider";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const availableThemeColors = [
  { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
  { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
  { name: "Violet", light: "bg-violet-600", dark: "bg-violet-700" },
];

export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex space-x-3 item-center">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
              theme === "light" ? light : dark,
            )}
          />
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ));
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger className="focus:ring-transparent ring-offset-transparent w-[180px]">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
}