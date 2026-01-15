import { useNavigate } from "react-router-dom";

export const CatalogProductItem = ({
  id,
  name,
  price,
  specs,
  stock,
  image,
  onAddCart,
}) => {
  const navigate = useNavigate();
  const isOutOfStock = stock === null || stock === 0;
  const stockColor =
    stock && stock > 50
      ? "bg-emerald-500"
      : stock && stock > 10
      ? "bg-orange-500"
      : "bg-slate-400";

  const stockLabel =
    stock === null || stock === 0
      ? "Agotado"
      : stock > 50
      ? `${stock}+ en stock`
      : `${stock} en stock`;

  const handleNavigateToProduct = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <div
      onClick={handleNavigateToProduct}
      className={`flex gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 items-center cursor-pointer hover:border-primary transition-colors ${
        isOutOfStock ? "opacity-70" : ""
      }`}
    >
      <div
        className={`bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[80px] shrink-0 border border-slate-100 dark:border-slate-700 ${
          isOutOfStock ? "grayscale" : ""
        }`}
        style={{ backgroundImage: `url("${image}")` }}
      ></div>

      <div className="flex flex-1 flex-col justify-center min-w-0">
        <div className="flex justify-between items-start">
          <p className="text-slate-900 dark:text-white text-base font-bold leading-tight truncate">
            {name}
          </p>
          <span className="text-primary font-bold text-base ml-2">
            ${price}
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1">
          <span className={`w-2 h-2 rounded-full ${stockColor}`}></span>
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${
              isOutOfStock
                ? "text-slate-500 dark:text-slate-400"
                : stockColor === "bg-emerald-500"
                ? "text-emerald-600 dark:text-emerald-400"
                : stockColor === "bg-orange-500"
                ? "text-orange-600 dark:text-orange-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {stockLabel}
          </p>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1 leading-snug">
          {specs}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddCart();
        }}
        disabled={isOutOfStock}
        className="shrink-0 size-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined text-lg">
          {isOutOfStock ? "notifications" : "shopping_cart"}
        </span>
      </button>
    </div>
  );
};
