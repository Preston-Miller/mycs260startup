import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Talk } from './talk/talk';
import { Updates } from './updates/updates';

export default function App() {
  const [userName, setUserName] = useState('');
  const [authState, setAuthState] = useState(false); // false = logged out, true = logged in

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header>
          <h1>BumpTalk</h1>
          <nav>
            <menu>
              <li><NavLink to="/">Login</NavLink></li>
              <li><NavLink to="/talk">Talk</NavLink></li>
              <li><NavLink to="/updates">Updates</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </menu>
          </nav>
          <hr />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
          />
          <Route path="/talk" element={<Talk />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>
          <h3>Preston Miller</h3>
          <br />
          <NavLink to="https://github.com/Preston-Miller/mycs260startup.git">GitHub</NavLink>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}