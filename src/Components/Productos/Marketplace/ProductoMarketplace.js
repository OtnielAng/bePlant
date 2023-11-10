import React, {useState} from 'react'
import florProducto from '../../../img/marketplace-img/orquideas-Cymbidium.jpg'
import florVideo from '../../../img/video-producto/p1.MOV'; 
import logoOso from '../../../img/logo/Mom.png'
import PopupCompra from '../../Productos/Marketplace/Elements/PupupCompra';

function ProductoFlor() {

  //Pop Up
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  
 
  return (
    <div class="m-2">
      <img src={florProducto} alt="Producto" class="border-4 border-white rounded-lg w-full h-80 object-cover"/>     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-8">
        <div className="px-4">
          <h1 className="text-2xl font-extrabold">Orquidea 🖤</h1>
          <h2 className="text-xl font-extrabold">17-9800</h2>
          <h2 className="text-xl font-extrabold">Cymbidium</h2>

          <div className="flex items-center">
            <h3 className="text-lg inline pr-2 text-gray-500 font-bold line-through">$299</h3>
            <h4 className="text-lg inline font-bold ">$249 + envío</h4>
          </div>
        </div>

        <a onClick={openPopup}>
          <div className="px-4 hover:text-green-hover hover:text-2xl hover:scale-110 cursor-pointer flex flex-col items-center justify-center text-center">
            <img src={logoOso} alt="Logo-compra" className="rounded-full w-24 h-24 object-cover" />
            <h1 className="text-2xl font-extrabold">Comprar</h1>
          </div>
        </a>
        <PopupCompra isOpen={isPopupOpen} onClose={closePopup} sizeClass="w-3/4 md:w-1/2"/>
        

          <div className="px-4">
            <video autoPlay loop muted className="w-full h-40 object-cover border-4 border-white rounded-lg">
              <source src={florVideo} type="video/mp4" />
              Tu navegador no admite la reproducción de video.
            </video>
          </div>       

      </div>      
    </div>
  )
}

export default ProductoFlor