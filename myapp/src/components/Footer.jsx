import './footer.css'

function Footer(){

    return(
        <>
            <div className='bg-dark' style={{border:'5px solid cyan'}}>
                <div className="row container">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <h4>Contact Info</h4>
                            <p className='lead' id='cardPTxt'>
                                About Us <br />
                                Trade In <br />
                                How to Pay <br />
                                Find a Store
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <h4>Help</h4>
                            <p className='lead' id='cardPTxt'>
                                Contact Us <br />
                                FAQ <br />
                                Warranty Policy <br />
                                Privacy and Cookie <br /> Policy
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <h4>Info</h4>
                            <p className='lead' id='cardPTxt'>
                                My Account <br />
                                Oder Histroy
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <h4>Contact Us</h4>
                            <p className='lead' id='cardPTxt'>
                                Call us 24/7
                                <br />
                                08020770820
                                <br />
                                Gbenga Akinola Street, Ikorodu, <br /> Lagos <br />
                                <i className='facebook'></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;