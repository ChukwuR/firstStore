import React, {useEffect} from "react";
import './aboutPreview.css'

function AboutPreview(){

    useEffect(() => {
            const items = document.querySelectorAll('.sliderFour .listFour .itemFour');
            let countItem = items.length;
            let itemActive = 0;
        
            const showSlider = () => {
              const current = document.querySelector('.sliderFour .listFour .itemFour .item-activeFour');
              if (current) current.classList.remove('active');
              items[itemActive].classList.add('active');
            };
        
            const nextSlide = () => {
              itemActive = (itemActive + 1) % countItem;
              showSlider();
            };
        
            const interval = setInterval(nextSlide, 6000);
        
            return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return(
        <>
            <div className="sliderFour" style={{height:'500px', borderRadius:'10px'}}>
                <div className="listFour">
                    <div className="item-activeFour" id="item-activeFour">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/736/644/small_2x/abstract-3d-modern-luxury-banner-design-template-golden-wave-paper-cut-with-gold-ribbon-lines-on-brown-background-vector.jpg" alt="" />
                        <div className="content shadow-dance-container">
                            <p className="card container qualityTxtFour shadow-dance-text">
                                Get to Know About Us
                            </p>
                        </div>
                    </div>
                    <div className="itemFour">
                        <img src="https://images.pexels.com/photos/22491144/pexels-photo-22491144/free-photo-of-smart-home-devices.jpeg" alt="" />
                        <div className="content shadow-dance-container">
                            <p className="card container qualityTxtFour shadow-dance-text">
                                Get to Know About Us
                            </p>
                        </div>
                    </div>
                    <div className="itemFour">
                        <img src="https://st.depositphotos.com/1084193/1999/v/450/depositphotos_19997073-stock-illustration-great-light-futuristic-computer-technology.jpg" alt="" />
                        <div className="content shadow-dance-container">
                            <p className="card container qualityTxtFour shadow-dance-text">
                                Get to Know About Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPreview;