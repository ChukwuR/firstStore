import './service.css'

function Service(){
    return(
        <>
            <div className="container" id='serviceWrap' style={{marginTop:'90px'}}>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="bi bi-truck"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>Flexible Payment</span> <br />
                                <span style={{fontWeight:'300'}}>Conveniently Pay on Delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="bi bi-chat"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>24/7 Help Center</span> <br />
                                <span style={{fontWeight:'300'}}>Dedicated online and offline support</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>Shop With Confidence</span> <br />
                                <span style={{fontWeight:'300'}}>Buy Now Pay Later</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="bi bi-wallet2"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>Safe Payment</span> <br />
                                <span style={{fontWeight:'300'}}>100% Secure Payment</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="bi bi-tags"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>Only Best</span> <br />
                                <span style={{fontWeight:'300'}}>Brands</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" id='serviceCard'>
                            <div id="serviceIcon">
                                <i class="bi bi-headset"></i>
                            </div>
                            <div id="serviceTxt">
                                <span style={{fontWeight:'bold'}}>Friendly Customer</span> <br />
                                Service <br />
                                <span style={{fontWeight:'300'}}>1-Year Warranty and 7-Day Return Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;