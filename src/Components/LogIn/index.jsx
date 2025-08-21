import React from 'react'
import "./Login.css"
function index() {
    function handleSubmit(){
        alert("Loggin Succesfully!");
    }
  return (
   <>
    <div className='register-container'>
        <div className="tab-header">
            <span className="tab active">LogIn</span>
        </div>
        <form  className="register-form " action="login.php" method='POST'>
            <label>UserName *</label>
            <input 
                type="text"
                name='username'
                required
            />

            <label>Password *</label>
            <input 
                type="password"
                name='password' 
            />
            <button type="submit" className="register-btn" onClick={handleSubmit}>Login</button>
            <p className='mt-3'>
                Don't have an account?
                <a href="/Account">Register</a>
            </p>

        </form>
    
    </div>
   </>
  )
}

export default index
