import React, { useState } from 'react';
import '../Account/Account.css'; 
function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/shopify-api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.success);
        setFormData({ username: '', email: '', password: '' });
      } else {
        alert(result.error || "Registration failed.");
      }
    } catch (err) {
      alert("Network error. Check if XAMPP is running.");
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="tab-header">
        <span className="tab active">REGISTER</span>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>


        <label>Username *</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <p className="privacy-text">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="https://www.privacypolicies.com/live/1f96d5ee-1e11-405b-a88a-f56e9bf05648">
          privacy policy</a>.
        </p>


        <button type="submit" className="register-btn">Register</button>



      </form>
    </div>
  );
}

export default RegisterForm;
