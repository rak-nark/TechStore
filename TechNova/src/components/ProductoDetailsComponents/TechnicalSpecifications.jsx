export const TechnicalSpecifications = ({ specs }) => {
  return (
    <div className="mt-6 px-4">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          settings_input_component
        </span>
        Especificaciones Técnicas
      </h3>
      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-2 p-3 ${
              idx !== specs.length - 1
                ? "border-b border-slate-200 dark:border-slate-800"
                : ""
            } ${
              idx % 2 === 0
                ? "bg-slate-50 dark:bg-slate-800/30"
                : "bg-white dark:bg-slate-900/50"
            }`}
          >
            <span className="text-sm text-slate-500">{spec.label}</span>
            <span className="text-sm font-mono font-medium text-slate-900 dark:text-white">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
