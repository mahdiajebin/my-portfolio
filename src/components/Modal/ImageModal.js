import React, { useState } from 'react';
import './ImageModal.css'; // Create this CSS file for styling

const ImageModal = ({ show, handleClose, title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <span className="close" onClick={handleClose}>&times;</span>
      <div className="modal-content">
        <div className="image-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
      <div className="modal-navigation">
        <a className="prev" onClick={showPreviousImage}>&#10094;</a>
        <a className="next" onClick={showNextImage}>&#10095;</a>
      </div>
    </div>
  );
};

export default ImageModal;
