import React, { useState, useEffect } from 'react';
import './updates.css';

export function Updates() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = generateMockUpdate();
      setNotifications((prevNotifications) => [newUpdate, ...prevNotifications.slice(0,4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateMockUpdate = () => {
    const mockUsers = ['Becca', 'Terry', 'Amy', 'Lizzy', 'Angie'];
    const actions = [
      'created a new account',
      'is now active'
    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    return `${randomUser} ${randomAction}`;
  };

  return (
    <main>
      <h1>Notifications</h1>
      <ul className="notifications">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            {notification}
          </li>
        ))}
      </ul>
      <hr />
    </main>
  );
}