import { useState, useEffect } from "react";

interface CarouselSlide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      image:
        "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      alt: "Audífonos Gamer Kotion G2000 Over-ear Negro Rojo con Micrófono",
      title: "Audífonos Gamer Kotion G2000",
      description: "Sonido envolvente para la mejor experiencia gaming",
    },
    {
      image:
        "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      alt: "Apple Macbook Air 13.6 Chip M4 256GB SSD 16GB RAM Gris Oscuro",
      title: "MacBook Air M4",
      description: "Potencia y portabilidad en un diseño elegante",
    },
    {
      image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      alt: "Xiaomi Poco X7 5G 256GB Negro 8GB RAM 50MP Cámara",
      title: "Xiaomi Poco X7 5G",
      description: "Tecnología 5G con cámara profesional de 50MP",
    },
    {
      image:
        "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      alt: "Cargador Inalámbrico 15W Soporte para iPhone Samsung carga rápida",
      title: "Cargador Inalámbrico 15W",
      description: "Carga rápida para todos tus dispositivos",
    },
    {
      image: "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      alt: "Monitor Gamer Asus 26.5 pulgadas 240Hz QHD Pantalla",
      title: "Monitor Gamer Asus 240Hz",
      description: "Experiencia visual superior para gaming competitivo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return {
    slides,
    currentSlide,
    isAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay,
  };
};
