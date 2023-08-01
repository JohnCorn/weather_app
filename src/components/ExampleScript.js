
import React, { useState, useEffect } from 'react';

const GetUsers = () => 
{
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li 
          key={user.id}
          >
          {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers