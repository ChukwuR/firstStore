import './footer.css'

function Footer(){

    return(
        <>
            <div className='bg-dark' style={{border:'5px solid cyan'}}>
                <div className="row container">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="card container cardFooter" style={{background:'none'}}>
                            <div className="row">
                                <div className='col-8 col-sm-8 col-md-0 col-lg-0'>
                                    <h4>Contact Info</h4>
                                    <p className='lead' id='cardPTxt'>
                                        About Us <br />
                                        Trade In <br />
                                        How to Pay <br />
                                        Find a Store
                                    </p>
                                </div>
                                <div className='col-4 col-sm-4 col-md-0 col-lg-0'>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                            <li><a class="dropdown-item" href="#">Trade In</a></li>
                                            <li><a class="dropdown-item" href="#">How to Pay</a></li>
                                            <li><a class="dropdown-item" href="#">Find a Store</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="card container cardFooter" style={{background:'none'}}>
                            <div className="row">
                                <div className='col-8 col-sm-8 col-md-0 col-lg-0'>
                                    <h4>Help</h4>
                                    <p className='lead' id='cardPTxt'>
                                        Contact Us <br />
                                        FAQ <br />
                                        Warranty Policy <br />
                                        Privacy and Cookie <br /> Policy
                                    </p>
                                </div>
                                <div className='col-4 col-sm-4 col-md-0 col-lg-0'>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                            <li><a class="dropdown-item" href="#">FAQ</a></li>
                                            <li><a class="dropdown-item" href="#">Warranty Policy</a></li>
                                            <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                                            <li><a href="#" className='dropdown-item'>Privacy and Cookie Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="card container cardFooter" style={{background:'none'}}>
                            <div className="row">
                                <div className='col-8 col-sm-8 col-md-0 col-lg-0'>
                                    <h4>Info</h4>
                                    <p className='lead' id='cardPTxt'>
                                        My Account <br />
                                        Oder Histroy
                                    </p>
                                </div>
                                <div className='col-4 col-sm-4 col-md-0 col-lg-0'>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                            <li><a class="dropdown-item" href="#">Trade In</a></li>
                                            <li><a class="dropdown-item" href="#">How to Pay</a></li>
                                            <li><a class="dropdown-item" href="#">Find a Store</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="card container cardFooter" style={{background:'none'}}>
                            <div className="row">
                                <div className='col-8 col-sm-8 col-md-0 col-lg-0'>
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
                                <div className='col-4 col-sm-4 col-md-0 col-lg-0'>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                            <li><a class="dropdown-item" href="#">Trade In</a></li>
                                            <li><a class="dropdown-item" href="#">How to Pay</a></li>
                                            <li><a class="dropdown-item" href="#">Find a Store</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-flex social-icons neon-container">
                    <div className='facebook neon-text'><i className="bi bi-facebook"></i></div>
                    <div className="instagram neon-text"><i className="bi bi-instagram"></i></div>
                    <div className="xtwiiter neon-text"><i className="bi bi-twitter-x"></i></div>
                </div>
            </div>
        </>
    )
}
export default Footer;