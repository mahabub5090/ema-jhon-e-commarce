import React from 'react';
import './App.css';
import Header from './components/header/header';
import Shop from './components/shop/shop';
import Aside from './components/aside/aside'

function App ()
{
  return (
    <div>
    <Header></Header>
     <span className='div-2'> <Shop></Shop>
        <Aside></Aside></span></div>
  );
}

export default App;
