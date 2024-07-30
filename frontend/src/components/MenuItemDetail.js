import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MenuItemDetail.css'; // Jika Anda ingin menambahkan styling khusus

const MenuItemDetail = ({ match }) => {
  const [menuItem, setMenuItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil ID dari URL parameters
  const { id } = match.params;

  useEffect(() => {
    // Fungsi untuk mendapatkan detail item menu
    const fetchMenuItem = async () => {
      try {
        const response = await axios.get(`/api/menu-items/${id}`);
        setMenuItem(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenuItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!menuItem) return <p>Menu item not found</p>;

  return (
    <div className="menu-item-detail">
      <h1>{menuItem.name}</h1>
      <p><strong>Description:</strong> {menuItem.description}</p>
      <p><strong>Price:</strong> ${menuItem.price}</p>
      <p><strong>Category:</strong> {menuItem.category}</p>
      {/* Tampilkan gambar jika ada */}
      {menuItem.image && <img src={menuItem.image} alt={menuItem.name} />}
    </div>
  );
};

// Definisikan tipe props yang diharapkan
MenuItemDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MenuItemDetail;

