import React, {useState} from 'react';
import logoOso from '../../../../img/logo/Mom.png'

const PopupContent = ({ onClose }) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="modal-content text-left">
        <div class="flex">
            <div class="w-1/2 mx-1 text-center">
                <h1 className='text-2xl'>Be Plant</h1>
                <h2 className='text-xl font-bold inline'>LET´S ROOT THE <br/> WORLD </h2>
                <h2 className='text-xl font-bold text-green-400 inline'>green</h2>
                
                <div className="flex flex-col gap-6 my-4">
                  <input type="text" placeholder="correo" className="border border-gray-300 rounded p-2"/>
                  <input type="text" placeholder="contraseña" className="border border-gray-300 rounded p-2"/>
                </div>

                <a href="../../Compra/CompraProducto.js" className='hover:text-green-hover' >Iniciar sesión</a> <br/>
                <a href="" className='hover:text-green-hover' >Nuevo usuario</a>  
                
                <br/>

            </div>

            <div class="w-1/2 mx-1 text-center items-center justify-center text-center space-y-4">

              <div className="px-4 flex flex-col items-center justify-center text-center">
                <img src={logoOso} alt="Logo-compra" className="rounded-full w-4/5 object-cover"/>
              </div>                            
              <h1 className='font-bold'>Contribuye</h1>
              <h2 className='font-bold'>Con tu compra en la construcción del jardín digital más grande del mundo</h2>
              <br/>
              
            </div>
        </div>
    
    </div>
  );
};

export default PopupContent;
