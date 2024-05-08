"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(()=>{
    handleThemeChange()
  },[mode])
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
    const context = useContext(ThemeContext);
    return context;
}