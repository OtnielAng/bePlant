import React, { useState } from 'react';

function BotonMeGusta() {
  const [meGusta, setMeGusta] = useState(false);

  const manejarClic = () => {
    setMeGusta(!meGusta);
    console.log("Me gusta")
  };

  return (
    <div>
      <svg
        className={`h-8 w-8 cursor-pointer transition-transform transform hover:scale-125 ${
          meGusta ? 'text-black fill-current' : 'text-current'
        }`}
        fill={meGusta ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={manejarClic}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
}

export default BotonMeGusta;
