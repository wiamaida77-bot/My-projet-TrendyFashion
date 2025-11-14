import React from 'react';
import './payment.css';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../store/paymentSlice';

export default function PaymentForm() {
  const dispatch = useDispatch();
  const {
    cardNumber,
    cardHolder,
    expiryDate,
    cvv,
    name,
    firstName,
    address,
    city,
    postalCode,
    country,
    email,
    phone,
    cardName,
    cardNum,
    cardExpiry,
    cardSecurity,
  } = useSelector(state => state.payment);

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Formulaire soumis !');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    alert('Validation du mode de paiement !');
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>Paiement</h1>
        <p className="subtitle">Formulaire</p>
      </div>

      <div className="payment-content">
        <div className="payment-section">
          <h2>Méthode de paiement</h2>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label>Numéro de carte</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => dispatch(setField({ key: 'cardNumber', value: e.target.value }))}
                maxLength="19"
              />
            </div>

            <div className="form-group">
              <label>Nom du titulaire</label>
              <input
                type="text"
                placeholder="John Doe"
                value={cardHolder}
                onChange={(e) => dispatch(setField({ key: 'cardHolder', value: e.target.value }))}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date d'expiration</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => dispatch(setField({ key: 'expiryDate', value: e.target.value }))}
                  maxLength="5"
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => dispatch(setField({ key: 'cvv', value: e.target.value }))}
                  maxLength="3"
                />
              </div>
            </div>

            <h3>Adresse de facturation</h3>

            <div className="form-group">
              <label>Nom</label>
              <input type="text" value={name} onChange={(e) => dispatch(setField({ key: 'name', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Prénom</label>
              <input type="text" value={firstName} onChange={(e) => dispatch(setField({ key: 'firstName', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Adresse</label>
              <input type="text" value={address} onChange={(e) => dispatch(setField({ key: 'address', value: e.target.value }))} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Ville</label>
                <input type="text" value={city} onChange={(e) => dispatch(setField({ key: 'city', value: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Code postal</label>
                <input type="text" value={postalCode} onChange={(e) => dispatch(setField({ key: 'postalCode', value: e.target.value }))} />
              </div>
            </div>

            <div className="form-group">
              <label>Pays</label>
              <select value={country} onChange={(e) => dispatch(setField({ key: 'country', value: e.target.value }))}>
                <option value="">Sélectionnez votre pays</option>
                <option value="fr">France</option>
                <option value="be">Belgique</option>
                <option value="ch">Suisse</option>
                <option value="ca">Canada</option>
              </select>
            </div>

            <h3>Contact information</h3>

            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => dispatch(setField({ key: 'email', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" value={phone} onChange={(e) => dispatch(setField({ key: 'phone', value: e.target.value }))} />
            </div>

            <button type="submit" className="btn-submit">Payer</button>
          </form>
        </div>

        <div className="payment-section">
          <h2>Mode de paiement</h2>
          <form onSubmit={handleContinue}>
            <div className="form-group">
              <label>Nom de la carte</label>
              <input type="text" value={cardName} onChange={(e) => dispatch(setField({ key: 'cardName', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Numéro de carte</label>
              <input type="text" value={cardNum} onChange={(e) => dispatch(setField({ key: 'cardNum', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Date d'expiration de la carte</label>
              <input type="text" value={cardExpiry} onChange={(e) => dispatch(setField({ key: 'cardExpiry', value: e.target.value }))} />
            </div>

            <div className="form-group">
              <label>Date de sécurité de la carte</label>
              <input type="text" value={cardSecurity} onChange={(e) => dispatch(setField({ key: 'cardSecurity', value: e.target.value }))} />
            </div>

            <button type="submit" className="btn-continue">Continuer</button>
          </form>
        </div>
      </div>
    </div>
  );
}