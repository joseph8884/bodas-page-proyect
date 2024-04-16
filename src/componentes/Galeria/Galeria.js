import React, { useState } from 'react'; 

const Galeria = ({ images }) => { 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviusSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="titulo">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap" rel="stylesheet"></link>
      <h1>NUESTRA GALERIA</h1>
    </div>
    <div className="carrusel">
      <div className='img-left'>
        <img
          src={images[(currentImageIndex - 1 + images.length) % images.length]}
          alt={`Slide ${currentImageIndex}`}
          onClick={goToPreviusSlide}
        />
      </div>
      <div className='img-center'>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
      <div className='img-right'>
        <img
          src={images[(currentImageIndex + 1) % images.length]}
          alt={`Slide ${currentImageIndex}`}
          onClick={goToNextSlide}
        />
      </div>
    </div>
    </>
  );
};

export default Galeria;