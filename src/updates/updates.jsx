import React, { useState, useEffect } from 'react';
import './updates.css';

export function Updates() {
  // State to store updates
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock real-time updates by adding a new notification every 5 seconds
    const interval = setInterval(() => {
      const newUpdate = generateMockUpdate();
      setNotifications((prevNotifications) => [newUpdate, ...prevNotifications.slice(0,4)]);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to generate a mock update
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