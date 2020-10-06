import React from 'react';
import './search-box.css'

const SearchBox = ({ searchChange }) => {
  return (
    
      <input
      className='search-box'
        type='search'
        placeholder='search by track name..'
        onChange={searchChange}
      />
      
  );
}

export default SearchBox;