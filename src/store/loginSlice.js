import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 'login',
  email: '',
  password: '',
  showPassword: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPage: (state, action) => { state.page = action.payload; },
    setEmail: (state, action) => { state.email = action.payload; },
    setPassword: (state, action) => { state.password = action.payload; },
    toggleShowPassword: (state) => { state.showPassword = !state.showPassword; },
    resetlogin: () => initialState,
  },
});

export const { setPage, setEmail, setPassword, toggleShowPassword, resetlogin } = loginSlice.actions;
export default loginSlice.reducer;
