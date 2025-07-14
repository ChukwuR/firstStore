import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function VivoY28(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>VIVO Y28 8GB + 256GB</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/u/n/untitled-19_1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 239,800.00</span> <del>NGN 279,800.00</del> <br />
                                    <br />
                                    VIVO Y28 Features
                                </h3>
                                <br />
                                <ul className='lead list-group'>
                                    <li className='list-item'>Sim: Dual SIM</li>
                                    <li className='list-item'>Network LTE</li>
                                    <li className='list-item'>Display: 6.56 inches</li>
                                    <li className='list-item'>Battery: Li-Po 5000 mAh</li>
                                    <li className='list-item'>Camera: 50 MP</li>
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
                <h4>Discover the VIVO Y28: A Perfect Blend of Style and Performance</h4> 
                <br />
                <p className='lead'>
                    Introducing the VIVO Y28, a smartphone crafted to deliver outstanding performance and a sleek design. This device seamlessly merges powerful features with user-friendly functionality, making it an ideal choice for both tech enthusiasts and everyday users. Let's explore what makes the VIVO Y28 an essential gadget.
                </p>
                <h5>VIVO Y28 MEMORY</h5>
                <p className='lead'>
                    The VIVO Y28 boasts 8GB of RAM and 128GB of internal storage, offering plenty of space for your apps, photos, and files. Enjoy seamless multitasking and smooth performance, whether you're gaming, streaming, or browsing.
                </p>
                <h4>VIVO Y28 CAMERA</h4>
                <p className='lead'>
                    The VIVO Y28 is equipped with a 50 MP camera, allowing you to take stunning photos with incredible detail and clarity. Capture your favorite moments, from breathtaking landscapes to close-up shots, with professional-quality results.
                </p>
                <h4>VIVO Y28 NETWORK</h4>
                <p className='lead'>
                    Stay connected with the dual SIM capability of the VIVO Y28. Effortlessly manage personal and work contacts, or take advantage of different data plans to save on costs while traveling.
                </p>
                <br />
                <h4>Vivo Y28 Specifications</h4>
                <br />
                <table className='table table-bordered border-primary'>
                    <tbody>
                        <tr>
                            <td>SIM</td>
                            <td>Dual SIM</td>
                        </tr>
                        <tr>
                            <td>NETWORK</td>
                            <td>GSM / HSPA / LTE</td>
                        </tr>
                        <tr>
                            <td>OPERATING SYSTEM</td>
                            <td>Android 13, Fun Touch 13</td>
                        </tr>
                        <tr>
                            <td>CHIPSET</td>
                            <td>Mediatek Dimensity 6020 (7 nm)</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)</td>
                        </tr>
                        <tr>
                            <td>MEMORY</td>
                            <td>256GB 8GB RAM</td>
                        </tr>
                        <tr>
                            <td>DISPLAY</td>
                            <td>6.56 inches, 103.4 cm2 (~83.8% screen-to-body ratio, 720 x 1612 pixels, 20:9 ratio (~269 ppi density))</td>
                        </tr>
                        <tr>
                            <td>CAMERA(Rear)</td>
                            <td>
                                50MP, f/1.8, (wide), PDAF
                                2 MP, f/2.4 (depth)
                            </td>
                        </tr>
                        <tr>
                            <td>CAMERA(Front)</td>
                            <td>8 MP, f/2.0, (wide)</td>
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
                                Fingerprint (side-mounted), accelerometer, proximity, and compass
                            </td>
                        </tr>
                        <tr>
                            <td>BATTERY</td>
                            <td>
                                Type: Li-Po, 5000 mAh, non-removable
                                Charging:15W wired
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p className='lead'>
                    Delivery Period:  Delivery to locations in Lagos is within 24 hours after payment confirmation. Other states are within 3-5 business days.
                </p>
                <h5>VIVO Y28 BATTERY</h5>
                <p className='lead'>
                    Stay powered throughout the day with the 5000 mAh Li-Po battery. Whether you're on long calls, watching videos, or playing games, the VIVO Y28 ensures you have enough battery life to get through your day without frequent recharges.
                </p>
                <h5>CONCLUSION</h5>
                <p className='lead'>
                    The VIVO Y28 is more than just a smartphone; it's a reliable companion that seamlessly fits into your lifestyle. Its combination of powerful hardware, expansive storage, and impressive camera capabilities makes it perfect for anyone looking to stay connected and capture life's best moments. Plus, with its long-lasting battery, you can rely on the VIVO Y28 to keep up with your busy day.
                    <br />
                    Upgrade your smartphone experience with the VIVO Y28 and enjoy a perfect blend of style, performance, and functionality.
                </p>
            </div>
        </>
    )
}
export default VivoY28;