
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,price,ratings} = props.product;
const {handleAddToCart} = props;

    return (
        <div className='products'>

        <img src={img} alt="" srcset="" />

<div className='products-info'>

<h3 className='products-name'>{name}</h3>
<h5>Price : ${price}</h5>
<p>Seller : <small>{seller}</small></p>
<p>Ratings : <small>{ratings}</small></p>

</div>

<button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart
<FontAwesomeIcon className='ms-2' icon={faShoppingCart}></FontAwesomeIcon>
</button>
        </div>
    );
};

export default Product;