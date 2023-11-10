import React, {useState} from 'react'
import PopupContent from './PopupContent';


const Popup = ({ isOpen, onClose, children }) => {
    return (
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-2/3 md:w-1/2 lg:w-2/3 xl:w-2/5 rounded shadow-lg z-50 overflow-y-auto border-4 border-green m-12">
          <div className="modal-content text-left px-8  my-3">
            {/* Botón para cerrar el popup */}
            <div className="flex justify-end items-center">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg class="h-8 w-8 text-green"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
              </button>
            </div>
            {/* Contenido del popup */}

            <PopupContent/>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;