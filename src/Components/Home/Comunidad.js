import React from 'react'
import Comunidad1 from './../../img/inicio/comunidad/pollen.jpg'
import Comunidad2 from './../../img/inicio/comunidad/Dialogo.png'

function Comunidad() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 p-4 m-10 rounded-lg">
        <div className='bg-green-009 rounded-lg p-8'>
            <h3 className='text-center text-4xl font-bold mb-4'>¡Es tiempo de actuar!</h3>
            <p className='text-left'>En Be Plant buscamos integrar una comunidad proactiva que fomente y fortalezca la cultura ambiental en México. Si tú quieres formar parte de ésta comunidad, ¡conviértete en un AVE P.Olinizadora! Un Agente Vinculatorio Ecológico es una persona que a través del programa P.Olinizador de WasCo, Be Plant & Pollen, busca fomentar la concientización sobre el proceso de polinización y cómo ayudar a que suceda. 
              <br/> Afíliate ya y construye el panal P.Olinizafor más grande en el jardín digital más grande del mundo!</p>
        </div>   
        
        <div className='bg-green-009 rounded-lg p-8 my-5'>
            <img src={Comunidad1} alt="" className='rounded-lg'/>
        </div> 

      </div>

        <div className="w-1/2 p-4 my-10 mx-20 ">
            <div className='bg-green-009 rounded-lg p-4 h-2/3'>
                <div className='bg-white rounded-lg p-4 h-full'>
                    <img src={Comunidad2} alt="" className='rounded-lg object-cover h-full w-full'/>
                </div> 
            </div>

            <div className='bg-green-009 my-5 p-7 rounded-lg border-2 border-black'>
              <h3 className='text-2xl font-bold'>Observatorio Social</h3>
              <p className='text-justify mt-2'>Forma parte de organizaciones, movimientos o incluso inicia el tuyo. Aprende, comprende, identifica, vigila y ejecuta acciones que beneficien tu entorno.</p>
              <button className='lg:relative lg:absolute lg:top-12 left-52 bg-gray-300 py-2 px-5 rounded-full border-2 border-black hover:scale-110 transition-transform cursor-pointer hover:bg-green-009' >Unirme</button>
            </div>
                  
        </div>
    </div>
  )
}

export default Comunidad