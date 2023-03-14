import React from "react";
import './Search-box.css';


 export const SearchBox = ({ placeholder, handleChange }) => (
  <input
  className="searchbox"
  type='search' 
  placeholder={placeholder} 
  onChange={handleChange}
  />
);