import React from 'react';
import { TrendingUp, ShoppingCart, Package, Users } from 'lucide-react';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCommande } from '../../store/adminSlice';

export default function TrendyfashionAdmin() {
  const dispatch = useDispatch();
  const stats = useSelector(state => state.admin.stats);
  const commandes = useSelector(state => state.admin.commandes);
  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid':
        return 'admin-status-paid';
      case 'Pret commander':
        return 'admin-status-ready';
      case 'Refait':
        return 'admin-status-refait';
      default:
        return '';
    }
  };

  return (
    <div className="admin-app">
      {/* En-tête */}
      <div className="admin-header">
        <h1>Trendyfashion</h1>
        <p>Fashion website</p>
      </div>
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <div className="admin-stat-icon" aria-hidden>
              <TrendingUp size={28} />
            </div>
            <span className="admin-stat-label">Vente</span>
          </div>
          <span className="admin-stat-value">{stats.ventes}</span>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <div className="admin-stat-icon" aria-hidden>
              <ShoppingCart size={28} />
            </div>
            <span className="admin-stat-label">Volume</span>
          </div>
          <span className="admin-stat-value">{stats.volume}</span>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <div className="admin-stat-icon" aria-hidden>
              <Package size={28} />
            </div>
            <span className="admin-stat-label">Revenus</span>
          </div>
          <span className="admin-stat-value">{stats.revenus}</span>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <div className="admin-stat-icon" aria-hidden>
              <Users size={28} />
            </div>
            <span className="admin-stat-label">Utilisateurs</span>
          </div>
          <span className="admin-stat-value">{stats.utilisateurs}</span>
        </div>
      </div>
      <div className="admin-orders-section">
        <div className="admin-orders-header">
          <h2 className="admin-orders-title">Statistiques de commande</h2>
          <div className="admin-orders-actions">
            <button className="admin-btn admin-btn-sort">Trier par</button>
            <button onClick={() => dispatch(addCommande())} className="admin-btn admin-btn-add">+ Ajouter Plus Du Libres expédiées</button>
          </div>
        </div>
        <div className="admin-table-header">
          <div className="admin-table-header-cell">Produits</div>
          <div className="admin-table-header-cell">Quantité</div>
          <div className="admin-table-header-cell">Status</div>
          <div className="admin-table-header-cell">Date</div>
          <div className="admin-table-header-cell">Prix</div>
        </div>
        {commandes.map((commande) => (
          <div key={commande.id} className="admin-table-row">
            <div className="admin-product-cell">
              <div className="admin-product-image"></div>
              <span className="admin-product-name">{commande.produit}</span>
            </div>
            <div>{commande.qte}</div>
            <div>
              <span className={`admin-status-badge ${getStatusColor(commande.status)}`}>
                {commande.status}
              </span>
            </div>
            <div>{commande.date}</div>
            <div>{commande.prix}</div>
          </div>
        ))}
      </div>
    </div>
  );
}