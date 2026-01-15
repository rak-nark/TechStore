export const ProductGallery = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = [0];

  return (
    <div className="px-4 py-3">
      <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col justify-end group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all"
          style={{
            backgroundImage: `url("${images[currentImageIndex]}")`,
          }}
        ></div>

        {/* Pagination Dots */}
        <div className="relative flex justify-center gap-2 p-5 bg-gradient-to-t from-black/40 to-transparent">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`size-2 rounded-full cursor-pointer transition-all ${
                idx === currentImageIndex ? "bg-primary" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(idx)}
            ></div>
          ))}
        </div>

        {/* Zoom Button */}
        <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
          <span className="material-symbols-outlined text-white">zoom_in</span>
        </button>
      </div>
    </div>
  );
};
