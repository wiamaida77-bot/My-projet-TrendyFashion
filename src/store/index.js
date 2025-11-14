import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import cartReducer from './cartSlice';
import uiReducer from './uiSlice';
import loginReducer from './loginSlice';
import contactReducer from './contactSlice';
import paymentReducer from './paymentSlice';
import adminReducer from './adminSlice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cart: cartReducer,
    ui: uiReducer,
    login: loginReducer,
    contact: contactReducer,
    payment: paymentReducer,
    admin: adminReducer,
  },
});

export default store;
