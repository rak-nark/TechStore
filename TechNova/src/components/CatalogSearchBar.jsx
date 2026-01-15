export const CatalogSearchBar = ({ onSearch }) => {
  return (
    <div className="px-4 pb-4">
      <label className="flex flex-col min-w-40 h-11 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden shadow-sm">
          <div className="text-slate-400 flex border-none bg-white dark:bg-slate-800 items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            onChange={(e) => onSearch(e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-400 px-3 text-sm font-medium"
            placeholder="Buscar componentes (ej. Arduino, Resistor...)"
          />
        </div>
      </label>
    </div>
  );
};
