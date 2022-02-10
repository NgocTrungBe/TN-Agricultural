import React from 'react';

function SearchBox() {
    return (
        <div className="searchbox">
            <form action="#">
            <input id="searchInput" className="search" placeholder="Tìm kiếm..."/>
             <button type="submit" className="search-btn">Tìm Kiếm</button>
            </form>
        </div>
    );
}

export default SearchBox;