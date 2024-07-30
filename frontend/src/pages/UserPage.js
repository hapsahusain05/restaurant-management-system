import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle creating a new user
  const handleCreateUser = async () => {
    try {
      await axios.post('/api/users', newUser);
      setNewUser({ name: '', email: '' });
      // Refresh user list
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Handle selecting a user for details or edit
  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setEditUser(null);
  };

  // Handle editing a user
  const handleEditUser = async () => {
    try {
      await axios.put(`/api/users/${editUser.id}`, editUser);
      setEditUser(null);
      // Refresh user list
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      // Refresh user list
      const response = await axios.get('/api/users');
      setUsers(response.data);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      
      {/* Create User Form */}
      <h2>Create New User</h2>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleCreateUser}>Create User</button>
      
      {/* User List */}
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleSelectUser(user)}>View/Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {/* User Details/Edit Form */}
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          
          <h2>Edit User</h2>
          <input
            type="text"
            value={editUser?.name || selectedUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={editUser?.email || selectedUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            placeholder="Email"
          />
          <button onClick={handleEditUser}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default UserPage;

