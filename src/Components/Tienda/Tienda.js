import React, { useState } from 'react'
import Contribuye from '../Home/contribuye';
import Productos from '../Productos/Productos';
import Ordamentales from './Interiores/Ordamentales';

function Tienda() {

  const items = [
    {
      id: 1,
      text: 'Plantas',
      subitems: ['Decoración', 'Línea de Ropa'],
    },
    {
      id: 2,
      text: 'Interiores',
      subitems: ['Ordamentales', 'De Temporada', 'Exóticas'],
    },
    {
      id: 3,
      text: 'Exteriores',
      subitems: ['Ordamentales (ext)', 'Corte alto', 'Cactáceas', 'Suculentas', 'Pastos', 'Acuáticas'],
    },
    {
      id: 4,
      text: 'Insumos',
      subitems: ['Fertilizantes', 'Sustratos'],
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
    <div className="flex flex-wrap ">
      {/* Columna 1 */}
      <div className="w-full xs:w-full sm:w-full md:w-full lg:w-1/5 xl:w-1/5 p-4 border-2 border-black text-left rounded-lg mb-8">
      <ul>
        {items.map((item, itemIndex) => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(itemIndex)}
              className={`text-2xl ${selectedItem === itemIndex ? 'text-green-hover text-4xl font-bold' : 'text-gray-500 font-normal'}`}
            >
              {item.text}
            </button>
            {selectedItem === itemIndex && (
              <ul   className='bg-main-green p-4 rounded-xl'>
                {item.subitems.map((subitem, subitemIndex) => (
                  <li
                    key={subitemIndex}
                    onClick={() => handleSubitemClick(itemIndex, subitemIndex)}
                    className={`text-lg  cursor-pointer ${selectedSubitem === subitemIndex ? 'text-green-hover' : ''}`}
                  >
                    {subitem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>    

      
    {/* Columna 2 */}
    <div className="w-full xs:w-full sm:w-full md:w-full lg:w-4/5 xl:w-4/5 px-2 rounded-lg">
      {selectedSubitem === null && (
        <Contribuye/>
      )}
      {selectedSubitem !== null && (
        <div className="content  bg-green-009 rounded-lg">          
          {selectedItem !== null && (
            <div>
              {items[selectedItem].subitems[selectedSubitem] === 'Decoración' && (  
                <>                  
                  <Contribuye className="hidden"/>  
                </>                              
              )}
              {items[selectedItem].subitems[selectedSubitem] === 'Línea de Ropa' && (
                <>                  
                  <p>chbkWFBBWfñkhbcdwbd</p>
                </>                
              )}
              {items[selectedItem].subitems[selectedSubitem] === 'Ordamentales' && (
                <>                  
                  <Ordamentales/>
                </>                
              )}
              {/* Agrega más casos para otros subelementos según sea necesario */}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
        
  )
}


export default Tienda
