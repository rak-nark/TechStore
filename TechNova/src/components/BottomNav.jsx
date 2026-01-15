export const BottomNavigation = () => {
  const navItems = [
    { icon: "home", label: "Inicio", active: true },
    { icon: "category", label: "Categorías", active: false },
    { icon: "shopping_bag", label: "Carrito", active: false },
    { icon: "bookmark", label: "Deseos", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-safe pb-4 pt-2 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 ${
              item.active ? "text-primary" : "text-slate-400"
            }`}
          >
            <span
              className={`material-symbols-outlined ${
                item.active ? "fill-[1]" : ""
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] ${
                item.active ? "font-bold" : "font-medium"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
