export const RatingSummary = ({ rating, totalReviews, ratingDistribution }) => {
  return (
    <div className="px-4 pb-12">
      <h3 className="text-lg font-bold mb-4">Valoraciones</h3>
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        {/* Rating Score */}
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-black leading-tight tracking-tight">
            {rating}
          </p>
          <div className="flex gap-0.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`material-symbols-outlined ${
                  i < Math.floor(rating) ? "fill-1" : ""
                }`}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Basado en {totalReviews} opiniones
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="grid min-w-[200px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="contents">
              <p className="text-sm font-normal">{dist.stars}</p>
              <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="rounded-full bg-primary transition-all"
                  style={{ width: `${dist.percentage}%` }}
                ></div>
              </div>
              <p className="text-slate-500 text-xs text-right">
                {dist.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
