import { CategoryIcon } from "./ui/CategoryIcon";

export const CategoriesGrid = () => {
  const categories = [
    { icon: "computer", label: "Micro" },
    { icon: "sensors", label: "Sensores" },
    { icon: "bolt", label: "Fuentes" },
    { icon: "build", label: "Tools" },
  ];

  return (
    <div className="px-4 py-6">
      <h3 className="text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
        Categorías Técnicas
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((cat, idx) => (
          <CategoryIcon key={idx} icon={cat.icon} label={cat.label} />
        ))}
      </div>
    </div>
  );
};
