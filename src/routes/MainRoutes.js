import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../components/Detail/Detail';

function MainRoutes(props) {
    return (
        <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path="/Catalog" element={<Catalog/>}></Route>
             <Route path="/Detail" element={<Detail/>}></Route>
        </Routes>
    );
} 

export default MainRoutes;