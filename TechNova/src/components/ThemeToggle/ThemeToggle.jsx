import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(null);

  // Detectar el tema actual al montar el componente
  useEffect(() => {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.contains("dark");
    setDarkMode(isDark);
    console.log("Tema detectado:", isDark ? "dark" : "light");
  }, []);

  // Cambiar el tema cuando el estado cambia
  useEffect(() => {
    if (darkMode === null) return;

    const htmlElement = document.documentElement;

    console.log("Cambiando a:", darkMode ? "dark" : "light");

    if (darkMode) {
      htmlElement.classList.add("dark");
      htmlElement.style.colorScheme = "dark";
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.style.colorScheme = "light";
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    console.log("Toggle clicked, changing to:", newDarkMode ? "dark" : "light");
    setDarkMode(newDarkMode);
  };

  if (darkMode === null) return null;

  return (
    <button
      onClick={handleToggle}
      aria-label="Cambiar tema"
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors active:scale-95 hover:scale-110"
      title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <span className="material-symbols-outlined text-xl">
        {darkMode ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};
