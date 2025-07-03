import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RangeSlider from 'react-range-slider-input';
import Checkbox from '@mui/material/Checkbox';
import 'react-range-slider-input/dist/style.css';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProduct1 from '../Home/NewProducts/NewProduct1';
import NewProduct2 from '../Home/NewProducts/NewProduct2';
import NewProduct3 from '../Home/NewProducts/NewProduct3';
import NewProduct4 from '../Home/NewProducts/NewProduct4';
import Product1 from '../Home/Products/Product1';
import Product2 from '../Home/Products/Product2';
import Product3 from '../Home/Products/Product3';
import Product4 from '../Home/Products/Product4';
import Product5 from '../Home/Products/Product5';
import Product6 from '../Home/Products/Product6';

function Listing() {
  const [priceRange, setPriceRange] = useState([0, 70]);

  return (
    <section className="product_listing py-4">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2">
            <div className="sidebar filterbox">
              <Sidebar />

              <div className="filter-section mt-1">
                <h6 className="filter-title">FILTER BY PRICE</h6>
                <RangeSlider
                  min={0}
                  max={70}
                  step={1}
                  value={priceRange}
                  onInput={setPriceRange}
                  className="custom-slider"
                />
                <div className="price-footer mt-2">
                  <b>Price:</b>{' '}
                  <strong className="text-dark">${priceRange[0]}</strong> —{' '}
                  <strong className="text-dark">${priceRange[1]}</strong>
                </div>
              </div>

              <div className="filter-section mt-4">
                <h6 className="filter-title">PRODUCT CATEGORIES</h6>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="In Stock" />
                  <FormControlLabel control={<Checkbox />} label="On Sale" />
                </FormGroup>
              </div>

              <Link to="#">
                <img
                  className="w-100 mt-1"
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
                  alt="Sidebar Banner"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-md-10">
            <div className="content_right">
              <h4 className="mb-3">All Products</h4>
              <div className="row row-cols-1 row-cols-md-3 g-1">
                <div className="col"><NewProduct1 /></div>

                <div className="col"><NewProduct3 /></div>
                <div className="col"><NewProduct4 /></div>
                <div className="col"><Product1 /></div>
                <div className="col"><Product2 /></div>
                <div className="col"><Product3 /></div>
                <div className="col"><Product4 /></div>
                <div className="col"><Product5 /></div>
                <div className="col"><Product6 /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
