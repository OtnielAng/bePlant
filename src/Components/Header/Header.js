import React, { useState } from 'react';
import PopupCompra from './../Productos/Marketplace/Elements/PupupCompra'
import Navlinks from './Navlinks'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   //Pop Up
   const [isPopupOpen, setPopupOpen] = useState(false);
   const openPopup = () => {
     setPopupOpen(true);
   };
 
   const closePopup = () => {
     setPopupOpen(false);
   };

  return (
    <header className="text-black">
      <div className="md:flex justify-between items-center bg-green-009 rounded-border-header border-b-8 border-white">
        <div className="text-2xl font-bold flex items-center md:w-1/2">
          <div className="pl-20 w-1/2">
             <h1 className='cursor-pointer text-2xl hover:text-green-hover hover:text-2xl hover:scale-110 transition-transform font-bold'>Be Plant</h1></div>
          <div className=" justify-end text-right pr-10 pt-2 w-1/2">
            <button className="md:hidden sm:w-1/2" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> )}
              </svg>
            </button>
          </div>
        </div>

        <nav className={`${ isOpen ? 'block' : 'hidden'} md:flex w-full md:w-2/3 mt-4 md:mt-2`}>
        
        <ul className='md:flex md:flex-row flex-col items-center sm:pr-8'>
          <li class="m-2 my-4 font-bold hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Servicios</a></li>
          <li class="m-2 my-4 font-bold hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Comunidad</a></li>
          <li class="m-2 my-4 font-bold hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-2 border-white px-2 py-1 rounded-sm">Fundamento</a></li>
          <li class="m-2 my-4 font-bold hover:text-green-hover hover:scale-110 transition-transform"><a href="#" class="border-white border-2 px-2 py-1 rounded-sm">Contribuye</a></li>
        </ul>

          <div class="div-icon-nav d-none d-md-block inline-block flex text-right justify-center w-full">
            <a onClick={openPopup}><button class="m-3"><svg class="h-8 w-8 text-black hover:text-green-hover hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button></a>
            <a href="#"><button class="m-3"><svg class="h-8 w-8 text-black hover:text-green-hover hover:scale-110 transition-transform" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 10 12 4 17 10" />  <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z" />  <circle cx="12" cy="15" r="2" /></svg></button></a>
            <PopupCompra isOpen={isPopupOpen} onClose={closePopup} sizeClass="w-3/4 md:w-1/2"/>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
