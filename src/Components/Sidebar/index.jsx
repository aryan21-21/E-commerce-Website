import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
function Sidebar() {
    const[value,setValue]=useState([100,60000])
    const[value2,setValue2]=useState(0);
  return (
    <>
        <div className="sidebar">
            <div className="category-list">
                <div className="filter-section">    
                    <h6 className='filter-title'>PRODUCT CATEGORIES</h6>
                    <div className="category-scroll"> {/* <-- Apply scroll to this div */}
                        <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Biscuits $Snacks" />
                        <FormControlLabel control={<Checkbox />} label="Frozen Food" />
                        <FormControlLabel control={<Checkbox />} label="Fruits" />
                        <FormControlLabel control={<Checkbox />} label="Vegetables" />
                        <FormControlLabel control={<Checkbox />} label="Bread" />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>

     
    </>
  )
}

export default Sidebar