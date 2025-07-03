import React, { useContext } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { GoHeart } from 'react-icons/go';
import { Button, Rating } from '@mui/material';
import Pro2 from "../../../assets/Products/Pro2.jpeg";
import { MyContext } from '../../../App'; // ✅ Make sure this path is correct

function Product2() {
  const { setisOpenProductModel, addToCart } = useContext(MyContext);

  const product = {
    id: 2,
    title: "Werther’s Original Caramel Hard Candies",
    price: 14.47,
    oldPrice: 20.00,
    image: Pro2
  };

  return (
    <div>
      <div className="productItem border rounded position-relative p-3 text-start">
        {/* Product Image */}
        <div className="imgWrapper mb-3 position-relative">
          <img src={product.image} alt="Product"/>
          <span className="badge bg-primary position-absolute top-0 start-0 m-2">26%</span>

          {/* Bottom actions (optional on mobile) */}
          <div className="actions d-flex gap-2 mt-2 d-md-none">
            <Button size="small" onClick={() => setisOpenProductModel(true)}>
              <AiOutlineFullscreen />
            </Button>
            <Button size="small" onClick={() => addToCart(product)}>
              <GoHeart />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="info">
          <h6 className="fw-bold">{product.title}</h6>
          <span className="text-success d-block mb-2 small">IN STOCK</span>
          <div className="d-flex align-items-center">
            <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
            <span className="ms-1 small text-muted">15</span>
          </div>
          <div className="d-flex flex-column mt-2">
          <div className="d-flex align-items-center">
            <span className="oldPrice text-decoration-line-through text-muted">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="netPrice text-danger ms-2">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            className="btn btn-outline-danger btn-sm mt-2 wishlist-under-price"
            onClick={() => addToCart(product)}
          >
            <GoHeart size={16} className="me-1" />
            Add to Wishlist
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Product2;
