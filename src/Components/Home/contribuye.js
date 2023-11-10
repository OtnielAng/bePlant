import React from 'react'
import logo from './../../img/logo/Mom.png'
import flor1 from './../../img/inicio/contribuye/flor1.jpg'
import flor2 from './../../img/inicio/contribuye/flor2.jpg'
import mapa from './../../img/inicio/contribuye/Mexico_Map.svg.png'

function Contribuye() {
  return (
    <div className='my-5 rounded-lg bg-green-009 p-5 flex'>
        <div className='border-4 border-black rounded-lg bg-white h-full'>
            <h3 className='text-2xl font-bold'>El jardín digital más grande del mundo</h3>
            <div className="flex flex-col sm:flex-row">
                <div className='p-4 w-full sm:w-1/2 items-center flex flex-col justify-center'>
                    <img src={logo} alt="Logo-compra" className="rounded-full w-35 object-cover"/>
                    <br/>
                    <div className='rounded-lg border-2 border-black bg-green-009 text-justify mx-10 my-2'>
                    <p className='m-10'>¡Hola! Soy B. <br/> Déjame contarte más de mi. Soy la líder de los Aniplants, somos una especie digital, que tiene como misión ayudar a los humanos a crear el jardín digital más grande del mundo. Seguro te preguntarás cómo. Mira el mapa de tu derecha, en el podrás identificar pequeñas luces; estás representan plantas que tienen un identificador, algo así como un acta de nacimiento.</p>
                </div> 
            </div>
            <div className='p-4 w-full sm:w-1/2'>
                <div className="flex flex-col sm:flex-row">
                    <div className='p-4 w-full items-center'>
                        <h3 className='text-2xl font-bold mb-2 py-1'>Paso a paso</h3>
                        <div className='bg-green-009 border-2 border-black rounded-lg p-5 text-left'>
                        <h4 className='text-xl font-bold mb-2'>Primero</h4>
                        <p>Adquiere una planta en nuestro Marketplace en donde se encuentran diferentes vivieros afiliados a B-Plant</p>
                    </div> 
                </div>
                <div className='p-4 sm: w-full items-center flex flex-col justify-center'>
                    <h3 className='text-xl font-bold mb-2 bg-gray-200 py-1 px-4 rounded-xl hover:scale-110 transition-transform cursor-pointer'>Marketplace</h3>

                    <div className="flex h-full">
                        <img src={flor1} alt="" className='w-1/2 h-full mr-2 object-cover rounded-lg hover:scale-110 transition-transform cursor-pointer' />
                        <img src={flor2} alt="" className='w-1/2 h-full mr-2 object-cover rounded-lg hover:scale-110 transition-transform cursor-pointer'/>
                    </div>                           
                </div>                                               
            </div>
                <div className='border-2 border-black rounded-lg'>
                    <img src={mapa} alt="" className='w-full h-1/3 p-10 object-cover rounded-lg'/>
                    </div> 
                </div>  
            </div>
        </div>        
    </div>

  )
}

export default Contribuye