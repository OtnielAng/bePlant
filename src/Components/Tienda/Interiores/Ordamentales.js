import React from 'react'
import Productos from '../../Productos/Productos'
import imgFlor1 from './../../../img/Productos/imgFlor1.jpg'
import imgFlor2 from './../../../img/Productos/imgFlor2.jpg'
import imgFlor3 from './../../../img/Productos/imgFlor3.jpeg'
import imgFlor4 from './../../../img/Productos/imgFlor4.jpeg'

function Ordamentales() {

    const flor1 = {
        imagen: imgFlor1,
        nombre: 'Producto 1',
        codigo: 'ABC123',
        texto: 'Descripción del Producto 1',
    };
    const flor2 = {
        imagen: imgFlor2,
        nombre: 'Producto 2',
        codigo: 'ABC123',
        texto: 'Descripción del Producto 2',        
    };
    const flor3 = {
        imagen: imgFlor3,
        nombre: 'Producto 3',
        codigo: 'ABC123',
        texto: 'Descripción del Producto 3',
    };
    const flor4 = {
        imagen: imgFlor4,
        nombre: 'Producto 4',
        codigo: 'ABC123',
        texto: 'Descripción del Producto 4',        
    };

    return (
    <div className=' rounded-lg p-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {/* Contenido de la primera fila y columna */}
            <div className='bg-white rounded-lg p-4'>
                <Productos {...flor1}/>
            </div>

            {/* Contenido de la primera fila y columna */}
            <div className="bg-white rounded-lg p-4">
                <Productos {...flor2}/>
            </div>

            {/* Contenido de la segunda fila y columna */}
            <div className="bg-white rounded-lg p-4">
                <Productos {...flor3}/>
            </div>

            {/* Contenido de la segunda fila y columna */}
            <div className="bg-white rounded-lg p-4">
                <Productos {...flor4}/>
            </div>

        </div>

    </div>
  )
}

export default Ordamentales