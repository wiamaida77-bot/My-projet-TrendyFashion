import React from 'react';
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';
import './contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNom, setEmail, setMessage, resetContact } from '../store/contactSlice';

function Contact({ onHomeClick, onShopClick, onLoginClick, onCartClick, onFeaturesClick }) {
  const dispatch = useDispatch();
  const nom = useSelector(state => state.contact.nom);
  const email = useSelector(state => state.contact.email);
  const message = useSelector(state => state.contact.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', { nom, email, message });
    alert('Message envoyé avec succès!');
    dispatch(resetContact());
  };

  return (
    <div className="contact-page">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <button className="nav-button" onClick={onHomeClick}>HOME</button>
            <button className="nav-button" onClick={onShopClick}>SHOP</button>
            <button className="nav-button" onClick={onFeaturesClick}>EXPLORE</button>
            <button className="nav-button active">CONTACT</button>
          </div>
          <div className="nav-right">
            <button className="login-button" onClick={onCartClick} style={{ background:'none', border:'none', padding:0 }}>
              <ShoppingCart size={24} color="#3D2817" />
            </button>
            <button className="login-button" onClick={onLoginClick}>LOGIN</button>
          </div>
        </div>
      </nav>
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Contactez-nous</h1>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="form-title">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    className="form-input"
                    placeholder="Votre nom"
                    value={nom}
                    onChange={(e) => dispatch(setNom(e.target.value))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Votre message..."
                    rows="6"
                    value={message}
                    onChange={(e) => dispatch(setMessage(e.target.value))}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">Envoyer</button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <div className="info-card">
                <div className="icon-wrapper"><Mail size={24} color="#8B5A3C" /></div>
                <div className="info-content">
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">contact@trendyfashion.com</p>
                  <p className="info-text">support@trendyfashion.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper"><Phone size={24} color="#8B5A3C" /></div>
                <div className="info-content">
                  <h3 className="info-title">Téléphone</h3>
                  <p className="info-text">+212 6 34 86 60 92</p>
                  <p className="info-text">24h/24h</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper"><MapPin size={24} color="#8B5A3C" /></div>
                <div className="info-content">
                  <h3 className="info-title">Adresse</h3>
                  <p className="info-text">494 Avenue EL fateh</p>
                  <p className="info-text">Geulmime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;