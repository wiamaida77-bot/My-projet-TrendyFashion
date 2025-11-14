import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import './shop.css';

function Shop({ onHomeClick, onLoginClick, onContactClick, onCartClick, onFeaturesClick }) {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const allProducts = [
    { id: 1, name: "Robe d'été", price: 250, rating: 4.5, category: 'Robes', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
    { id: 2, name: 'Chemise élégante', price: 150, rating: 4.8, category: 'Hauts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop' },
    { id: 3, name: 'Pantalon chic', price: 150, rating: 4.6, category: 'Bas', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop' },
    { id: 4, name: 'Veste en cuir', price: 400, rating: 4.9, category: "Vêtements d'extérieur", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
    { id: 5, name: 'Robe de soirée', price: 229, rating: 4.7, category: 'Robes', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop' },
    { id: 6, name: 'Pull confortable', price: 99, rating: 4.4, category: 'Hauts', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop' },
    { id: 7, name: "Manteau d'hiver", price: 299, rating: 4.8, category: "Vêtements d'extérieur", image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop' }
  ];
  

  const categories = ['Tout', 'Robes', 'Hauts', 'Bas', "Vêtements d'extérieur"];

  const getFilteredProducts = () => {
    if (activeCategory === 'Tout') return allProducts;
    return allProducts.filter(product => product.category === activeCategory);
  };

  const handleAddToCart = (productName) => {
    alert(`${productName} ajouté au panier!`);
  };

  return (
    <div className="shop-page">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <button className="nav-button" onClick={onHomeClick}>HOME</button>
            <button className="nav-button active">SHOP</button>
            <button className="nav-button" onClick={onFeaturesClick}>EXPLORE</button>
            <button className="nav-button" onClick={onContactClick}>CONTACT</button>
          </div>
          <div className="nav-right">
            <button className="login-button" onClick={onCartClick} style={{ background:'none', border:'none', padding:0 }}>
              <ShoppingCart size={24} color="#3D2817" />
            </button>
            <button className="login-button" onClick={onLoginClick}>LOGIN</button>
          </div>
        </div>
      </nav>
      <div className="shop-header">
        <div className="container">
          <h1 className="shop-title">Boutique</h1>
        </div>
      </div>
      <div className="shop-filters">
        <div className="container">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="shop-content">
        <div className="container">
          <div className="products-grid">
            {getFilteredProducts().map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>

                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">{product.price} DH</span>
                    <div className="product-rating">
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.name)}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>

          {getFilteredProducts().length === 0 && (
            <div className="no-products">
              <p>Aucun produit dans cette catégorie</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;