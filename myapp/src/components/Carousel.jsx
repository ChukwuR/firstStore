import { Link } from 'react-router-dom';
import './carousel.css'
// import XiaomiRedmiA5 from './productComponents/XiaomiRedmiA5';
import { useEffect, useRef } from 'react';

function Carousel(){

    const carouselRef = useRef(null);

//     useEffect(() => {
//   const carousel = carouselRef.current;
//   if (!carousel) return;

//   const items = carousel.querySelectorAll('.carousel-item');

//   items.forEach((el) => {
//     let next = el.nextElementSibling;
//     for (let i = 1; i < 5; i++) { // Adjust this based on how many items you want shown
//       if (!next) next = items[0];
//       const clone = next.querySelector('.col-4, .col-sm-4, .col-md-2, .col-lg-2')?.cloneNode(true);
//       if (clone) {
//         el.querySelector('.row').appendChild(clone);
//       }
//       next = next.nextElementSibling;
//     }
//   });
// }, []);


    return(
        <>
            <div className="container" style={{marginTop:'130px'}}>
                <h2>
                    Live Promotions
                    available on request
                    Ongoing Pre Order <br />
                    Exclusive Live Promotions - Shop & Save Now!
                </h2>
            </div>
            <div className="container-fluid caroWrap">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-type="multi" ref={carouselRef}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="groupImgs row" style={{justifyContent:'center'}}>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/xiaomiRedmiA5' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/r/e/redmi_without_bg.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Xioami Redmi A5 4GB + 128GB</span> <br /> <span className='currentPrice'>NGN 109,200</span> <br /> <del>NGN 113,200.00</del></p>
                                    </Link>
                                </div>

                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/InfinixHot50ProPlus' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/u/n/untitled-1_27.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Infinix Hot 50 Pro Plus 8GB + 128GB</span> <br /> <span className='currentPrice'>NGN 246,400.00</span> <br /> <del>NGN 260,400.00</del></p>
                                    </Link>
                                </div>

                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/VivoY28' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/u/n/untitled-19_1.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Vivo Y28 8GB + 256GB</span> <br /> <span className='currentPrice'>NGN 239,800.00</span> <br /> <del>NGN 279,800.00</del></p>
                                    </Link>
                                </div>

                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/AppleiWatchSeries8GPS' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/1/2/122.0.jpg" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Apple iWatch Series 8 GPS Only (45min)</span> <br /> <span className='currentPrice'>NGN 540,000.00</span></p>
                                    </Link>
                                </div>

                                <div className="col-4 col-sm-4 col-md-2 col-lg-2 mt-2">
                                    <Link to='/SamsungGalaxyBuds2Pro' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/9/0/90.galaxy-buds2-pro-removebg-preview.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Samsung Galaxy Buds 2 Pro</span> <br /> <span className='currentPrice'>NGN 170,000.00</span></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="groupImgs row" style={{justifyContent:'center'}}>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/XiaomiRedmiA3Pro' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/x/i/xiaomi_redmi_a3x_3gb-1.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Xiaomi Redmi A3 Pro 4GB + 128GB</span> <br /> <span className='currentPrice'>NGN 119,900.00</span> <br /> <del>NGN 122,900.00</del></p>
                                    </Link>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/DIGIFONGORILLAXEPowerbank' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/3/_/3_5.jpg" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>DIGIFON GORILLA XE Powerbank 20000MAH</span> <br /> <span className='currentPrice'>NGN 19,000.00</span></p>
                                    </Link>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <Link to='/SamsungGalaxyA36' className='linkTxt'>
                                        <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/2/2/222.png" className="d-block w-100" alt="..." />
                                        <p style={{textAlign:'center'}}> <span className='productName'>Samsung Galaxy A36 6GB + 128GB 5G</span> <br /> <span className='currentPrice'>NGN 409,000.00</span> <br /> <del>NGN 479,000.00</del></p>
                                    </Link>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/u/n/untitled_29.png" className="d-block w-100" alt="..." />
                                    <p style={{textAlign:'center'}}> <span className='productName'>SPORTY DARO4 Next Electric Hair Cutter</span> <br /> <span className='currentPrice'>NGN 21,700.00</span></p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                    <img src="https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/u/n/untitled_33.png" className="d-block w-100" alt="..." />
                                    <p style={{textAlign:'center'}}> <span className='productName'>SPORTY J62 Jove table lamp mobile Power bank (30000mAh)</span> <br /> <span className='currentPrice'>NGN 28,800.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Carousel;