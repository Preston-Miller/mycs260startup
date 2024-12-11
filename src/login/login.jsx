import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css';

export function Login({ userName, authState, onAuthChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password cannot be empty.');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        onAuthChange(email, true); // Notify parent of successful login
        navigate('/talk');
      } else {
        setError('Login failed.');
      }
    } catch (error) {
      setError('Failed to connect to the server.');
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password cannot be empty.');
      return;
    }

    try {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        onAuthChange(email, true); // Notify parent of successful account creation
        navigate('/talk');
      } else {
        const data = await response.json();
        setError(data.msg || 'Account creation failed.');
      }
    } catch (error) {
      setError('Failed to connect to the server.');
    }
  };

  return (
    <main>
      <h1>Welcome</h1>
      <h3>The Community For Those Expecting</h3>
      <form>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login_buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleCreateAccount}>Create Account</button>
        </div>
      </form>
    </main>
  );
}