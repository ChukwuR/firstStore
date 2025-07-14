import React, {useState} from 'react';
import style from './product.module.css'
import './product.css'
import AddItem from './AddItem';
import Cart from './Cart';

function DIGIFONGORILLAXEPowerbank(){

    return(
        <>
            <div className="container" style={{marginTop:'80px'}}>
                <h1>DIGIFON GORILLA XE POWERBANK</h1>
                <p>Availabilty: <span style={{color:'green', fontWeight:'bold'}}>In Stock</span></p>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={style.card}>
                            <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/3/_/3_5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:'100px'}}>
                        <div className={style.card}>
                            <p className={style.feature}>
                                <h3>
                                    <span className='currentPricePage'>NGN 19,000.00</span> <br />
                                    <br />
                                    DIGIFON GORILLA XE POWERBANK 20000MAH
                                </h3>
                                <br />
                                <ul className='lead list-group'>
                                    <li className='list-item'>Battery: 20,000mAh lithium-polymer, 3.7V</li>
                                    <li className="list-item">Input: 5V-2A, 18W USB-C PD</li>
                                    <li className='list-item'>Output: 22.5W USB-C PD, 22.5W USB-A QC3.0</li>
                                    <li className='list-item'>Dimensions: 142 x 69 x 28mm</li>
                                    <li className='list-item'>Superior quality</li>
                                    <li className='list-item'>Great user experience</li>
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
                <h4>DIGIFON GORILLA XE POWERBANK 20000MAH</h4>
                <p className='lead'>
                    Introducing the DIGIFON Gorilla XE Powerbank 20000mAh: a powerhouse of portable energy designed to elevate your charging experience to new heights. Crafted with superior quality and engineered for exceptional user convenience, this power bank stands out with its top-tier features. Let's delve into the three key attributes that make it a standout accessory:
                    <br />
                    1. High-Capacity Lithium-Polymer Battery: At its core lies a robust 20,000mAh lithium-polymer battery, providing ample power to keep your devices running for extended periods. Whether you're on a long journey or navigating a busy day, this formidable capacity ensures that you stay connected without interruption. Say goodbye to low battery anxiety as the DIGIFON Gorilla XE Powerbank delivers reliable power when you need it most.
                    <br />
                    2. Versatile Charging Capabilities: Equipped with advanced charging technology, this power bank offers versatility like no other. With a 22.5W USB-C Power Delivery (PD) port and a 22.5W USB-A Quick Charge 3.0 port, you can charge a wide range of devices at optimal speeds. Whether it's your smartphone, tablet, or other USB-powered gadgets, experience rapid and efficient charging without compromise. Moreover, the inclusion of a USB-C PD input with 18W ensures swift recharging of the power bank itself, minimizing downtime and keeping you powered up for your next adventure.
                    <br />
                    3. Compact and Travel-Friendly Design: Despite its formidable power, the DIGIFON Gorilla XE Powerbank boasts a sleek and compact design, making it the perfect travel companion. With dimensions of 142 x 69 x 28mm, it slips effortlessly into your bag or pocket, ensuring convenient access whenever you need a boost. Whether you're commuting, camping, or embarking on a globetrotting adventure, its portable form factor ensures that you can carry reliable power wherever you go. Experience the freedom to stay connected on your terms, without being tethered to a wall socket.
                    <br />
                    In conclusion, the DIGIFON Gorilla XE Powerbank 20000mAh redefines portable charging with its superior quality, exceptional user experience, and a host of innovative features. Stay powered up, stay connected, and elevate your charging game with this indispensable accessory by your side.
                </p>
            </div>
        </>
    )
}
export default DIGIFONGORILLAXEPowerbank;