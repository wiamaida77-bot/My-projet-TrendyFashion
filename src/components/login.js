import React from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setEmail, setPassword, toggleShowPassword } from '../store/loginSlice';

export default function Login({ onLogin }) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.login.page);
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);
  const showPassword = useSelector(state => state.login.showPassword);

  const handleLogin = () => {
    if (onLogin) {
      onLogin(email, password);
      return;
    }
    alert('Connexion avec: ' + email);
  };

  const handleSignup = () => {
    alert('Création de compte avec: ' + email);
  };

  if (page === 'login') {
    return (
      <div className="login-container">
       
        <h3 className="login-title">Connectez-vous à votre compte</h3>

        <div className="form-group">
          <label>E-Mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="example@gmail.com"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <div className="label-row">
            <label>Mot De Passe</label>
            <span className="forgot-link">Oublié?</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            placeholder="Votre mot de passe"
            className="input-field"
          />
        </div>

        <button onClick={handleLogin} className="btn-primary">
          Connectez-vous maintenant
        </button>

        <p className="divider">ou</p>

        <button className="btn-google">
          <span className="google-icon"></span>
          Continuer avec Google
        </button>

        <p className="switch-page">
          Vous n'Avez Pas De Compte?
          <span onClick={() => dispatch(setPage('signup'))} className="link"> S'inscrire</span>
        </p>
      </div>
    );
  }

  return (
    <div className="signup-wrapper">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="brand-name">Trendyfashion</h1>
          <h2 className="welcome-text">Welcome</h2>
        </div>
      </div>

      <div className="signup-section">
        <div className="signup-container">
          <h2>Créer un compte</h2>

          <div className="form-group">
            <label>E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              placeholder="example@gmail.com"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Mot De Passe</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder="Votre mot de passe"
                className="input-field"
              />
              <span
                onClick={() => dispatch(toggleShowPassword())}
                className="eye-icon"
              >
                👁️
              </span>
            </div>
          </div>

          <button onClick={handleSignup} className="btn-primary">
            Créer un compte
          </button>

          <p className="divider">ou</p>

          <button className="btn-google">
            <span className="google-icon"></span>
            Continuer avec Google
          </button>

          <p className="switch-page">
            Vous Avez Déjà Un Compte?
            <span onClick={() => dispatch(setPage('login'))} className="link"> Se Connecter</span>
          </p>
        </div>
      </div>
    </div>
  );
}
