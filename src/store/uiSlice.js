import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: {
    activeTab: 'VENTE',
    countdown: { days: 6, hours: 18, minutes: 43 },
  },
  shop: {
    activeCategory: 'Tout',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHomeTab: (state, action) => {
      state.home.activeTab = action.payload;
    },
    setCountdown: (state, action) => {
      state.home.countdown = action.payload;
    },
    setShopCategory: (state, action) => {
      state.shop.activeCategory = action.payload;
    },
  },
});

export const { setHomeTab, setCountdown, setShopCategory } = uiSlice.actions;
export default uiSlice.reducer;
