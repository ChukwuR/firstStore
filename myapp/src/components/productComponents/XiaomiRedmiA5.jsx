import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function XiaomiRedmiA5(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>Xiaomi Redmi A5 4GB + 128GB</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/r/e/redmi_without_bg.png" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 109,200.00</span> <del>NGN 113,200.00</del> <br />
                                    <br />
                                    Xiaomi Redmi A5 Features
                                </h3>
                                <br />
                                <ul className='lead list-group'>
                                    <li className='list-item'>Display: 6.88 inches</li>
                                    <li className='list-item'>Operating System: Android 15</li>
                                    <li className='list-item'>Camera: 32MP</li>
                                    <li className='list-item'>Battery: 5200mAh</li>
                                    <li className='list-item'>Resolution: 720 * 1640 pixels</li>
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
                <h4>Xiaomi Redmi A5 : Your Everyday Powerhouse</h4> 
                <br />
                <p className='lead'>
                    The Xiaomi Redmi A5 features a vibrant 6.88-inch display with 720 x 1640 resolution for an immersive experience. Powered by Android 15, it offers smooth performance and enhanced features. Capture stunning shots with the 50MP camera, and enjoy all-day use with the 5200mAh battery. A perfect blend of power, style, and value in a midrange smartphone.
                </p>
                <br />
                <h5>Immersive 6.88 inch Display</h5>
                <br />
                <p className='lead'>
                    The Xiaomi Redmi A5 features a 6.88-inch display, providing an expansive and immersive viewing experience. Whether you're watching movies, browsing the web, or playing games, the large screen enhances visual clarity and detail, bringing every image to life. The vibrant colors and sharp resolution ensure that your content looks crisp and engaging, making it perfect for both entertainment and productivity.
                </p>
                <br />
                <h4>32MP Camera for Clear, Vibrant Photos</h4>
                <br />
                <p className='lead'>
                    The Xiaomi Redmi A5 features a 32MP rear camera, designed to capture sharp, detailed photos with vibrant colors. Whether you're taking portraits, landscapes, or close-up shots, the camera ensures high-quality images with impressive clarity. Even in low-light conditions, the camera performs well, delivering bright and clear photos. Perfect for users who enjoy capturing moments with stunning clarity and detail.
                </p>
                <br />
                <h4>Xiaomi Redmi A5 Specifications</h4>
                <br />
                <table className='table table-bordered border-primary'>
                    <tbody>
                        <tr>
                            <td>SIM</td>
                            <td>Nano-SIM + Nano-SIM <br />
                                Dust and splash resistance
                            </td>
                        </tr>
                        <tr>
                            <td>NETWORK</td>
                            <td>GSM / HSPA / LTE</td>
                        </tr>
                        <tr>
                            <td>OPERATING SYSTEM</td>
                            <td>Android 15(Go edition), up to 2 major Android upgrades, HyperOS</td>
                        </tr>
                        <tr>
                            <td>CHIPSET</td>
                            <td>Unisoc T7250 (12nm)</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>Octa-core (2x1.8 GHz Cortex-A75 & 6x1.6 GHz Cortex-A55)</td>
                        </tr>
                        <tr>
                            <td>MEMORY</td>
                            <td>128GB 4GB RAM
                                <br />
                                Card slot: microSDXC (dedicated slot)
                            </td>
                        </tr>
                        <tr>
                            <td>DISPLAY</td>
                            <td>6.88 inches, 112.4 cm2 (~84.1% screen-to-body ratio) <br />
                                Resolution: 720 x 1640 pixels (~260 ppi density)
                            </td>
                        </tr>
                        <tr>
                            <td>CAMERA(Rear)</td>
                            <td>Single: 32 MP, f/2.0, (wide) <br />
                                Auxiliary lens <br />
                                Features: LED flash, HDR <br />
                                Video: 1080p@30fps
                            </td>
                        </tr>
                        <tr>
                            <td>CAMERA(Front)</td>
                            <td>
                                Single: 8 MP, f/2.0, (wide) <br />
                                Features: HDR <br />
                                Video: 1080p@30fps
                            </td>
                        </tr>
                        <tr>
                            <td>SOUND</td>
                            <td>
                                Loud speaker: Yes <br />
                                3.5mm jack: Yes
                            </td>
                        </tr>
                        <tr>
                            <td>OTHER FEATURE</td>
                            <td>
                                Fingerprint (side-mounted), accelerometer, compass <br />
                                Virtual proximity sensing
                            </td>
                        </tr>
                        <tr>
                            <td>BATTERY</td>
                            <td>
                                Type: 5200 mAh <br />
                                Charging: 15W wired
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p className='lead'>
                    Delivery Period: Delivery to locations in Lagos is within 24 hours after payment confirmation. Other states are within 3-5 business days.
                </p>
                <h5>Battery That Keeps Up With You</h5>
                <p className='lead'>
                    Stay powered all day with the 5200mAh battery, offering long-lasting performance for work, entertainment, and socializing. This powerhouse ensures you stay connected without interruptions. Plus, with fast-charging support, you'll quickly recharge and get back to what matters.
                </p>
                <h5>Why Choose the Xiaomi Redmi A5 ?</h5>
                <p className='lead'>
                    The Xiaomi Redmi A5 offers an immersive 6.88 inch display for vibrant visuals, perfect for streaming and gaming. Capture sharp, vibrant photos with the 32MP camera, even in low light. With a 5200mAh battery and 15W fast charging, stay powered all day with quick recharges. Experience smooth performance with Android 15 and ample RAM for seamless multitasking. All of this at an affordable price, offering great value without compromising on features.
                </p>
            </div>
        </>
    )
}
export default XiaomiRedmiA5;