import React from 'react'
import Button from "@mui/material/Button";
function SearchBox() {
  return (
    <div className="headerSearch ml-3">
        <input type="text" placeholder='Serach For Product'/>
        <button><IoSearch/></button>
    </div>
  )
}

export default SearchBox
