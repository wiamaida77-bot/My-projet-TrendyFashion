import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import './cart.css';

function Cart({ onHomeClick, onShopClick, onContactClick, onLoginClick, onFeaturesClick, onPaymentClick }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Robe élégante',
      size: 'M',
      color: 'Noir',
      price: 250,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Chemise en coton',
      size: 'L',
      color: 'Blanc',
      price: 150,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop'
    }
  ]);

  const shippingCost = 5.99;

  const increaseQuantity = (id) => {
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(items => items.map(item => (item.id === id && item.quantity > 1) ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const calculateTotal = () => calculateSubtotal() + shippingCost;

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <button className="nav-button" onClick={onHomeClick}>HOME</button>
            <button className="nav-button" onClick={onShopClick}>SHOP</button>
            <button className="nav-button" onClick={onFeaturesClick}>EXPLORE</button>
            <button className="nav-button" onClick={onContactClick}>CONTACT</button>
          </div>
          <div className="nav-right">
            <ShoppingCart size={24} color="#3D2817" />
            <button className="login-button" onClick={onLoginClick}>LOGIN</button>
          </div>
        </div>
      </nav>

      <div className="cart-header">
        <div className="container">
          <h1 className="cart-title">Panier d'achat</h1>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-grid">
            <div className="cart-items-section">
              {cartItems.length === 0 ? (
                <div className="empty-cart"><p>Votre panier est vide</p></div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-info">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-details">Taille: {item.size} | Couleur: {item.color}</p>
                      <p className="item-price">{item.price.toFixed(2)} DH</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                          <Minus size={16} />
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button className="delete-btn" onClick={() => removeItem(item.id)}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="cart-summary">
              <h2 className="summary-title">Résumé</h2>
              <div className="summary-row">
                <span className="summary-label">Sous-total</span>
                <span className="summary-value">{calculateSubtotal().toFixed(2)} DH</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Livraison</span>
                <span className="summary-value">{shippingCost.toFixed(2)} DH</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span className="summary-label-bold">Total</span>
                <span className="summary-value-bold">{calculateTotal().toFixed(2)} DH</span>
              </div>
              <button className="checkout-btn" onClick={onPaymentClick}>Procéder au paiement</button>
              <button className="continue-btn" onClick={onShopClick}>Continuer vos achats</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;