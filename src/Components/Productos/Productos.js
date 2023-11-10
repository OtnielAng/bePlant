import React from 'react'
import BotonMeGusta from './../Productos/Marketplace/Elements/BotonMeGusta'

function Productos({ imagen, nombre, codigo, texto }) {


  return (
    <div className='text-left'>
        <img src={imagen} alt="" className='h-56 w-full rounded-lg object-cover'/>

        <div className='flex justify-between align items center mt-2 mr-2'>
            <h2 className='font-bold text-2xl mt-2 inline-block'>{nombre}</h2>
            <BotonMeGusta/>
        </div>        

        <h3 className='font-bold text-xl'>{codigo}</h3>
        

        <div class="flex">
          <div class="w-2/3">
            <h4 className='font-bold text-xl italic'>{texto}</h4>
          </div>
          <div class="w-1/3 flex justify-end">
            <a href="#"> <button className='bg-green-009 px-3 py-1 mr-2 rounded-xl font-bold hover:scale-110 transition-transform'> Ver mas</button></a>
          </div>            
        </div>


    </div>
  )
}

export default Productos