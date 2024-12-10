import React from 'react';
import './updates.css';

export function Updates() {
  return (
    <main>
        <h1>Notifications</h1>
        <ul className="notifications">
            <li className="username">Becca created a new account</li>
            <li className="username">Lizzy is now active</li>
            <li className="username">Angie is now active</li>
        </ul>
        <hr />
    </main>
  );
}