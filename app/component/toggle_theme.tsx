// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState("");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//       setTheme(savedTheme);
//     } else {
//       // detect system theme only initially
//       const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       setTheme(systemDark ? "dark" : "light");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//     </button>
//   );
// }









"use client";
import { useEffect, useState } from "react";

export default function Toggle() {
  const [theme, setTheme] = useState("");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // Default: system theme
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="flex justify-between px-4 py-3 fixed top-0 left-0 right-0 bg-white dark:bg-black shadow z-50">
      <h1 className="text-xl font-bold dark:text-white">Keshav’s Portfolio</h1>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800"
      >
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
