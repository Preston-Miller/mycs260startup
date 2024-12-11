import React, { useState } from 'react';
import './talk.css';

export function Talk({ userEmail }) {
  const [messages, setMessages] = useState([
    { username: 'Angie', message: 'This is a message sent from angie' },
    { username: 'Lizzy', message: 'This is a message sent from lizzy' },
    { username: 'Becca', message: 'This is a message sent from becca' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { username: userEmail, message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <main>
      <div className="username-display">
        <p>
          User:
          <span className="username"> {userEmail}</span>
        </p>
      </div>

      <ul className="recieved-messages">
        {messages.map((msg, index) => (
          <li key={index} className="message-item">
            <span className="username">{msg.username}</span>
            <p className="message">{msg.message}</p>
          </li>
        ))}
      </ul>

      <div className="type-message">
        <textarea
          id="messageinput"
          rows="2"
          placeholder="Type your message here.."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="send-message">
        <button id="messagesend" type="button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <hr />
    </main>
  );
}