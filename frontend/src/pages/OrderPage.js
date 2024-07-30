import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    // Mengambil daftar produk dari API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleOrder = async () => {
    try {
      const response = await axios.post('/api/orders', {
        productId: selectedProduct,
        quantity: quantity
      });
      setOrderStatus('Order placed successfully!');
    } catch (error) {
      setOrderStatus('Failed to place order. Please try again.');
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="order-page">
      <h1>Order Page</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
        <div>
          <label htmlFor="product">Select Product:</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">--Select a Product--</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>

        <button type="submit">Place Order</button>
      </form>

      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
};

export default OrderPage;

