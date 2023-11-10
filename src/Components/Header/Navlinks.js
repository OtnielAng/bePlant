import React, {useState} from 'react'
import PopupCompra from './../Productos/Marketplace/Elements/PupupCompra'

function Navlinks() {

   //Pop Up
   const [isPopupOpen, setPopupOpen] = useState(false);
   const openPopup = () => {
     setPopupOpen(true);
   };
 
   const closePopup = () => {
     setPopupOpen(false);
   };

  return (
    <div className='flex items-center rounded-border-header font-bold flex justify-between py-5 px-20 sticky top-0 z{-20} '>

      <nav >
            <ul>
                <li class="inline-block m-2 hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Servicios</a></li>
                <li class="inline-block m-2 hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Comunidad</a></li>
                <li class="inline-block m-2 hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Fundamento</a></li>
                <li class="inline-block m-2 hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-white border-2 px-2 py-1 rounded-sm">Contribuye</a></li>
            </ul>
        </nav>

        <div class="div-icon-nav d-none d-md-block">
            <a onClick={openPopup}><button class="m-3"><svg class="h-8 w-8 text-black hover:text-green-hover hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button></a>
            <a href="#"><button class="m-3"><svg class="h-8 w-8 text-black hover:text-green-hover hover:scale-110 transition-transform" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 10 12 4 17 10" />  <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z" />  <circle cx="12" cy="15" r="2" /></svg></button></a>
            <PopupCompra isOpen={isPopupOpen} onClose={closePopup} sizeClass="w-3/4 md:w-1/2"/>
        </div>

    </div>
  )
}

export default Navlinks