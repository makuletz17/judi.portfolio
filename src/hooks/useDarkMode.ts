import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return [dark, setDark];
}
