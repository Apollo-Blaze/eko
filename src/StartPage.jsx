import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./StartPage.css"

function StartPage() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'vendor' || userType === 'customer') {
      navigate('/login');
    } else {
      // Handle invalid selection
    }
  };

  return (
    <div className="center-container">
      <h1>Choose your role</h1>
      <div className="role-container">
        <label className={`role-option ${userType === 'vendor' ? 'selected' : ''}`} >
          <div className="vendorbtn">
            <input
              type="radio"
              name="userType"
              value="vendor"
              onChange={() => setUserType('vendor')}
            />
          </div>
          Technician
        </label>

        <label className={`role-option ${userType === 'customer' ? 'selected' : ''}`}>
          <div className="customerbtn">
            <input
              type="radio"
              name="userType"
              value="customer"
              onChange={() => setUserType('customer')}
            />
          </div>
          General Public
        </label>
      </div>

      <button onClick={handleLogin}>Choose</button>
    </div>
  );
}

export default StartPage;