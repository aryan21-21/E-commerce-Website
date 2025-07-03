import React, { useState, useContext } from 'react';
import { MyContext } from '../../App';
import '../Buy/App.css';

function CheckoutPage() {
  const { cart, clearCart } = useContext(MyContext);
  const [showValidationError, setShowValidationError] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'US',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'bank',
    agreedToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'firstName', 'lastName', 'country', 'street', 
      'city', 'state', 'zip', 'phone', 'email'
    ];
    
    return requiredFields.every(field => {
      if (field === 'email') {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field]);
      }
      return formData[field] && formData[field].trim() !== '';
    }) && formData.agreedToTerms;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setShowValidationError(true);
      return;
    }

    setShowValidationError(false);
    setOrderPlaced(true);
    clearCart();
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thank you for your purchase. We've sent a confirmation to {formData.email}.</p>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cart.map((item, idx) => (
              <div className="order-item" key={idx}>
                <span>{item.title} × {item.quantity || 1}</span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="order-total-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="billing-section">
        <h1>Billing Details</h1>
        {showValidationError && (
          <div className="validation-error">
            Please fill in all required fields and agree to the terms.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <input 
                name="firstName" 
                placeholder="First name *" 
                required 
                value={formData.firstName}
                onChange={handleChange} 
                className={showValidationError && !formData.firstName ? 'error' : ''}
              />
            </div>
            <div className="form-group">
              <input 
                name="lastName" 
                placeholder="Last name *" 
                required 
                value={formData.lastName}
                onChange={handleChange}
                className={showValidationError && !formData.lastName ? 'error' : ''}
              />
            </div>
            
            <div className="form-group">
              <input 
                name="company" 
                placeholder="Company name (optional)" 
                value={formData.company}
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <select 
                name="country" 
                required 
                value={formData.country}
                onChange={handleChange}
                className={showValidationError && !formData.country ? 'error' : ''}
              >
                <option value="">Select Country *</option>
                <option value="US">United States (US)</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            
            <div className="form-group">
              <input 
                name="street" 
                placeholder="Street address *" 
                required 
                value={formData.street}
                onChange={handleChange}
                className={showValidationError && !formData.street ? 'error' : ''}
              />
            </div>
            <div className="form-group">
              <input 
                name="apartment" 
                placeholder="Apartment, suite, etc. (optional)" 
                value={formData.apartment}
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <input 
                name="city" 
                placeholder="Town / City *" 
                required 
                value={formData.city}
                onChange={handleChange}
                className={showValidationError && !formData.city ? 'error' : ''}
              />
            </div>
            <div className="form-group">
              <input 
                name="state" 
                placeholder="State *" 
                required 
                value={formData.state}
                onChange={handleChange}
                className={showValidationError && !formData.state ? 'error' : ''}
              />
            </div>
            
            <div className="form-group">
              <input 
                name="zip" 
                placeholder="ZIP Code *" 
                required 
                value={formData.zip}
                onChange={handleChange}
                className={showValidationError && !formData.zip ? 'error' : ''}
              />
            </div>
            <div className="form-group"></div>
            
            <div className="form-group">
              <input 
                name="phone" 
                placeholder="Phone *" 
                required 
                value={formData.phone}
                onChange={handleChange}
                className={showValidationError && !formData.phone ? 'error' : ''}
              />
            </div>
            <div className="form-group">
              <input 
                name="email" 
                placeholder="Email address *" 
                type="email"
                required 
                value={formData.email}
                onChange={handleChange}
                className={showValidationError && (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ? 'error' : ''}
              />
            </div>
          </div>
          
          <div className="form-group">
            <textarea 
              placeholder="Order notes (optional)" 
              name="notes" 
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>

      <div className="order-summary-section">
        <h1>Your Order</h1>
        <div className="order-items">
          {cart.map((item, idx) => (
            <div className="order-item" key={idx}>
              <span>{item.title} × {item.quantity || 1}</span>
              <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="order-totals">
          <div className="order-total-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="order-total-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="order-total-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-methods">
          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="bank" 
                checked={formData.paymentMethod === 'bank'}
                onChange={handleChange}
              />
              Direct bank transfer
            </label>
            {formData.paymentMethod === 'bank' && (
              <p>Make your payment directly into our bank account.</p>
            )}
          </div>
          
          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="check" 
                checked={formData.paymentMethod === 'check'}
                onChange={handleChange}
              />
              Check payments
            </label>
          </div>
          
          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="cash" 
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
              />
              Cash on delivery
            </label>
          </div>
        </div>

        <div className="terms-agreement">
          <label>
            <input 
              type="checkbox" 
              name="agreedToTerms" 
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className={showValidationError && !formData.agreedToTerms ? 'error-checkbox' : ''}
            />
            I have read and agree to the website terms and conditions.
          </label>
        </div>

        <button 
          className="place-order-btn" 
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;