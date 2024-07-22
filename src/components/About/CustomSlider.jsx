import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    image: "https://via.placeholder.com/50x50",
    name: "Alex B.",
    testimonial: "This platform has transformed the way we handle our dairy transactions. It's user-friendly and highly efficient."
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50x50",
    name: "Priya S.",
    testimonial: "The automated billing and payment tracking features have made managing our business much easier."
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50x50",
    name: "Raj M.",
    testimonial: "An invaluable tool for our daily operations. The reporting tools are especially helpful for making informed decisions."
  },
  {
    id: 4,
    image: "https://via.placeholder.com/50x50",
    name: "Nina T.",
    testimonial: "The seamless integration of the system into our workflow has been a game-changer for us."
  }
];

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 w-full p-4 flex items-center space-x-4">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="text-gray-700 font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 mt-1">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 w-full flex justify-center gap-6">
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
