import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function SamsungGalaxyA36(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>Samsung Galaxy A36 6GB + 128GB 5G</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/2/2/222.png" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 409,000.00</span> <del>NGN 479, 000.00</del> <br />
                                    <br />
                                    Samsung Galaxy A36 Features
                                </h3>
                                <br />
                                <ul className='lead list-group'>
                                    <li className='list-item'>Network: 5G</li>
                                    <li className="list-item">Display: 6.7 inches</li>
                                    <li className='list-item'>Battery: Li-Ion 5000 mAh</li>
                                    <li className='list-item'>Operating System: Android 15</li>
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
                <h4>Samsung Galaxy A36</h4> 
                <br />
                <p className='lead'>
                    The Samsung Galaxy A36 is a sleek mid-range smartphone offering reliable performance and a modern design. It provides a smooth user experience, long-term software support, and 5G connectivity, making it a solid choice for everyday use.
                </p>
                <h5>Durable Display</h5>
                <p className='lead'>
                    The Samsung Galaxy A36 features a 6.7-inch display with a 110.2 cm² screen area, offering an immersive viewing experience. With a 1080 x 2340 resolution and a 19.5:9 aspect ratio, it delivers sharp visuals at approximately 385 ppi density. Its ~86.9% screen-to-body ratio ensures a sleek, edge-to-edge design for an enhanced multimedia experience.
                </p>
                <h5>Revolutionary Camera System</h5>
                <ul className='list-group lead'>
                    <li className="list-item">50 MP main camera (f/1.8) is the star of the system, featuring Phase Detection Autofocus (PDAF) for quick and precise focusing and Optical Image Stabilization (OIS) to reduce blur from shaky hands or moving subjects.</li>
                    <li className="list-item">8 MP ultra-wide lens (f/2.2) with a 123˚ field of view captures more of the scene in a single shot. Whether you're shooting landscapes or group photos, this sensor helps fit everything into the frame without distortion.</li>
                    <li className="list-item">5 MP macro lens (f/2.4), which is designed for close-up photography. This lens allows users to capture intricate details of small objects, such as textures, patterns, or tiny subjects like flowers and insects, making it ideal for creative photography.</li>
                </ul>
                <br />
                <table className='table table-bordered border-primary'>
                    <tbody>
                        <tr>
                            <td>SIM</td>
                            <td>Nano-SIM + Nano-SIM</td>
                        </tr>
                        <tr>
                            <td>NETWORK</td>
                            <td>GSM / HSPA / LTE / 5G</td>
                        </tr>
                        <tr>
                            <td>OPERATING SYSTEM</td>
                            <td>Android 15, One UI 7</td>
                        </tr>
                        <tr>
                            <td>CHIPSET</td>
                            <td>Qualcomm SM6475-AB Snapdragon 6 Gen 3 (4 nm)</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>Octa-core (4x2.4 GHz Cortex-A78 & 4x1.8 GHz Cortex-A55)</td>
                        </tr>
                        <tr>
                            <td>MEMORY</td>
                            <td>128GB 6GB RAM</td>
                        </tr>
                        <tr>
                            <td>DISPLAY</td>
                            <td>6.9 inches, 116.9 cm2 (~92.5% screen-to-body ratio) <br />
                            Resolution: 1440 x 3120 pixels, 19.5:9 ratio (~498 ppi density) <br />
                            Protection: Corning Gorilla Armor 2</td>
                        </tr>
                        <tr>
                            <td>CAMERA(Rear)</td>
                            <td>
                                50 MP, f/1.8, (wide), 1/1.96", PDAF, OIS
                                8 MP, f/2.2, 123˚, (ultrawide), 1/4.0", 1.12µm
                                5 MP, f/2.4, (macro)
                            </td>
                        </tr>
                        <tr>
                            <td>CAMERA(Front)</td>
                            <td>12 MP, f/2.0, (wide)</td>
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
                                Fingerprint (under display, optical), accelerometer, gyro, proximity, compass <br />
                                Circle to Search
                            </td>
                        </tr>
                        <tr>
                            <td>BATTERY</td>
                            <td>
                                <ul>
                                    <li>Type: Li-Ion 5000 mAh</li>
                                    <li>Charging: 45W wired</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p className='lead'>
                    Delivery Period:  Delivery to locations in Lagos is within 24 hours after payment confirmation. Other states are within 3-5 business days
                </p>
                <h5>Battery That Keeps Up With You</h5>
                <p className='lead'>
                    The Samsung Galaxy A36 is powered by a 5000mAh battery, providing all-day usage on a single charge. Whether streaming, gaming, or multitasking, it ensures long-lasting performance. The device also supports fast charging, allowing for quick power boosts when needed
                </p>
                <h5>Why Choose the Galaxy A36</h5>
                <p className='lead'>
                    The Samsung Galaxy A36 offers a large display, versatile 50 MP camera, long-lasting 5000mAh battery, 5G connectivity, and regular software updates. It’s a great mid-range choice for users seeking performance, reliability, and modern features.
                </p>
                <br />
            </div>
        </>
    )
}
export default SamsungGalaxyA36;