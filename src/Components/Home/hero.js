import React from 'react'
import heroImg from './../../img/inicio/hero-bplant.jpg'
import logo from './../../img/logo/Mom.png'

function hero() {
  return (
    <div>
        <main>
        <div>
          <img src={heroImg} alt="Logo-compra" className="rounded-lg w-full object-cover"/>
        </div>
        
        <section className="mt-2">
          <div className="flex w-full flex-col sm:flex-row">

            <div className="p-4 border-4 border-black col-span-2 w-full sm:w-2/3 text-left">
              <h1 className='text-5xl font-bold inline-block mr-1'>LET´S ROOT THE WORLD</h1>
              <h2 className='text-6xl font-bold inline-block text-main-green'>green</h2>
              <h3 className='text-4xl'>EST.2023</h3>
                
                <ul class="nav-link my-4">
                    <li><a className='text-3xl font-bold hover:text-green-hover' href="#">SERVICIOS</a></li>
                    <li><a className='text-3xl font-bold hover:text-green-hover' href="#">COMUNIDAD</a></li>
                    <li><a className='text-3xl font-bold hover:text-green-hover' href="#">FUNDAMENTO</a></li>
                </ul>
            </div>

            <div className="p-4 border-4 border-black lg:border-l-0 w-full md:w-1/3">
              <div className='flex justify-center'>
                  <img src={logo} alt="" className='h-40 object-cover rounded-full hover:scale-110 transition-transform'/>
              </div>                    
              <h1 className='text-4xl inline-block m-2'>CONTRIBUYE</h1>
            </div>
          </div>            
        </section>
      </main>
    </div>
  )
}

export default hero