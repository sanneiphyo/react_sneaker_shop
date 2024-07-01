import React from 'react'
import product1 from "../assets/images/product-1.jpg"

const Quantity = () => {
  return (
    <div className='w-full h-52 '>
        <div className='flex '>
            <img src={product1} className='w-20 rounded-lg ' />
            <p className='ml-3 '>50% dis <span className='text-orange-500 font-bold'>x </span></p>
              <p></p>  
        </div>
    </div>
  )
}

export default Quantity