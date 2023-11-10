import React from 'react'

function InformacionFlor() {
  return (
    <div className='rounded-lg bg-white m-2 py-5 px-5'>
        <div className='border-4 border-green py-6 px-8 rounded-lg'>
            <div className='flex items-center'>
                <h1 className='font-bold'>Nombre científico:</h1>
                <p className='ml-auto'>Allamanda cathartica</p>
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Familia botánica:</h1>
                <p className='ml-auto'>Apocynaceae</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Origen:</h1>
                <p className='ml-auto'>Sudamérica y Centroamérica</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Clasificación:</h1>
                <p className='ml-auto'>emileñosa perenne</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Tipo de planta:</h1>
                <p className='ml-auto'>Arbusto</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Clima:</h1>
                <p className='ml-auto'>Semicálido y Tropical</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Floración:</h1>
                <p className='ml-auto'>Todo el año</p>                        
            </div>
            <div className='flex inline-block'>
                <h1 className='font-bold '>Uso:</h1>
                <p className='ml-auto'>Trepadora, Macizos, Setos</p>    
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 m-5 gap-4">

            <div className="flex justify-center"> 
                <svg class="h-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>                        
            </div>
            <div className='font-bold'>Exposición</div>
            <div className=''>Sol</div>

            <div className="flex justify-center"> 
              <svg class="h-8 text-black" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.71,7.38,16.62,2.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L17,5.54,11.58,11l-1-1h0a3,3,0,0,0-4.25,0L2.88,13.42A3,3,0,0,0,2,15.55V19a3,3,0,0,0,3,3H8.45a3,3,0,0,0,2.13-.88L14,17.69a3,3,0,0,0,0-4.25l-1-1L18.46,7l1.83,1.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,7.38ZM12.6,16.27,9.16,19.71a1,1,0,0,1-.71.29H5a1,1,0,0,1-1-1V15.55a1,1,0,0,1,.29-.71L7.73,11.4a1,1,0,0,1,1.41,0l1,1-.89.9a1,1,0,0,0,0,1.41A1,1,0,0,0,10,15a1,1,0,0,0,.7-.29l.9-.89,1,1A1,1,0,0,1,12.6,16.27Z"/></svg>
            </div>
            <div className='font-bold'>Sustrato</div>
            <div className='flex-grow'>Sustrato general JDM (Peat moss+ Fibra de coco+ Tepojal)</div>

            <div className="flex justify-center"> 
              <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" /></svg>
            </div>
            <div className="font-bold">Riego</div>
            <div className="">Riego ligero diario en épocas de calor excesivo y dos veces a la semana en otoño-invierno</div>

            <div className="flex justify-center"> 
              <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />  <polyline points="12 8 7 3 3 7 8 12" />  <line x1="7" y1="8" x2="5.5" y2="9.5" />  <polyline points="16 12 21 17 17 21 12 16" />  <line x1="16" y1="17" x2="14.5" y2="18.5" /></svg>
            </div>
            <div className="font-bold">Nutrición</div>
            <div className="">Usar abonos y/o Triple 20 soluble a razón de 2g/L de agua cada semana o Triple 16 granulado 1g por planta cada mes</div>

            <div className="flex justify-center">
              <svg class="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0H24V24H0z"/> <path d="M6 2c2.69 0 5.024 1.517 6.197 3.741C13.374 4.083 15.31 3 17.5 3H21v2.5c0 3.59-2.91 6.5-6.5 6.5H13v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-2H9c-3.866 0-7-3.134-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5C15.015 5 13 7.015 13 9.5v.5h1.5c2.485 0 4.5-2.015 4.5-4.5V5zM6 4H4c0 2.761 2.239 5 5 5h2c0-2.761-2.239-5-5-5z"/> </g> </svg>
            </div>
            <div className="font-bold">Mantenimiento</div>
            <div className="">Eliminar hojas y flores secas <br/> Podar para favorecer más ramas, hojas y flores</div>
        </div>
        
    </div>
   
  )
}

export default InformacionFlor