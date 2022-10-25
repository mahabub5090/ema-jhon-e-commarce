import React, { useEffect, useState } from 'react';
import Product from './../product/product';
import './shop.css';



const Shop = () =>
{
    const [ shopData, setData ] = useState( [] )

    useEffect( () =>
    {
        fetch( "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json" )
            .then( res => res.json() )
            .then( data => setData( data ) );
    }, [] );

    return (
        <div className='shop-container' >{
                shopData.map( onedata => <Product key={ onedata.id } product={ onedata } ></Product> )
            }</div> )
        ;
};

export default Shop;