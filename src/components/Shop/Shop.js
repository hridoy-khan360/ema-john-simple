import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

const [products,setProduct] = useState([]);

const [cart,setCart] = useState([]);

useEffect( () =>{


    const url = 'products.json';
 
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data)) 
    .catch((error) => console.log(error));

},[])


useEffect(()=>{

const storedCart = getStoredCart();

const savedCart = [];
for (const id in storedCart) {
const addedProduct = products.find(product => product.id === id)
if (addedProduct) {
const quantity = storedCart[id]
addedProduct.quantity = quantity
// console.log(addedProduct)
savedCart.push(addedProduct)
}
setCart(savedCart)
}

},[products])


const handleAddToCart = (selectedProduct) => {

    const exists = cart.find(product => product.id === selectedProduct.id);
    
    let newCart = [];
if (!exists) {
    selectedProduct.quantity = 1
    newCart = [...cart,selectedProduct];
}
else{
 const rest = cart.filter(product => product.id !== selectedProduct.id);
 exists.quantity = exists.quantity + 1
 newCart = [...rest,exists]

}


setCart(newCart)
addToDb(selectedProduct.id)
}


    return (
        <div className='shop-container mt-5'>

     <div className='product-container'>
{
products.map(product => <Product  
key={product.id} 
product={product} 
handleAddToCart={handleAddToCart}
>
</Product> )
}           
     </div>

<div className=' cart-container '>

    <Cart cart={cart}></Cart>

</div>

        </div>
    );
};


export default Shop;