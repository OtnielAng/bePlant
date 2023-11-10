import React from 'react'
import Educacion from './../../img/inicio/servicios/escuela.png'
import ArquitecturaS from './../../img/inicio/servicios/arq-paisajismo.png'
import MarketplaceHome from './../../img/inicio/servicios/marketplace.png'

function Servicios() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">

      <div className="p-8 items-center text-left p-12">
        <div className='p-2'>
            <img src={Educacion} alt="" className='rounded-lg w-full h-1/2 object-cover mb-5'/>
            <h3 className='text-3xl font-bold'>Educación</h3>
            <h4 className='text-3xl'>Proyectos</h4>
            <h5 className='text-lg'>Jardín de cactáceas Castillo de Chapultepec</h5> 
        </div>
                           
      </div>

      <div className="bg-green-009 p-8">
        <div className='bg-white p-4 rounded-lg text-left'>
            <img src={ArquitecturaS} alt="" className='rounded-lg mb-5'/>
            <h3 className='text-3xl font-bold'>Arquitectura y Paisajismo</h3>
            <h4 className='text-3xl'>B Plant AP</h4>
            <h5 className='text-lg'>Jardín de cactáceas Castillo de Chapultepec</h5>
        </div>        
      </div>

      <div className="bg-green-009 p-4">
        <div className='bg-white p-4 rounded-lg h-full'>
            <div className='bg-gray-300 p-4 rounded-lg border-2 border-black h-full flex flex-col items-center justify-center'>
                <h1 className='text-7xl font-extrabold text-white text-stroke-black'>LET´S ROOT THE WORLD</h1>
                <h1 className='text-7xl font-extrabold text-main-green text-stroke-black'>green</h1>
            </div>
        </div>

      </div>
      <div className="bg-white p-12">
        <div className='p-2 text-left'>
            <img src={MarketplaceHome} alt="" className='rounded-lg w-full h-1/2 object-cover mb-5'/>
            <h3 className='text-3xl font-bold'>Marketplace</h3>
            <h4 className='text-3xl'>Plantas</h4>
            <h5 className='text-lg'>Jardín de cactáceas Castillo de Chapultepec</h5> 
        </div>
      </div>
    </div>
  )
}

export default Servicios