import React, { useState } from 'react'

function MenuDespegable() {
    const items = [
        {
          id: 1,
          text: 'Elemento 1',
          subitems: ['Subelemento 1A', 'Subelemento 1B', 'Subelemento 1C'],
        },
        {
          id: 2,
          text: 'Elemento 2',
          subitems: ['Subelemento 2A', 'Subelemento 2B'],
        },
        {
          id: 3,
          text: 'Elemento 3',
          subitems: ['Subelemento 3A', 'Subelemento 3B', 'Subelemento 3C', 'Subelemento 3D'],
        },
      ];
    
      const [selectedItem, setSelectedItem] = useState(null);
      const [selectedSubitem, setSelectedSubitem] = useState(null);
    
      const handleItemClick = (itemId) => {
        setSelectedItem(itemId);
        setSelectedSubitem(null); // Resetea el subelemento seleccionado al hacer clic en un elemento principal.
      };
    
      const handleSubitemClick = (itemIndex, subitemIndex) => {
        setSelectedItem(itemIndex);
        setSelectedSubitem(subitemIndex);
      };

  return (
    <div>
       <ul>
        {items.map((item, itemIndex) => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(itemIndex)}
              className={`text-2xl ${selectedItem === itemIndex ? 'text-green-500' : 'text-gray-500'}`}
            >
              {item.text}
            </button>
            {selectedItem === itemIndex && (
              <ul>
                {item.subitems.map((subitem, subitemIndex) => (
                  <li
                    key={subitemIndex}
                    onClick={() => handleSubitemClick(itemIndex, subitemIndex)}
                    className={`text-lg ${selectedSubitem === subitemIndex ? 'text-blue-500' : ''}`}
                  >
                    {subitem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {selectedSubitem !== null && (
        <div className="content">
          <h3>Contenido para el subelemento seleccionado:</h3>
          <p>Contenido específico para {items[selectedItem].subitems[selectedSubitem]}</p>
        </div>
      )}
    </div>
  );
}

export default MenuDespegable