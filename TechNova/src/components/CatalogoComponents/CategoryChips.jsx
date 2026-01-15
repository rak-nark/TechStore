export const CategoryChips = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
      {categories.map((category, idx) => (
        <button
          key={idx}
          onClick={() => onCategoryChange(category)}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-colors ${
            category === activeCategory
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
          }`}
        >
          <span className="text-sm font-medium">{category}</span>
          {category !== "Todos" && (
            <span className="material-symbols-outlined text-base">
              expand_more
            </span>
          )}
        </button>
      ))}
    </div>
  );
};
