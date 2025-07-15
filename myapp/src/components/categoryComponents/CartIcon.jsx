import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './cartIcon.css';

export default function CartIcon() {
  const {cart} = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-icon-wrapper">
      <Link to="/Checkout" className="cart-link">
        <button
          className="btn-cart"
          aria-label={`Cart with ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
        >
          <i className="bi bi-cart3"></i>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </Link>
    </div>
  );
}