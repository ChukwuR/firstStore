import './footer.css'

function Footer(){

    return(
        <>
            <div className='bg-dark' style={{border:'5px solid cyan', color:'white'}}>
                <div className="row container footerWrap" >
                    <div className='col-sm-10 col-md-5 col-lg-2'>
                        <h4>Contact Info</h4>
                        <ul className='lead'>
                            <li>About Us</li>
                            <li>Trade In</li>
                            <li>How to Pay</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>

                    <div className='col-sm-10 col-md-5 col-lg-2'>
                        <h4>Help</h4>
                        <ul className='lead'>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Warranty Policy</li>
                            <li>Privacy and Cookie</li>
                            <li>Policy</li>
                        </ul>
                    </div>

                    <div className='col-sm-10 col-md-5 col-lg-2'>
                        <h4>Info</h4>
                        <ul className='lead'>
                            <li>My Account</li>
                            <li>Older History</li>
                        </ul>
                    </div>

                    <div className='col-sm-10 col-md-5 col-lg-2'>
                        <h4>Contact Us</h4>
                        <ul className='lead'>
                            <li>Active 24/7</li>
                            <li>+2348020770820</li>
                            <li>Gbenga Akinola Street, Ikorodu, Lagos</li>
                        </ul>
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