import React, { useState, useEffect } from 'react';
import './updates.css';

export function Updates() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('/api/activity'); // Ensure correct API URL
        if (!response.ok) {
          throw new Error('Failed to fetch updates');
        }
        const data = await response.json();
        // Map activity log entries into readable notifications
        const updates = data.slice(-5).reverse().map((entry) => {
          return `${entry.email} ${entry.type === 'created' ? 'created a new account' : 'logged in'}`;
        });
        setNotifications(updates);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    // Fetch updates initially and every 5 seconds
    fetchUpdates();
    const interval = setInterval(fetchUpdates, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <main>
      <h1>Updates</h1>
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