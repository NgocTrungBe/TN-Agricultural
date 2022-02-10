import React from 'react';
import HeaderTop from './HeaderTop';

import HeaderBottom from './HeaderBottom';
function Header(props) {
    return (
        <div className="header">
            <HeaderTop></HeaderTop>
            <HeaderBottom></HeaderBottom>
        </div>
    );
}

export default Header;