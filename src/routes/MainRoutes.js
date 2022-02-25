import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';


function MainRoutes(props) {
    return (
        <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path="/Catalog" element={<Catalog/>}></Route>
             <Route path="/Catalog/:slug" element={<Product/>}></Route>
          
        </Routes>
    );
} 

export default MainRoutes;