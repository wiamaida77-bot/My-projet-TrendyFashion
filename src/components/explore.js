import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import './explore.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Explore({ onHomeClick, onShopClick, onContactClick, onLoginClick, onCartClick, onFeaturesClick }) {
  const dispatch = useDispatch();
  const nouvelleCollection = [
    { id: 1, name: 'Robe tendance', price: 250, rating: 4.8, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=400&fit=crop' },
    { id: 2, name: 'Chemise moderne', price: 150, rating: 4.6, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop' },
    { id: 3, name: 'Pantalon élégant', price: 180, rating: 4.5, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop' },
    { id: 4, name: 'jacket en cuire', price: 400, rating: 4.9, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop' }
  ];

  const collectionEte = [
    { id: 5, name: "Robe d'été", price: 250, rating: 4.5, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop' },
    { id: 6, name: 'Top léger', price: 89, rating: 4.4, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=400&fit=crop' }
  ];

  const collectionHiver = [
    { id: 7, name: 'Manteau chaud', price: 199, rating: 4.9, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=400&fit=crop' },
    { id: 8, name: 'Pull doux', price: 120, rating: 4.7, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=400&fit=crop' }
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: 'M',
      color: 'Standard',
    }));
  };

  return (
    <div className="explore-page">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <button className="nav-button" onClick={onHomeClick}>HOME</button>
            <button className="nav-button" onClick={onShopClick}>SHOP</button>
            <button className="nav-button active" onClick={onFeaturesClick}>EXPLORE</button>
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

      <div className="explore-header">
        <div className="container">
          <h1 className="explore-title">Explorer nos collections</h1>
          <p className="explore-subtitle">Découvrez nos dernières tendances et trouvez votre style parfait</p>
        </div>
      </div>

      <section className="collection-section">
        <div className="container">
          <h2 className="collection-title">Nouvelle Collection</h2>
          <div className="collection-grid">
            {nouvelleCollection.map((product) => (
              <div key={product.id} className="collection-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="card-footer">
                    <span className="card-price">{product.price} DH</span>
                    <div className="card-rating">
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                  <button className="card-button" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-section">
        <div className="container">
          <h2 className="collection-title">Collection Été</h2>
          <div className="collection-grid">
            {collectionEte.map((product) => (
              <div key={product.id} className="collection-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="card-footer">
                    <span className="card-price">{product.price} DH</span>
                    <div className="card-rating">
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                  <button className="card-button" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-section">
        <div className="container">
          <h2 className="collection-title">Collection Hiver</h2>
          <div className="collection-grid">
            {collectionHiver.map((product) => (
              <div key={product.id} className="collection-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="card-footer">
                    <span className="card-price">{product.price} DH</span>
                    <div className="card-rating">
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                  <button className="card-button" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;