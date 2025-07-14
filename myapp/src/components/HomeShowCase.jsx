import audioImg from './image/homeShowCaseImg/audioAndHeadphone.jpeg'
import './homeShowcase.css'
import hot from './image/homeShowCaseImg/mpSpeaker.jpeg'

function HomeShowCase(){
    return(
        <>
            <div className="container" style={{marginTop:'130px'}}>
                <h2>Electronic Accessories</h2>
                <div className="row" id='homeAccessoriesWrap' style={{marginBottom:'100px'}}>
                    <div className="col-sm-12 col-md-6 col-lg-4 holographic-container">
                        <div className="card holographic-card" id='cardBackground'>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className='m-3' id="homeAccessoriesTxt">
                                        AUDIO & HEADPHONE <br />
                                        Up to 15% Off <br />
                                        <br />
                                        <a href="#"><i class="bi bi-box-arrow-right"></i> Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-5">
                                    <div>
                                        <img src={audioImg} id='cardImage' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 holographic-container">
                        <div className="card holographic-card" id='cardBackground'>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className='m-3' id="homeAccessoriesTxt">
                                        HOT ACCESSORIES <br />
                                        Up to 10% Off <br />
                                        <br />
                                        <a href="#"><i class="bi bi-box-arrow-right"></i> Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-5">
                                    <div>
                                        <img src="https://i.ebayimg.com/images/g/HvoAAOSwNZ9j~9Km/s-l1200.jpg" id='cardImage' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 holographic-container">
                        <div className="card holographic-card" id='cardBackground'>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className='m-3' id="homeAccessoriesTxt">
                                        MOBILE ACCESSORIES <br />
                                        Up to 5% Off <br />
                                        <br />
                                        <a href="#"><i class="bi bi-box-arrow-right"></i> Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-5">
                                    <div>
                                        <img src="https://pacific.com.ng/wp-content/uploads/2023/03/1-3.jpg" id='cardImage' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* top products */}
                <h2 className='mt-5'>Top Products by Category</h2>
                <div className="row mt-3" style={{marginBottom:'88px'}}>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src='https://thumbs.dreamstime.com/b/digital-camera-isolated-white-background-dslr-26192102.jpg' alt="image" id='cardTopProductImg' />
                            Camera & Accessories
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src="https://static.vecteezy.com/system/resources/previews/050/024/997/non_2x/elegant-women-s-watch-with-a-thin-leather-strap-and-delicate-dial-perfectly-isolated-on-a-white-background-highquality-image-free-photo.jpg" alt="image" id='cardTopProductImg' />
                            Watches
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src="https://media.istockphoto.com/id/1271279768/photo/white-headphones-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=OfukAEOmJ_vLzvjP4CfEjmaP5rmkbUTjF3AtUGCQksQ=" style={{height:'110px'}} alt="image" id='cardTopProductImg' />
                            Headphones
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src="https://img.freepik.com/premium-photo/modern-table-lamp-isolated-white-background_798986-413.jpg" style={{height:'110px'}} alt="image" id='cardTopProductImg' />
                            Lamp & Lights
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src="https://thumbs.dreamstime.com/b/realistic-blank-tablet-template-isolated-white-background-43225801.jpg" style={{height:'110px'}} alt="image" id='cardTopProductImg' />
                            Phone & Tablets
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2">
                        <div className="card" id='cardTopProduct'>
                            <img src="https://images-cdn.ubuy.ae/6354fb7516b3847868504015-dc-12v-12-electric-stroke-linear.jpg" style={{height:'110px'}} alt="image" id='cardTopProductImg' />
                            Electric Products
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeShowCase