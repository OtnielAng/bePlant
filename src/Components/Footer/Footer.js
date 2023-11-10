import React from 'react'
import logo from './../../img/logo/Mom.png'
import Fundamento from './../Home/Fundamento'

function Footer() {
  return (
    <div className="flex flex-wrap bg-green-009 m-10 py-1 px-10 rounded-lg">
      {/* Columna 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-left">
        <h5 >San Felipe 7904, CDMX, 16870</h5>
        <h5 >+52 55 41415756</h5>
        <h5 >info@beplant.mx</h5>   
        <h5 className='font-bold mt-3'>2023 Be Plant by SkillOut</h5>     
      </div>
      
      {/* Columna 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <h5 className='font-bold text-xl'>Online Store</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Plantas</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Decoración</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Linea de ropa</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Empresas</h5>
      </div>
      
      {/* Columna 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <h5 className='font-bold text-xl'>Servicios</h5>   
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Arquitectura</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Paisajismo</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Jardinera</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Educación</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Innovación</h5>
      </div>
      
      {/* Columna 4 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <h5 className='font-bold text-xl'>Be Plant</h5>   
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Fundamento</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Comunidad</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Blog</h5>
        <h5 className='text-md hover:text-green-hover cursor-pointer'>Observatorio Social</h5>        
      </div>
      
      {/* Columna 5 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 ">
        <h5 className='font-bold text-md'>El jardín más grande del mundo</h5>
        <div className='flex justify-center'>
                  <img src={logo} alt="" className='h-20 object-cover rounded-full hover:scale-110 transition-transform'/>
              </div>
        <h5 className='font-bold text-md'>Contribuye</h5>   
      </div>
    </div>
  )
}

export default Footer