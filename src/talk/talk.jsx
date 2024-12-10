import React from 'react';
import './talk.css';

export function Talk() {
  return (
    <main>
    <div className="username-display">
        <p>User: 
        <span className="username"> Jenny</span>
        </p>
    </div>
    <ul className="recieved-messages">
        <li className="username">Angie</li>
        <li className="message">This is a message sent from angie</li>
        <br/>
        <li className="username">Lizzy</li>
        <li className="message">This is a message sent from lizzy</li>
        <br/>
        <li className="username">Becca</li>
        <li className="message">This is a message sent from becca</li>
    </ul>
    <div className="type-message">
        <label for="messageinput"></label>
        <textarea id="messageinput" rows="*" placeholder="Type your message here.."></textarea>
    </div>
    <div className="send-message">
        <label for="messagesend"></label>
        <button id="messagesend" type="button">Send</button>
    </div>
    <hr />
</main>
  );
}