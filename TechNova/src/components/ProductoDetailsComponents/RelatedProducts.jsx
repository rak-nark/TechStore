export const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-10 pb-24">
      <div className="px-4 flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Comprado frecuentemente</h3>
        <span className="text-primary text-sm font-bold cursor-pointer hover:underline">
          Ver todo
        </span>
      </div>

      <div className="flex overflow-x-auto gap-4 px-4 pb-6 no-scrollbar">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[160px] bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors"
          >
            <div
              className="h-28 rounded-lg bg-slate-100 dark:bg-slate-800 mb-2 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url('${product.image}')` }}
            ></div>

            <p className="text-xs font-bold line-clamp-2 mb-1 dark:text-white">
              {product.name}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-primary">
                ${product.price}
              </span>
              <button className="bg-primary size-7 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors active:scale-90">
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
