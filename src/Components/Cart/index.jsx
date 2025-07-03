import React, { useContext } from 'react';
import { MyContext } from '../../App';
import EmptyCart from "../../assets/Cart/EmptyCart.png"; // Replace with actual path or placeholder
import { Link } from 'react-router-dom';
function Cart() {
  const { cart } = useContext(MyContext);

  const isCartEmpty = !Array.isArray(cart) || cart.length === 0;

  return (
    <div className="container text-center mt-5">
      <h4 className="text-start">🛒 Cart Items</h4>

      {isCartEmpty ? (
        <div className="empty-cart mt-5">
          <img
            src={EmptyCart}
            alt="Empty Cart"
            style={{ width: '150px', marginBottom: '20px' }}
          />
          <h5 className="text-danger fw-bold mb-4">YOUR CART IS CURRENTLY EMPTY.</h5>
          <a href="/" className="btn btn-primary px-4 py-2 rounded-pill">
            Return to shop
          </a>
        </div>
      ) : (
        <div className="mt-4">
          {cart.map((item, index) => (
            <div
              key={item.id || index}
              className="d-flex align-items-center border p-2 mb-3 rounded shadow-sm justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: 60,
                    width: 60,
                    objectFit: 'contain',
                    marginRight: 16,
                  }}
                />
                <div className="text-start">
                  <h6 className="mb-1">{item.title}</h6>
                  <small className="text-muted">${item.price.toFixed(2)}</small>
                </div>
              </div>
              <Link to="/Buy">
                <button
                  className="btn btn-success"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </Link>
               
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
