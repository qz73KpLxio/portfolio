"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const iconColor = currentTheme === "dark" ? "text-white" : "text-black";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(
          theme === "dark" || currentTheme === "dark" ? "light" : "dark",
        );
      }}
      className="rounded-xs rounded p-1 hover:bg-gray-200 hover:dark:bg-[#313131]"
    >
      {currentTheme === "dark" ? (
        <span className={`sun-icon ${iconColor}`}>
          <SunIcon height={25} width={25} />
        </span>
      ) : (
        <span className={`moon-icon ${iconColor}`}>
          <MoonIcon height={25} width={25} />
        </span>
      )}
    </button>
  );
}