import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function AppleiWatchSeries8GPS(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>Apple iWatch Series 8 GPS Only</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/1/2/122.0.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 540,000.00</span> <br />
                                    <br />
                                    Apple iWatch Series 8 GPS Only (45mm)
                                </h3>
                                <br />
                                <p style={{fontWeight:'300'}}>
                                    Your essential companion for a healthy life is now even more powerful. Advanced sensors provide insights to help you better understand your health. New safety features can get you help when you need it. The bright, Always-On Retina display is easy to read, even when your wrist is down. The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure. Tougher than tough. It's crack resistant, IP6X-certified dust resistant, and swimproof with WR50 water resistance. Also equipped with advanced health features such as temperature sensing is a breakthrough feature that provides deep insights into women's health. Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular rhythm. And see how much time you spent in REM, Core, or Deep sleep with Sleep Stages.
                                </p>
                            </p>
                            <br />
                            <AddItem/>
                            <br />
                            <p>
                                <Cart/> <br />
                                <br />
                                <p>Add to Wish List</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* details */}
            <div className="container" style={{marginTop:'100px'}}>
                <h2>Details</h2>
                <hr />
                <h4>APPLE WATCH SERIES 8 GPS ONLY (45mm) SPECIFICATIONS</h4> 
                <br />
                <ul className='list-group lead'>
                    <li className="list-item">Always-On Retinal LTPO OLED display</li>
                    <li className="list-item">Up to 1000 nits brightness</li>
                    <li className="list-item">Ion-X glass display on aluminum cases</li>
                    <li className="list-item">Sapphire crystal display on stainless steel cases</li>
                    <li className="list-item">GPS and GPS + Cellular models</li>
                    <li className="list-item">S8 SiP with 64-bit dual-core processor</li>
                    <li className="list-item">W3 wireless chip</li>
                    <li className="list-item">U1 chip (Ultra-Wideband) 14</li>
                    <li className="list-item">Accelerometer</li>
                    <li className="list-item">High-dynamic-range gyroscope</li>
                    <li className="list-item">Temperature sensing</li>
                    <li className="list-item">Blood oxygen sensor and app</li>
                    <li className="list-item">Electricl heart sensor and ECG app</li>
                    <li className="list-item">Third-generation optical heart sensor with High and low heart rate notifications, Irregular rhythm notification</li>
                    <li className="list-item">International Emergency Calling</li>
                    <li className="list-item">Emergency SOS, Crash Detection & Fall Detection (with Up to 256 g-forces)</li>
                    <li className="list-item">Water resistance 50 meters and Dust resistance (IP6X)</li>
                    <li className="list-item">Crack-resistance front crystal</li>
                    <li className="list-item">LTE and UMTS</li>
                    <li className="list-item">Wi-Fi</li>
                    <li className="list-item">Blutooth 5.3</li>
                    <li className="list-item">GPS/GNSS/GLONASS/BeiDou</li>
                    <li className="list-item">Compass</li>
                    <li className="list-item">Always-on altimeter</li>
                    <li className="list-item">Built-in speaker and mic</li>
                    <li className="list-item">32GB capacity</li>
                </ul>
            </div>
        </>
    )
}
export default AppleiWatchSeries8GPS;