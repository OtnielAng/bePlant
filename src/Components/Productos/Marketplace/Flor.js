import React from 'react'
import ProductoMarketplace from './ProductoMarketplace'
import InformacionFlor from './InformacionFlor'

function Flor() {
  return (
    <div class="bg-main-green rounded-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 m-4 gap-1">
      <div>
        <ProductoMarketplace/>
      </div>
      <div>
        <InformacionFlor/>
      </div>
        
    </div>
  )
}

export default Flor