import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedCursor from "react-animated-cursor";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* Dynamic Animated Cursor with smooth effect */}
      <AnimatedCursor
        innerSize={12}
        outerSize={40}
        color={isDarkMode ? "255,255,255" : "0,0,0"}
        outerAlpha={0.3}
        innerScale={1.3}
        outerScale={3}
        trailingSpeed={6} // Lower is faster/smoother
        clickables={["a", "button", ".link"]}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
          "focus:outline-none"
        )}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  );
};
