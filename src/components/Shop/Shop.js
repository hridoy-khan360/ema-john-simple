import React, { useEffect, useState } from 'react';
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

const handleAddToCart = (product) => {
const newCart = [...cart,product];
console.log(newCart)
setCart(newCart)
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