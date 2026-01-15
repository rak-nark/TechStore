export const PromoCarousel = () => {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 gap-4">
      {/* Slide 1 */}
      <div className="snap-center shrink-0 w-full">
        <div className="relative h-44 w-full rounded-xl overflow-hidden bg-primary/10 border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp")',
            }}
          ></div>
          <div className="relative z-20 p-6 h-full flex flex-col justify-center max-w-[60%]">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">
              Oferta Especial
            </span>
            <h2 className="text-xl font-bold text-white leading-tight mb-2">
              Poco X7 Gaming
            </h2>
            <p className="text-white/90 text-sm mb-4">
              El smartphone perfecto para gamers. 15% OFF.
            </p>
            <button className="bg-white hover:bg-slate-100 dark:bg-primary dark:hover:bg-blue-600 text-black dark:text-black text-sm font-bold py-2 px-4 rounded-lg w-fit transition-colors">
              Ver Producto
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="snap-center shrink-0 w-full">
        <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp")',
            }}
          ></div>
          <div className="relative z-20 p-6 h-full flex flex-col justify-center">
            <h2 className="text-xl font-bold text-white leading-tight mb-2">
              Monitor ASUS 240Hz
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Experiencia gaming premium. Stock limitado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
