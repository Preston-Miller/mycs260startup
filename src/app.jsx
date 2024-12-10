import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Talk } from './talk/talk';
import { Updates } from './updates/updates';

export default function App() {
  return (
    <BrowserRouter>
    <div className='body bg-dark text-light'>
        <header>
            <h1>BumpTalk</h1>
            <nav>
                <menu> 
                    <li> <NavLink href="index.html">Home</NavLink></li>
                    <li> <NavLink href="talk.html">Chat</NavLink></li>
                    <li> <NavLink href="updates.html">Notifications</NavLink></li>
                    <li> <NavLink href="about.html">About</NavLink></li>
                </menu>
            </nav>
            <hr />
        </header>

        <main>App components go here</main>

        <footer>
        <h3>Preston Miller</h3>
        <br/>
        <NavLink href="https://github.com/Preston-Miller/mycs260startup.git">GitHub</NavLink>
        </footer>

    </div>
    </BrowserRouter>
  );
}