import { useContext, useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import styling from './components/App.module.css'
import logoStyle from './components/App.module.css'
import logo from './components/image/logo.jpeg'
import Catergory from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import { CartProvider } from './components/categoryComponents/CartContext';
import CartIcon from './components/categoryComponents/CartIcon';
import Checkout from './components/categoryComponents/Checkout';
import { ThemeContext } from './components/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

// products
import XiaomiRedmiA5 from './components/productComponents/XiaomiRedmiA5';
import InfinixHot50ProPlus from './components/productComponents/InfinixHot50ProPlus';
import VivoY28 from './components/productComponents/VivoY28';
import AppleiWatchSeries8GPS from './components/productComponents/AppleiWatchSeries8GPS';
import SamsungGalaxyBuds2Pro from './components/productComponents/SamsungGalaxyBuds2Pro';
import XiaomiRedmiA3Pro from './components/productComponents/XiaomiRedmiA3Pro';
import DIGIFONGORILLAXEPowerbank from './components/productComponents/DIGIFONGORILLAXEPowerbank';
import SamsungGalaxyA36 from './components/productComponents/SamsungGalaxyA36';

// category
import PhoneAndTabList from './components/categoryComponents/phoneAndTab/PhoneAndTabList';
import ComputerList from './components/categoryComponents/computing/ComputerList';
import GameList from './components/categoryComponents/gaming/gameImg/GameList';
import HomeApplianceList from './components/categoryComponents/homeAppliance/HomeApplianceList';

function App() {

  const [theme, toggleTheme] = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginToggle = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      <CartProvider>
      <Router>
        <div>
          <nav className='navbar navbar-expand-lg container-fluid'>
            <div className='logoImg'><img src={logo} className={logoStyle.logoImg} alt="" /></div>
            

            {/* mobile responsivity */}
            <div className='dropdown navDropdownMobile'>
              <button className='btn ' type='button' data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <ul className='dropdown-menu custom-left-dropdown'>
                <li className='dropdown-item'><Link to='/' className={styling.linkText}><span className='mobileTxt'>Home</span></Link></li>
                <li className='dropdown-item'><Link to='/Category' className={styling.linkText}><span className='mobileTxt'>Category</span></Link></li>
                <li className='dropdown-item'>
                  {isLoggedIn ? (
                    <span className={styling.linkText} onClick={() => setIsLoggedIn(false)} style={{ cursor: 'pointer' }}>Log out</span>
                  ) : (
                    <Link to='/Login' className={styling.linkText}><span className='mobileTxt'>Log Up</span></Link>
                  )}
                </li>
                <li className='dropdown-item'><Link to='/Signup' className={styling.linkText}><span className='mobileTxt'>Sign Up</span></Link></li>
                <li className='dropdown-item'>
                  <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                    <span className='sliderTheme'>
                      {theme === "dark" ? <FaMoon className="icon moon" /> : <FaSun className="icon sun" />}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            {/* mobile responsivity code ends here */}


            <div className="container navBgScreen">
              <div className="d-flex align-items-center ms-auto gap-3" w>
                <Link to="/" className={styling.linkText}>Home</Link> |
                <Link to='/Category' className={styling.linkText}>Category</Link> |
                {isLoggedIn ? (
                  <span className={styling.linkText} onClick={() => setIsLoggedIn(false)} style={{ cursor: 'pointer' }}>Log out</span>
                ) : (
                  <Link to='/Login' className={styling.linkText}>Log in</Link>
                )} |

                <Link to='/Signup' className={styling.linkText}>Sign Up</Link>

                <div className=''>
                  <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                    <span className='sliderTheme'>
                      {theme === "dark" ? <FaMoon className="icon moon" /> : <FaSun className="icon sun" />}
                    </span>
                  </label>
                </div>
              </div>

            </div>

            
          </nav>

          {/* pages routes */}
          <CartIcon/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Category' element={<Catergory/>} />
            <Route path='/Login' element={<Login onStatusChange={handleLoginToggle}/>} />
            <Route path='/Signup' element={<Signup/>} />
            {/* <Route path='/Signup' element={<Signup onSignupChange={handleSubmitSignup}/>} /> */}
            {/* product */}
            <Route path='/XiaomiRedmiA5' element={<XiaomiRedmiA5/>} />
            <Route path='/InfinixHot50ProPlus' element={<InfinixHot50ProPlus/>}/>
            <Route path='/VivoY28' element={<VivoY28/>} />
            <Route path='/AppleiWatchSeries8GPS' element={<AppleiWatchSeries8GPS/>} />
            <Route path='/SamsungGalaxyBuds2Pro' element={<SamsungGalaxyBuds2Pro/>} />
            <Route path='/XiaomiRedmiA3Pro' element={<XiaomiRedmiA3Pro/>} />
            <Route path='/DIGIFONGORILLAXEPowerbank' element={<DIGIFONGORILLAXEPowerbank/>} />
            <Route path='/SamsungGalaxyA36' element={<SamsungGalaxyA36/>} />
            {/* category */}
            <Route path='/PhoneAndTabList' element={<PhoneAndTabList/>} />
            <Route path='/ComputerList' element={<ComputerList/>} />
            <Route path='/GameList' element={<GameList/>} />
            <Route path='/HomeApplianceList' element={<HomeApplianceList/>} />

            <Route path='/Checkout' element={<Checkout/>} />
          </Routes>
        </div>
      </Router>
      </CartProvider>
    </>
  )
}

export default App
