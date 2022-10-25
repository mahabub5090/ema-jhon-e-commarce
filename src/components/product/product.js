import React from 'react';
import './product.css';

const Product = ( props ) =>
{
    const { name, img, price, seller, ratingsCount
        , category } =  props.product;
   
    
    return (
        <div>
            <img className='product-img' src={ img } alt="" ></img>
            <h1> his name is : {name}</h1>
        </div>
    );
};

export default Product;