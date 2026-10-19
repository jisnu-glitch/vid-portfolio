"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setIsDark(t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIsDark(!isDark);
  }

  return (
    <button className="theme" type="button" onClick={toggle} aria-label="Switch between light and dark surround">
      {isDark ? "Light surround" : "Dark surround"}
    </button>
  );
}
