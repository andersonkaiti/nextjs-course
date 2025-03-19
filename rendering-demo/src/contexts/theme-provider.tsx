"use client";

import { createContext, useContext } from "react";

interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

const defaultTheme: ITheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<ITheme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
}

export const useTheme = () => useContext(ThemeContext);
