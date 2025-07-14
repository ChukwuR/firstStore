import { useCart } from './CartContext';
import './checkout.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function Checkout() {
  const { cart, removeFromCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        <h2 className='emptyCartHead'>Your cart is empty! 🛒</h2>
        <div className='emptyCartContent'>
          <h5>Browse our categories and discover our best deals!</h5>
          <button className='btn emptyCartBtn' style={{justifySelf:'center'}}>
            <Link to='/Category'><span className='cartTxt'>Start Shopping</span></Link>
          </button>
          <div className='emptyCartIcon'>
            <i className="bi bi-cart3"></i>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <Footer/>
      </>
    )
  }

  return (
    <>
    <div className='checkoutBackground'>
      <h2>Cart</h2>
      <div className='listItem card'>
        <ul className='row' style={{ listStyleType: 'none', padding: 0 }}>
          <div className='totalItems'>
            <p>({totalItems}) item available in your cart!</p>
          </div>
          {cart.map(item => (
            <li className='col-sm-12 col-md-5 col-lg-5' key={item.id} style={{ marginBottom: '10px' }}>
              <div>
                <img src={item.productPhoto} alt="" className='checkoutImg' style={{
                  width:'200px',
                  height:"200px"
                }} />
              </div> <br />
              <strong>{item.productName}</strong> — <span style={{color:'navy'}}> <br /> NGN {item.productPrice}</span> × {item.quantity}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: '15px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div>
          <button className='btn'>
            <Link to='/PhoneAndTabList'><span style={{color:'black'}}>Continue Shopping</span></Link>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}