import React, { useState, useEffect } from "react";

const Carousel = ({ items = [], images = [], interval = 3000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use either items or images (for backward compatibility)
  const carouselItems = items.length > 0 ? items : images.map(img => ({ src: img }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    if (!carouselItems || carouselItems.length === 0) return;
    
    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [carouselItems, interval]);

  if (!carouselItems || carouselItems.length === 0) return null;

  const currentItem = carouselItems[currentIndex];

  return (
    <div className={`carousel-frame ${className}`}>
      <div className="carousel-content-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        <button onClick={prevSlide} className="carousel-control prev" aria-label="Previous slide">
          &#10094;
        </button>
        
        <img 
          src={currentItem.src} 
          className="carousel-image" 
          alt={currentItem.source || `Slide ${currentIndex + 1}`} 
        />

        <button onClick={nextSlide} className="carousel-control next" aria-label="Next slide">
          &#10095;
        </button>
      </div>
      
      {currentItem.source && (
        <div className="carousel-caption" style={{ 
          marginTop: '15px', 
          textAlign: 'center', 
          color: '#333',
          fontFamily: 'Poppins',
          fontSize: '1.2rem'
        }}>
          Featured in: <a href={currentItem.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: '600', textDecoration: 'none', borderBottom: '2px solid #fff' }}>
            {currentItem.source}
          </a>
        </div>
      )}
    </div>
  );
};

export default Carousel;
