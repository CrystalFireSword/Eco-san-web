import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000, className = "" }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`carousel-frame ${className}`}>
      <img 
        src={images[currentImage]} 
        className="carousel-image" 
        alt={`Slide ${currentImage + 1}`} 
      />
    </div>
  );
};

export default Carousel;
