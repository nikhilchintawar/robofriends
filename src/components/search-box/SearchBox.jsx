import React from 'react';
import "./search-box.css";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="search-box">
            <input 
            type="search" 
            placeholder="Search Robots"
            value={searchField} 
            onChange={searchChange}  
            className="search" 
            />
        </div>    
    );
}

export default SearchBox;