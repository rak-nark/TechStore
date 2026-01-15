import { useNavigate, useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: "home", label: "Inicio", path: "/" },
    { icon: "category", label: "Categorías", path: "/catalogo" },
    { icon: "shopping_bag", label: "Carrito", path: "/carrito" },
    { icon: "bookmark", label: "Deseos", path: "/deseos" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 backdrop-blur-xl pb-safe pb-4 pt-2 z-50 border-t"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderTopColor: "var(--nav-border)",
      }}
    >
      <div className="max-w-md mx-auto flex justify-around items-center">
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                isActive
                  ? "text-primary"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400"
              }`}
            >
              <span
                className={`material-symbols-outlined ${
                  isActive ? "fill-[1]" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-[10px] ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
