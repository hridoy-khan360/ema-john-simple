
import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart} = props

   let total  = 0
   let shipping  = 0
   let quantity  = 0


   for(const product of cart){
    quantity = quantity + product.quantity
    total = total + product.price * product.quantity
    shipping = shipping + product.shipping
   }

   const tax = total * 0.1;

const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>

<h5>Order Summary</h5>
<p>Selected items : {quantity}</p>
<p>Total Price : ${total}</p>
<p>Total Shipping : ${shipping}</p>
<p>Tax : ${(tax).toFixed(2)}</p>
<p>Grand Total : ${(grandTotal.toFixed(2))}</p>
        
        </div>
    );
};

export default Cart;