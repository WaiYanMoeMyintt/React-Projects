import React from 'react'
import "./product.css";
import { products } from '../../constants/data';

const Product = () => {
    console.log(products);
  return (
 
       <div className='product-container flex justify-between px-6'>
              <div className='product flex justify-between'>
                  {
                    products.map(items=>(
                    <div className='product-handler' key={items.id}>
                        <h3 className='font-bold px-4 text-xl'>
                            {items.title}
                        </h3>

                        <p className='w-9/12 py-5 p-5 text-lg'>
                             {items.description}
                        </p>
                    </div>
                    ))
                  }
              </div>
       </div>
  )
}

export default Product