import { useState } from "react";

const images = [
  "./src/assets/t1.jpg",
  "./src/assets/t2.jpg",
  "./src/assets/t3.jpg",
  "./src/assets/t2.jpg",
  "./src/assets/t1.jpg",
  "./src/assets/t3.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full max-w-3xs mx-auto overflow-clip
    border-4 border-gray-800 rounded-3xl shadow-xl bg-black p-4 my-10"
    >
      {/* Contenedor de imágenes */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="object-contain"
          />
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full shadow hover:bg-purple-700 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full shadow hover:bg-purple-700 transition"
      >
        ›
      </button>
    </div>
  );
}
