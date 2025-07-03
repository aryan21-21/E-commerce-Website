import React, { useContext } from 'react';
import { GoHeart } from 'react-icons/go';
import { Rating } from '@mui/material';
import NewProduct3Img from "../../../assets/Products/NewProducts/NewProduct3.jpeg";
import { MyContext } from '../../../App'; // ✅ Ensure this path is correct

function NewProduct3() {
  const { addToCart } = useContext(MyContext);

  const product = {
    id: 103,
    title: "Chobani Vanilla Greek Yogurt",
    price: 4.49,
    oldPrice: 5.49,
    image: NewProduct3Img
  };

  return (
    <div>
      <div className="productItem border rounded p-3 text-start">
        
        {/* Product Image */}
        <div className="imgWrapper mb-3 position-relative">
          <img src={product.image} alt="Product" className="w-100 img-fluid" />
          <span className="badge bg-primary position-absolute top-0 start-0 m-2">29%</span>
        </div>

        {/* Product Info */}
        <div className="info">
          <h6 className="fw-bold">{product.title}</h6>
          <span className="text-success d-block mb-2 small">IN STOCK</span>

          <div className="d-flex align-items-center">
            <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
            <span className="ms-1 small text-muted">1</span>
          </div>

          <div className="d-flex mt-2 align-items-center">
            <span className="oldPrice text-decoration-line-through text-muted">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="netPrice text-danger ms-2">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* ✅ Wishlist Button */}
          <button
            className="btn btn-outline-danger btn-sm mt-2 w-100"
            onClick={() => addToCart(product)}
            title="Add to Wishlist"
          >
            <GoHeart size={16} className="me-1" />
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProduct3;
