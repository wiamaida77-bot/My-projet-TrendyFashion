import React from 'react';
import TrendyFashion from './components/home';
import Login from './components/login';
import Shop from './components/shop';
import Contact from './components/contact';
import Cart from './components/cart';
import Explore from './components/explore';
import PaymentForm from './components/payment';
import TrendyshopAdmin from './components/admin/admin';
import { useDispatch, useSelector } from 'react-redux';
import { goTo } from './store/navigationSlice';

function App() {
  const currentPage = useSelector(state => state.navigation.currentPage);
  const dispatch = useDispatch();

  const handleShowLogin = () => dispatch(goTo('login'));
  const handleShowHome = () => dispatch(goTo('home'));
  const handleShowShop = () => dispatch(goTo('shop'));
  const handleShowContact = () => dispatch(goTo('contact'));
  const handleShowCart = () => dispatch(goTo('cart'));
  const handleShowFeatures = () => dispatch(goTo('features'));
  const handleShowPayment = () => dispatch(goTo('payment'));
  const handleShowAdmin = () => dispatch(goTo('admin'));

  const ADMIN_EMAIL = 'admin@trendyfashion.com';
  const handleLoginRoute = (email) => {
    const normalized = (email || '').trim().toLowerCase();
    if (normalized === ADMIN_EMAIL) {
      dispatch(goTo('admin'));
    } else {
      dispatch(goTo('home'));
    }
  };

  if (currentPage === 'login') {
    return (
      <div className="App">
        <Login onLogin={handleLoginRoute} />
      </div>
    );
  }

  if (currentPage === 'shop') {
    return (
      <div className="App">
        <Shop
          onHomeClick={handleShowHome}
          onLoginClick={handleShowLogin}
          onContactClick={handleShowContact}
          onCartClick={handleShowCart}
          onFeaturesClick={handleShowFeatures}
        />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="App">
        <Contact
          onHomeClick={handleShowHome}
          onShopClick={handleShowShop}
          onLoginClick={handleShowLogin}
          onCartClick={handleShowCart}
          onFeaturesClick={handleShowFeatures}
        />
      </div>
    );
  }

  if (currentPage === 'cart') {
    return (
      <div className="App">
        <Cart
          onHomeClick={handleShowHome}
          onShopClick={handleShowShop}
          onContactClick={handleShowContact}
          onLoginClick={handleShowLogin}
          onFeaturesClick={handleShowFeatures}
          onPaymentClick={handleShowPayment}
        />
      </div>
    );
  }

  if (currentPage === 'payment') {
    return (
      <div className="App">
        <PaymentForm />
      </div>
    );
  }

  if (currentPage === 'features') {
    return (
      <div className="App">
        <Explore
          onHomeClick={handleShowHome}
          onShopClick={handleShowShop}
          onContactClick={handleShowContact}
          onLoginClick={handleShowLogin}
          onCartClick={handleShowCart}
        />
      </div>
    );
  }

  if (currentPage === 'admin') {
    return (
      <div className="App">
        <TrendyshopAdmin />
      </div>
    );
  }

  return (
    <div className="App">
      <TrendyFashion
        onLoginClick={handleShowLogin}
        onShopClick={handleShowShop}
        onContactClick={handleShowContact}
        onCartClick={handleShowCart}
        onFeaturesClick={handleShowFeatures}
        onAdminClick={handleShowAdmin}
      />
    </div>
  );
}

export default App;
