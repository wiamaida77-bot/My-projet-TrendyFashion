import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Robe élégante',
      size: 'M',
      color: 'Noir',
      price: 250,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Chemise en coton',
      size: 'L',
      color: 'Blanc',
      price: 150,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop'
    }
  ],
  shippingCost: 5.99,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
