import React from 'react';
import '../app.css';

export function Login() {
  return (
    <main>
        <h1>Welcome</h1>
        <h3>The Community For Those Expecting</h3>
        <form method="get" action="talk.html">
            <div>
                <input type="text" placeholder="email"/>
            </div>
            <div>
                <input type="text" placeholder="password"/>
            </div>
            <div className="login_buttons">
            <button type="submit">Login</button>
            <button type="submit">Create Account</button>
            </div>
        </form>
    </main>
  );
}