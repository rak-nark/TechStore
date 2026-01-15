export const ProductListItem = ({
  image,
  title,
  specs,
  price,
  stock,
  onAddClick,
}) => {
  const isLowStock = stock === "Últimas 5";
  const stockColor = isLowStock
    ? "bg-orange-500/10 text-orange-500"
    : "bg-green-500/10 text-green-500";

  return (
    <div className="bg-white dark:bg-[#192233] rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center gap-4">
      <div className="size-20 rounded-lg bg-slate-50 dark:bg-slate-900/50 p-2 shrink-0">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold mb-1 line-clamp-1">{title}</h4>
        <p className="text-[10px] text-slate-500 mb-2">{specs}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold">${price}</span>
          <span
            className={`text-[10px] ${stockColor} px-2 py-0.5 rounded font-bold uppercase tracking-tight`}
          >
            {stock}
          </span>
        </div>
      </div>
      <button
        className="size-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0"
        onClick={onAddClick}
      >
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};
