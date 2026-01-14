import { MdChevronLeft, MdChevronRight, MdPause, MdPlayArrow } from "react-icons/md";
import { useCarousel } from './UseCarousel ';

export default function Carousel() {
    const {
        slides,
        currentSlide,
        isAutoPlaying,
        nextSlide,
        prevSlide,
        goToSlide,
        toggleAutoPlay
    } = useCarousel();

    return (
        <div className="relative w-full bg-gradient-to-r from-white-500 to-blue-600 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="relative h-96 md:h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8">
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="max-h-72 md:max-h-96 w-auto object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 text-center md:text-left px-4">
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                            {slide.title}
                                        </h2>
                                        <p className="text-xl text-cyan-50 mb-6">
                                            {slide.description}
                                        </p>
                                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors duration-200">
                                            Ver Producto
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 z-10"
                    >
                        <MdChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 z-10"
                    >
                        <MdChevronRight size={32} />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                    <button
                        onClick={toggleAutoPlay}
                        className="ml-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                        {isAutoPlaying ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
}