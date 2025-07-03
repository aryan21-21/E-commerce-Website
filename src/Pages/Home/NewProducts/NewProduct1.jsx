import React, { useContext } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { GoHeart } from 'react-icons/go';
import { Button, Rating } from '@mui/material';
import NewProduct1Img from "../../../assets/Products/NewProducts/NewProduct1.jpeg";
import { MyContext } from '../../../App'; // ✅ Ensure path is correct

function NewProduct1() {
  const { setisOpenProductModel, addToCart } = useContext(MyContext);

  const product = {
    id: 101,
    title: "Fresh Organic Broccoli Crowns",
    price: 4.85,
    oldPrice: 6.77,
    image: NewProduct1Img
  };

  return (
    <div>
      <div className="productItem border rounded position-relative p-3 text-start">


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
            <Rating name="read-only" value={4} readOnly size="small" precision={0.5} />
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

export default NewProduct1;
