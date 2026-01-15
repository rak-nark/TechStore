export const SearchBar = () => {
  return (
    <div className="px-4 py-4">
      <label className="flex flex-col w-full">
        <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="flex items-center justify-center pl-4 text-slate-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 text-base placeholder:text-slate-400 px-3"
            placeholder="Buscar SKU, ESP32, Sensores..."
          />
          <button className="flex items-center justify-center px-4 text-primary">
            <span className="material-symbols-outlined">qr_code_scanner</span>
          </button>
        </div>
      </label>
    </div>
  );
};
