import React from 'react';
import logo from '../../images/favicon.ico';
import './header.css';

const Header = () => {

return (
<nav className='header-nav'>
    <div><img src={logo} alt='' /></div>
    <div>
        <a href='/shop'>shop</a>
        <a href='/order'>Order</a>
        <a href='inventory'>Inventory</a>
        <a href='about'>About</a> 
    </div>
</nav>
);
}

export default Header;