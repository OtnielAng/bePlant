import React from 'react'
import fundlibro from './../../img/inicio/fundamento/mision-vision.PNG'
import fundblng from './../../img/inicio/fundamento/2.png'

function Fundamento() {
  return (
    <div className='my-5'>
        
        <div className="flex w-full flex-col sm:flex-row">
            <div className='p-4 w-1/2 h-20 bg-green-009 sm: w-full'/>
            <div className='p-4 w-1/2 h-20 bg-white-300 sm: w-full'/>    
        </div>

        <div className="flex w-full flex-col sm:flex-row">
            <div className='p-4 w-1/2 bg-white-009 sm: w-full'>
                <div className='p-10 m-10 border-2 border-black'>
                    <img src={fundlibro} alt="" className='w-full rounded-lg border-8 border-green-main p-4'/>
                    <p className='text-justify mt-4 p-4'>
                    La cultura ambiental se refiere a las actitudes, creencias, valores y comportamientos colectivos de una sociedad o comunidad hacia el medio ambiente natural. Abarca una comprensión de la interconexión de todos los seres vivos y ecosistemas, así como el reconocimiento de la importancia de las prácticas sostenibles para proteger y preservar el medio ambiente para las generaciones presentes y futuras. Una cultura ambiental alienta a las personas a adoptar comportamientos ecológicos, tomar decisiones conscientes sobre el consumo de recursos y promover el bienestar del planeta.
                    </p>
                </div>                
            </div>

            <div className='p-4 w-1/2 sm: w-full bg-green-009'>
                <div className='w-full h-full py-10'>
                    <div className='bg-fundblng  bg-cover bg-center w-full h-full text-right p-10 flex flex-col justify-between font-bold text-4xl text-white' style={{ backgroundImage: `url(${fundblng})` }}>
                        <h4 className='hover:text-green-hover hover:scale-110 transition-transform cursor-pointer '>EDUCACIÓN AMBIENTAL</h4>
                        <h4 className='hover:text-green-hover hover:scale-110 transition-transform cursor-pointer '>TRANSICION SOSTENIBLE</h4>
                        <h4 className='hover:text-green-hover hover:scale-110 transition-transform cursor-pointer '>DESARROLLO</h4>
                        <h4 className='hover:text-green-hover hover:scale-110 transition-transform cursor-pointer '>MISIÓN</h4>
                        <h4 className='hover:text-green-hover hover:scale-110 transition-transform cursor-pointer '>VISIÓN</h4>                   
                    </div>
                </div>                
            </div>                           
        </div>

        <div className="flex w-full flex-col sm:flex-row">
            <div className='p-4 w-1/2 h-20 bg-green-009 sm: w-full'/>
            <div className='p-4 w-1/2 h-20 bg-white-300 sm: w-full'/>    
        </div>

    </div>
    
  )
}

export default Fundamento