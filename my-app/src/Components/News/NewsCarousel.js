import React, { useState, useEffect, useCallback } from 'react';

function NewsCarousel({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to handle the previous button click
  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Wrap the definition of handleNextClick in useCallback
  const handleNextClick = useCallback(() => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]); // Include 'images' in the dependency array

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [handleNextClick]); // Include 'handleNextClick' in the dependency array

  return (
    <div className="carousel" data-testid="image-carousel">
      <h2>News</h2>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === slideIndex ? 'active' : ''}`}
            data-testid={`carousel-slide-${index}`} // Add data-testid for individual slides
          >
            <img src={image} alt={`News ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-prev" onClick={handlePrevClick} data-testid="prev-button">
        Previous
      </button>
      <button className="carousel-next" onClick={handleNextClick} data-testid="next-button">
        Next
      </button>
      <hr />
    </div>
  );
}

export default NewsCarousel;
