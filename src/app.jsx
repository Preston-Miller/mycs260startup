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
                    <li> <a href="index.html">Home</a></li>
                    <li> <a href="talk.html">Chat</a></li>
                    <li> <a href="updates.html">Notifications</a></li>
                    <li> <a href="about.html">About</a></li>
                </menu>
            </nav>
            <hr />
        </header>

        <main>App components go here</main>

        <footer>
        <h3>Preston Miller</h3>
        <br/>
        <a href="https://github.com/Preston-Miller/mycs260startup.git">GitHub</a>
        </footer>

    </div>
    </BrowserRouter>
  );
}