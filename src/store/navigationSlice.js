import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    goTo: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { goTo } = navigationSlice.actions;
export default navigationSlice.reducer;
