import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nom: '',
  email: '',
  message: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setNom: (state, action) => { state.nom = action.payload; },
    setEmail: (state, action) => { state.email = action.payload; },
    setMessage: (state, action) => { state.message = action.payload; },
    resetContact: () => initialState,
  },
});

export const { setNom, setEmail, setMessage, resetContact } = contactSlice.actions;
export default contactSlice.reducer;
