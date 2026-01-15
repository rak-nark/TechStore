export const ProductCard = ({ sku, title, price, image, onAddClick }) => {
  return (
    <div className="bg-white dark:bg-[#192233] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-slate-50 dark:bg-slate-900/50 p-4">
        <img
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal opacity-90"
          src={image}
          alt={title}
        />
        <button
          className="absolute bottom-2 right-2 size-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          onClick={onAddClick}
        >
          <span className="material-symbols-outlined text-xl">add</span>
        </button>
      </div>
      <div className="p-3">
        <p className="text-[10px] text-slate-500 font-mono mb-1">SKU: {sku}</p>
        <h4 className="text-sm font-bold leading-tight line-clamp-2 mb-2">
          {title}
        </h4>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold">${price}</span>
          <span className="text-[10px] text-slate-400">USD</span>
        </div>
      </div>
    </div>
  );
};
