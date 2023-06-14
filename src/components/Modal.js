import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Adjust the duration as needed
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
