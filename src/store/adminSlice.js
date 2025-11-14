import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: {
    ventes: '300k',
    volume: '10k',
    revenus: '400k',
    utilisateurs: '350k',
  },
  commandes: [
    { id: 1, produit: 'Robe', qte: 10, status: 'Paid', date: '31/01/2025', prix: '2500DH' },
    { id: 2, produit: 'Pantalon', qte: 5, status: 'Pret commander', date: '24/02/2025', prix: '900DH' },
    { id: 3, produit: 'veste en cuire', qte: 8, status: 'Refait', date: '25/6/2025', prix: '3200DH' },
    { id: 4, produit: 'chemise', qte: 3, status: 'Paid', date: '28/08/2025', prix: '"390DH' },
    { id: 5, produit: 'Shirt', qte: 12, status: 'Paid', date: '12/10/2025', prix: '1800DH' },
  ],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addCommande: (state) => {
      const nextId = (state.commandes[state.commandes.length - 1]?.id || 0) + 1;
      state.commandes.push({
        id: nextId,
        produit: 'Nouveau Produit',
        qte: 1,
        status: 'Paid',
        date: new Date().toLocaleDateString('fr-FR'),
        prix: 'DH0.00',
      });
    },
  },
});

export const { addCommande } = adminSlice.actions;
export default adminSlice.reducer;
