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
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPULtnWvyZlrZ8RvFwtqLgv4aMI9X089yeMjnlvWXLDk2RHwIhAqpAvsXs4DcX8QQwmFtJxu1rHMC4BynQeXEIlRcmsbU8Gs2kZsWU_QNmFt7McFNKPTXdDjd1Mzb4lfEpdZZCM5icJkxfXNI4InvfcoWqbEooZEuMrTsXUVeMtkcZ3uipOH4fSLr75rivhERO6_ENnOqWDnLmpyUwmpg1Vq7a4i6jEKZJKSYfeEuZqvPTliN3eSTlXKjGcyxQDB1vd-VHfvNnxg")',
            }}
          ></div>
          <div className="relative z-20 p-6 h-full flex flex-col justify-center max-w-[60%]">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">
              Oferta Especial
            </span>
            <h2 className="text-xl font-bold text-white leading-tight mb-2">
              Arduino Starter Kits
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Todo para empezar tu proyecto. 20% OFF.
            </p>
            <button className="bg-white text-primary text-sm font-bold py-2 px-4 rounded-lg w-fit">
              Ver Kits
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
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDipLPh8HEx2TTNGe9iztEd6AkBkiEayFO09XuL78wMqsAT6-1jiAo_Nkiq9hUSWqaBS6RjxFCcp9X5wQVmPGaYEaA-qq2Foe7zQTLNUGyQ-lGtTDrqftWOw07D1hzzeF45j_xIHYA3kbjVH6f4tS9uUpqMwG9BVdu8VkhOyHm8ZLCI2-0gYmPdvobJ44vq3nG2w6dM3w4DypIngPcwm-1o84uHhyoLBb35FgsT7JDvQb03-MjN21xMkm2Y9kk_lheKM_WJEFPkHw")',
            }}
          ></div>
          <div className="relative z-20 p-6 h-full flex flex-col justify-center">
            <h2 className="text-xl font-bold text-white leading-tight mb-2">
              Raspberry Pi 5
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Stock limitado disponible hoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
