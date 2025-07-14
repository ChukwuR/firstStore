import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function SamsungGalaxyBuds2Pro(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>Samsung Galaxy Buds 2 Pro</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/9/0/90.galaxy-buds2-pro-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 170,000.00</span> <br />
                                    <br />
                                    Samsung Galaxy Buds 2 Pro
                                </h3>
                                <br />
                                <ul className='lead list-group'>
                                    <li className='list-item'>Battery: Get up to 5 hours</li>
                                    <li className='list-item'>Blutooth 5.3</li>
                                    <li className='list-item'>IPX7 Water Resistance</li>
                                    <li className='list-item'>Enhanced 360 audio</li>
                                    <li className='list-item'>Dynamic 2-way (Woofer & tweeter)</li>
                                    <li className="list-item">Microphone: 3 Mics + VPU</li>
                                </ul>
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
                <h4>Samsung Galaxy Buds 2 Pro</h4> 
                <br />
                <p className='lead'>
                    We redesigned the earbuds to be 15% smaller than the Galaxy Buds Pro to fit snugly in your ear. Enjoy a comfortable fit, thanks to the ergonomically designed earbuds. Enhanced wind flow technology helps reduce ear canal pressure and minimizes noise — for comfort and clarity. Enjoy studio-quality sound, as it isn’t just for the pros. This immersive listening experience starts at the source with full 24-bit audio for clear, rich audio... and cut out the rest with Intelligent Active Noise Cancellation. It quiets even the loudest sounds so you can tune in to what matters most. When it's time to let the outside world in, switching to in-person conversations is easy with Intelligent Conversation Mode, which utilizes voice detection.
                </p>
                <h5>Samsung Galaxy Buds 2 Pro Specifications</h5>
                <ul className='list-group lead'>
                    <li className="list-item">Battery: Get up to 5 hrs of continuous playtime with ANC on and up to 18 hrs more with the wireless charging case.</li>
                    <li className="list-item">Bluetooth 5.3: With the latest Bluetooth 5.3 wireless range, Galaxy Buds2 Pro play on even if you wander away. </li>
                    <li className="list-item">IPX7 Water Resistance: Play on, rain or shine. Water won't ruin your workout so you can keep the beats going even in a little rain.</li>
                    <li className="list-item">Enhanced 360 audio: With Intelligent 360 Audio, the sound feels more realistic. The 360 Audio with Direct Multi-channel (5.1ch / 7.1ch), Dolby Atmos® and enhanced head tracking make every movement stay in sync — creating an immersive experience. 360 Audio can even pinpoint the direction of the sound as you move your head, giving you the spatial experience.</li>
                    <li className="list-item">
                        Dynamic 2-way (Woofer & tweeter):
                        <br />
                        Woofer delivers deeper bass
                        <br />
                        Tweeter produces crisp treble
                    </li>
                    <li className="list-item">Microphone: 3 Mics + VPU</li>
                    <li className="list-item">Worried about losing your Galaxy Buds2 Pro? Don't. With SmartThings Find, you can trace your coveted Galaxy Buds2 Pro with the location detection feature. You can even do it with or without the case</li>
                    <li className="list-item">Auto Switch on Samsung Galaxy Buds2 Pro intelligently detects mobile activity and seamlessly shifts its connection to your Samsung Galaxy phone, tablet and watch.</li>
                </ul>
            </div>
        </>
    )
}
export default SamsungGalaxyBuds2Pro;