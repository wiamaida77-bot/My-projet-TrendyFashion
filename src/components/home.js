import React from 'react';
import { ShoppingCart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeTab, setCountdown } from '../store/uiSlice';

const TrendyFashion = ({ onLoginClick, onShopClick, onContactClick, onCartClick, onFeaturesClick }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(state => state.ui.home.activeTab);
  const countdown = useSelector(state => state.ui.home.countdown);

  
  const bestSellers = [
    {
      id: 1,
      name: 'VESTE',
      price: '300DH',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'robe',
      price: '150DH',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Shirt',
      price: '99DH',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
    }
  ];

  const productsVente = [
    {
      id: 1,
      name: 'manteau',
      price: '270DH',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Chemise blanche unie formelle',
      price: '100DH',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'tjakect en cuire',
      price: '350DH',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'ensemble orange',
      price: '200DH',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop'
    }
  ];

  const productsChauds = [
    {
      id: 1,
      name: "Manteau d'hiver",
      price: '450DH',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Pull en laine',
      price: '180DH',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop'
    }
  ];

  const productsNouvelle = [
    {
      id: 1,
      name: 'Robe tendance',
      price: '320DH',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Ensemble moderne',
      price: '280DH',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop'
    }
  ];

  const getActiveProducts = () => {
    if (activeTab === 'VENTE') return productsVente;
    if (activeTab === 'VÊTEMENTS CHAUDS') return productsChauds;
    return productsNouvelle;
  };

  const testimonials = [
    {
      name: 'amal slimani',
      text: "L'expérience client a été exceptionnelle du début à la fin. Le site web est convivial, le processus de paiement a été fluide et les vêtements que j'ai commandés me vont parfaitement. Je suis plus que satisfaite !"
    },
    {
      name: 'Salma badi',
      text: "J'ai passé un excellent moment sur ce site. Les vêtements que j'ai achetés sont à la mode et confortables. Je suis très satisfaite !"
    }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <button className="nav-button">HOME</button>
            <button className="nav-button" onClick={onShopClick}>SHOP</button>
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
      <div className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Trendyfashion</h1>
              <button className="cta-button" onClick={onFeaturesClick}>EXPLORER MAINTENANT</button>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop" 
                  alt="Fashion model"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="section-title">Meilleures ventes</h2>
          <p className="section-subtitle">
            Suivez la tendance avec notre sélection organisée des styles les plus vendus.
          </p>
          
          <div className="products-grid-three">
            {bestSellers.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <div className="product-rating">
                      <span className="rating-text">{product.rating}</span>
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="section-title">Nos produits</h2>
          
          <div className="tabs">
            <button 
              onClick={() => dispatch(setHomeTab('VENTE'))}
              className={`tab ${activeTab === 'VENTE' ? 'tab-active' : ''}`}>
              VENTE
            </button>
            <button 
              onClick={() => dispatch(setHomeTab('VÊTEMENTS CHAUDS'))}
              className={`tab tab-middle ${activeTab === 'VÊTEMENTS CHAUDS' ? 'tab-active' : ''}`}>
              VÊTEMENTS CHAUDS
            </button>
            <button 
              onClick={() => dispatch(setHomeTab('NOUVELLE ARRIVÉE'))}
              className={`tab ${activeTab === 'NOUVELLE ARRIVÉE' ? 'tab-active' : ''}`}>
              NOUVELLE ARRIVÉE
            </button>
          </div>

          <div className="products-grid-four">
            {getActiveProducts().map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image-tall" />
                <div className="product-info">
                  <h3 className="product-name-small">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <div className="product-rating">
                      <span className="rating-text">{product.rating}</span>
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="exclusive-offer">
            <img 
              src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop" 
              alt="Pantalon" 
              className="offer-image"
            />
            <div className="offer-content">
              <h2 className="offer-title">Offre exclusive</h2>
              <p className="offer-text">
                Débloquez la mise à niveau de style ultime avec notre offre exclusive Profitez d'économies allant jusqu'à 40 % sur nos dernières nouveautés
              </p>
              
              <div className="countdown">
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.days}</div>
                  <div className="countdown-label">Jours</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.hours}</div>
                  <div className="countdown-label">Heures</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.minutes}</div>
                  <div className="countdown-label">Min</div>
                </div>
              </div>

              <button className="cta-button">ACHETEZ MAINTENANT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="section-title">Des vêtements de créateurs pour vous</h2>
          <p className="section-subtitle">
            Plonger dans l'univers de la mode de luxe avec nos vêtements de créateurs soigneusement confectionnés!
          </p>
          
          <div className="designer-grid">
            <div className="designer-card">
              <img 
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=400&fit=crop" 
                alt="Robes" 
                className="designer-image"
              />
              <div className="designer-content">
                <h3 className="designer-title">Robes</h3>
                <p className="designer-text">
                  Découvrez une superbe gamme de robes de créateurs, notamment des robes de soirée et des robes de jour chics.
                </p>
              </div>
            </div>
            <div className="designer-card">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=400&fit=crop" 
                alt="Vêtements d'extérieur" 
                className="designer-image"
              />
              <div className="designer-content">
                <h3 className="designer-title">Vêtements d'extérieur</h3>
                <p className="designer-text">
                  Parcourez les manteaux, vestes et blazers de créateurs luxueux pour rester au chaud avec style pendant les saisons plus froides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="section-title">Coin des commentaires</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">❝❞</div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-social">
              <div className="social-item"> @trendyfashion.store</div>
              <div className="social-item"> @trendyfashion.store</div>
              <div className="social-item"> @trendyfashion.store</div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">BOUTIQUE</h4>
              <div className="footer-link">Produits</div>
              <div className="footer-link">Aperçu</div>
              <div className="footer-link">Tarifs</div>
              <div className="footer-link">Communiqués</div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">ENTREPRISE</h4>
              <div className="footer-link">À Propos De Nous</div>
              <div className="footer-link">Contact</div>
              <div className="footer-link">Nouvelles</div>
              <div className="footer-link">Soutien</div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">RESTEZ À JOUR</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                /> 
                <button className="newsletter-button">SUBMIT</button>
              </div>
            </div>
          </div>
          
          <div className="footer-navigation">
            <button className="nav-arrow">
              <ChevronLeft size={20} />
            </button>
            <button className="nav-arrow">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrendyFashion;