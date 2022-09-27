
import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart} = props

    return (
        <div className='cart'>

<h5>Order Summary</h5>
<p>Selected items : {cart.length}</p>
<p>Total Price : {}</p>
<p>Tax : {}</p>
<p>Grand Total : {}</p>
        
        </div>
    );
};

export default Cart;