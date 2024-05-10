import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({searchObj, setSearchObj}) => {
  const handleSearch = (value) => {
    setSearchObj({...searchObj, search: value});
  };

  return (
    <Search
      placeholder="We serve taste"
      allowClear
      enterButton='Search'
      size="medium"
      onSearch={handleSearch}
      style={{marginLeft:'',padding:'2%', textAlign:'left'}}
    />
  );
};

export default SearchBar;

