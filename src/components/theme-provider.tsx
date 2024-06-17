"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import setGlobalColorTheme from "@/lib/theme-colors";

const ThemeContent = React.createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams,
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Rose";
    } catch (error) {
      "Rose" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = React.useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors,
  );

  const [isMounted, setIsMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(theme as "light" | "dark", themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContent.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContent.Provider>
  );
}

export function useThemeContext() {
  return React.useContext(ThemeContent);
}
