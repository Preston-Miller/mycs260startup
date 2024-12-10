import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password cannot be empty.');
      return;
    }

    setError('');
    navigate('/talk');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
        setError('Email and password cannot be empty.');
        return;
      }

    navigate('/talk');
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