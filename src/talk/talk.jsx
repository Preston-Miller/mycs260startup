import React, { useState } from 'react';
import './talk.css';

export function Talk() {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { username: 'Jenny', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <main>
      <div className="username-display">
        <p>
          User:
          <span className="username"> Jenny</span>
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