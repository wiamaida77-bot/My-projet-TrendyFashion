import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: '',
  name: '',
  firstName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  email: '',
  phone: '',
  cardName: '',
  cardNum: '',
  cardExpiry: '',
  cardSecurity: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetPayment: () => initialState,
  },
});

export const { setField, resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
