import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          {item}
        </div>
      ))}
      <button onClick={goPrev} className="absolute right-0">Anterior</button>
      <button onClick={goNext} className="absolute left-0">Siguiente</button>
    </div>
  );
};

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'].map((item) => (
    <div className="flex items-center justify-center w-full h-64 bg-gray-200">
      {item}
    </div>
  ));

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
      <Carousel items={items} />
    </div>
  );
};

export default App;
