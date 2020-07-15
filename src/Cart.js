import React, { useContext } from 'react'
import { CartContext } from "./Global/CartContext";
import { Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';
import StripeCheckout from 'react-stripe-checkout'
export const Cart = () => {
  const { shopingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  return (
    <>
      <div className='container-fluid '>
        <div className='row' >
          <div className='col-10 mx-auto cart-details' style={{ marginTop: 100 }}>
            {
              shopingCart.length > 0 ?
                shopingCart.map(cart => (
                  <div className='cart' key={cart.id} >
                    <span className='cart-image'><img src={cart.image} alt='not found' /></span>
                    <span className='cart-product-name'> {cart.name} </span>
                    <span className='cart-product-price'>${cart.price}.00</span>
                    <span className='inc' onClick={() => dispatch({ type: 'INC', id: 'cart.id', cart })}> <AddIcon /> </span>
                    <span className='product-quantity'>{cart.qty}</span>
                    <span className='dec' onClick={() => dispatch({ type: 'DEC', id: 'cart.id', cart })}> <MinimizeIcon /> </span>
                    <span className='product-total-price'>${cart.price * cart.qty}.00</span>
                    <span className='delete-product' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}> <DeleteIcon /> </span>
                  </div>
                ))
                : 'Sorry your cart is currently empty'
            }
          </div>
          {
            shopingCart.length > 0 ? <div className='cart-summary'>
              <div className='summary'>
                <h3>Cart Summary</h3>
                <div className='total-items'>
                  <div className='items'>Total Items </div>
                  <div className='items-count'>{qty}</div>
                </div>
                <div className ='total-price-section'>
                <div className='just-title'>Total Price</div>
                <div className ='items-price'>${totalPrice}.00 </div>
              </div>
              <div className ='stripe-section'>

              <StripeCheckout>
              
              </StripeCheckout>
                
              </div>
              </div>
            </div> : ''
          }
        </div>
      </div>

    </>
  )
}
