// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import './category.css'
import style from './categoryComponents/category.module.css'
import CatergoryLink from "./CategoryLink";
import Footer from './Footer'

function Catergory(){
    return(
        <>
            <div className="cateContainer">
                <div className="cateTamplete">
                    <p>
                        Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                    </p>
                </div>
                <div className="container neon-container pt-4">
                    <CatergoryLink/>

                    {/* category contents */}
                    <div className="row cateHeadWrap" style={{marginTop:'100px'}}>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p className="cateHead">Explore our various phones, laptops, accessories <br /> and other electronics here</p>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <img src="https://img.freepik.com/premium-photo/flat-lay-image-various-electronic-devices-gadgets-white-background_14117-475607.jpg" className="cateHeadImg" alt="image" />
                        </div>
                    </div>

                    <div className="row" style={{marginTop:'100px', justifyContent:'center'}}>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="box">
                                <div className="inner">
                                    <span>Up to 10%</span>
                                </div>
                                <div className="inner">
                                    <span>Shop Now!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop:'100px'}}>
                    <h2 className="cateDisplayTxt">Phones and Tablets with Accessories</h2>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/2734883/1.jpg?8805" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2542404/1.jpg?3536" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8715403/1.jpg?8230" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/0952392/1.jpg?1263" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/8367953/1.jpg?2143" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/3846692/1.jpg?3209" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/6508372/1.jpg?1655" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <Link to='/phoneAndTabList'>
                                <div className="card cateCardDisplay">
                                    <img src="https://previews.123rf.com/images/lightstudio/lightstudio1902/lightstudio190200520/117980296-modern-arrow-icon-logo-template.jpg" className="seeMoreImg" style={{borderRadius:'50%'}} alt="image" />
                                    <figcaption className="mb-5" style={{textAlign:'center', textDecoration:'none'}}><i class="bi bi-arrow-up-circle-fill"></i> <br /> See More</figcaption>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop:'100px'}}>
                    <h2 className="cateDisplayTxt">Laptops with Accessories</h2>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/77/9579004/1.jpg?7044" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/8487963/1.jpg?3957" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/541137/1.jpg?9745" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/8840591/1.jpg?3567" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/2835153/1.jpg?3996" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/1728042/1.jpg?8172" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/268856/1.jpg?3273" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <Link to='/computerList'>
                                <div className="card cateCardDisplay">
                                    <img src="https://previews.123rf.com/images/lightstudio/lightstudio1902/lightstudio190200520/117980296-modern-arrow-icon-logo-template.jpg" className="seeMoreImg" style={{borderRadius:'50%'}} alt="image" />
                                    <figcaption className="mb-5" style={{textAlign:'center', textDecoration:'none'}}><i class="bi bi-arrow-up-circle-fill"></i> <br /> See More</figcaption>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop:'100px'}}>
                    <h2 className="cateDisplayTxt">Gaming with Accessories</h2>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/734099/1.jpg?3467" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/969218/1.jpg?3987" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/5159011/1.jpg?6458" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/6311431/1.jpg?3960" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/9503842/1.jpg?5090" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/1927114/1.jpg?8118" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/991546/1.jpg?6265" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <Link to='/gameList'>
                                <div className="card cateCardDisplay">
                                    <img src="https://previews.123rf.com/images/lightstudio/lightstudio1902/lightstudio190200520/117980296-modern-arrow-icon-logo-template.jpg" className="seeMoreImg" style={{borderRadius:'50%'}} alt="image" />
                                    <figcaption className="mb-5" style={{textAlign:'center', textDecoration:'none'}}><i class="bi bi-arrow-up-circle-fill"></i> <br /> See More</figcaption>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop:'100px'}}>
                    <h2 className="cateDisplayTxt">Home Appliances with Accessories</h2>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/0757773/1.jpg?4818" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5575733/1.jpg?6553" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/1.jpg?8751" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/6271583/1.jpg?5337" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/9518204/1.jpg?7294" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/7903114/1.jpg?1380" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card cateCardDisplay">
                                <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/2502704/1.jpg?6603" alt="image" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <Link to='/homeApplianceList'>
                                <div className="card cateCardDisplay">
                                    <img src="https://previews.123rf.com/images/lightstudio/lightstudio1902/lightstudio190200520/117980296-modern-arrow-icon-logo-template.jpg" className="seeMoreImg" style={{borderRadius:'50%'}} alt="image" />
                                    <figcaption className="mb-5" style={{textAlign:'center', textDecoration:'none'}}><i class="bi bi-arrow-up-circle-fill"></i> <br /> See More</figcaption>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <Carousel/> */}
            </div>

            <Footer/>
        </>
    )
}
export default Catergory;