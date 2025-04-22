"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        console.log("Button clicked");
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="p-2 rounded-full z-50 bg-white dark:bg-gray-600 fixed top-8 right-8 dark:text-white shadow-lg hover:bg-gray-300 transition-colors"
    >
      {theme === "dark" ? (
        <FaMoon className="h-6 w-6 text-gray-600 transition-transform transform rotate-0 hover:rotate-360" />
      ) : (
        <FaSun className="h-6 w-6 text-yellow-400 transition-transform transform rotate-0 hover:rotate-360" />
      )}
    </button>
  );
};

export default ThemeSwitch;
