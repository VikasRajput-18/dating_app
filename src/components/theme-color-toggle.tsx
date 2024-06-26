"use client";

import * as React from "react";
import { useThemeContext } from "./theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const availableThemeColors = [
  // { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
  { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
];

export function ThemeColorChanger() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => {
      return (
        <SelectItem key={name} value={name} className="">
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "rounded-full",
                "w-[20px]",
                "h-[20px]",
                theme === "light" ? light : dark,
              )}
            ></div>
            <div className="text-sm">{name}</div>
          </div>
        </SelectItem>
      );
    });
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger
        className="bg-transparent backdrop-blur-sm font-semibold text-white w-[180px]
          ring-offset-transparent focus:ring-transparent"
      >
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted text-white bg-transparent backdrop-blur-sm font-semibold">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
}
