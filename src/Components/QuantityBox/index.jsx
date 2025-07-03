import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FiMinus, FiPlus } from "react-icons/fi";

function QuantityBox() {

    const[inputVal,setinputVal]=useState(1);

    const minus=()=>{
      if(inputVal>1){
        setinputVal(inputVal-1);  
      }
    }
    const plus=()=>{
      setinputVal(inputVal+1);
    }
  return (
    <>
        <div className="quantityDrop d-flex align-items-center gap-2">
            <button className="qty-btn" onClick={minus}>
            <FiMinus />
            </button>
            <input type="text"  value={inputVal}/>
            <button className="qty-btn" onClick={plus}>
            <FiPlus />
            </button>
        </div>
    </>
  )
}

export default QuantityBox
