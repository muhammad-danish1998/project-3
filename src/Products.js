import React from 'react';
import { ProductContext } from "./Global/ProductsContext";
import { useContext } from 'react';
export const Products = () => {
    const {products} = useContext(ProductContext);
    
    return (
 
        <div className='products'>

        {products.map((product)=>(
            <div className='product' key ={product.id}>
            <div className='product-img'>
                <img src ={product.image} alt='not found' width={200} />
            </div>
            </div>
        ))}
            
        </div>
   
    )
}
