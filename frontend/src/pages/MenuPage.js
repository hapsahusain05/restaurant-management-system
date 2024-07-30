import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data menu dari API
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('/api/menu'); // Ganti dengan endpoint API yang sesuai
        setMenuItems(response.data);
      } catch (error) {
        setError('Failed to fetch menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;

