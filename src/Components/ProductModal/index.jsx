import React, { useContext } from 'react';
import { MyContext } from '../../App'; // ✅ adjust path as needed
import Rating from '@mui/material/Rating';
import { MdZoomOutMap } from "react-icons/md"; // or any icon

function ProductCard() {
  const { setisOpenProductModel } = useContext(MyContext);

  return (
    <div className="product-card position-relative p-2 shadow-sm rounded bg-white">
      
      {/* Arrow icon to trigger modal */}
      <button
        onClick={() => setisOpenProductModel(true)}
        className="position-absolute top-0 end-0 m-2 btn btn-light p-1 rounded-circle"
      >
        <MdZoomOutMap size={20} />
      </button>

      {/* 20% tag */}
      <span className="position-absolute top-0 start-0 badge bg-primary m-2">20%</span>

      {/* Image */}
      <img
        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg"
        alt="product"
        className="img-fluid"
      />

      <h6 className="mt-2 mb-1">Blue Diamond Almonds Lightly Salted</h6>
      <p className="text-success mb-1">IN STOCK</p>

      <Rating value={4} readOnly size="small" />

      <div className="price mt-1">
        <span className="text-muted text-decoration-line-through me-2">$20.00</span>
        <span className="text-danger fw-bold">$16.00</span>
      </div>
    </div>
  );
}

export default ProductCard;
