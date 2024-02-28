import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const users = [
    { username: "user1", password: "password1", userType: 'vendor' },
    { username: "user2", password: "password2", userType: 'customer' },
    { username: "user3", password: "password3", userType: 'vendor' },
    { username: "user4", password: "password4", userType: 'customer' }
];

function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? user : null;
}

function LoginPage() {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const loggedInUser = login(username, password);

        if (loggedInUser) {
            const userType = loggedInUser.userType;

            if (userType === 'vendor') {
                history('/vendor');
            } else if (userType === 'customer') {
                history('/customer');
            } else {
                setError("Invalid user type");
            }
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
        <h1>LOGIN PAGE</h1>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    
          <button onClick={handleLogin}>Login</button>
    
          {error && <p className="error-message">{error}</p>}
        </div>
      );
}

export default LoginPage;