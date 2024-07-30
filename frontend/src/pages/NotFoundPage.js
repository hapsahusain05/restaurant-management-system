import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
};

// Gaya CSS inline
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
    color: '#ff6347', // Tomato color
  },
  message: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#333',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default NotFoundPage;

