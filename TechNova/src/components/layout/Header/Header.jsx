import { useState } from "react";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle.jsx";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="flex flex-col gap-2 p-4 max-w-md mx-auto">
        {/* Fila principal */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo y título */}
          <a
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
              memory
            </span>
            <h1 className="text-lg font-bold tracking-tight font-['Space_Grotesk']">
              Tech Components
            </h1>
          </a>

          {/* Botones de acción */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Buscar productos"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>

            <button
              aria-label="Carrito de compras"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors active:scale-95 relative"
            >
              <span className="material-symbols-outlined text-xl">
                shopping_cart
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <ThemeToggle />

            <button
              aria-label="Perfil de usuario"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">person</span>
            </button>
          </div>
        </div>

        {/* Barra de búsqueda expandible */}
        {isSearchOpen && (
          <div className="flex items-center gap-2 animate-in slide-in-from-top duration-200">
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Buscar componentes..."
                autoFocus
                className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                search
              </span>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        )}

        {/* Categorías rápidas */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <button className="px-3 py-1.5 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap hover:bg-primary/90 transition-colors">
            Todo
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            CPUs
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            GPUs
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            RAM
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Storage
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Placas
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
