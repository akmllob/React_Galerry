// SilaComponent.jsx
import React from 'react';

const SilaComponent = ({ nama, gambar, teks }) => {
  return (
    <div className="sila-container">
      <div className="gambar-sila">
        <img src={gambar} alt={`Sila ${nama}`} />
      </div>
      <div className="teks-sila">
        <h3>{`Sila ${nama}`}</h3>
        <p>{teks}</p>
      </div>
    </div>
  );
};

export default SilaComponent;
