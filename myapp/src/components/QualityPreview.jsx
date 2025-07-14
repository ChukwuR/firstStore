import React, {useEffect} from "react";
import './qualityPreview.css'
import firstImage from './image/headphones-still-life-shot-black-background_740012-11655.jpg'

function QualityPreview(){

    useEffect(() => {
            const items = document.querySelectorAll('.sliderTwo .listTwo .itemTwo');
            let countItem = items.length;
            let itemActive = 0;
        
            const showSlider = () => {
              const current = document.querySelector('.sliderTwo .listTwo .itemTwo .item-activeTwo');
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
            <div className="sliderTwo" style={{height:'250px', borderRadius:'10px'}}>
                <div className="listTwo">
                    <div className="item-activeTwo" id="item-activeTwo">
                        <img src={firstImage} alt="" />
                        <div className="content shadow-dance-containerTwo">
                            <p className="card container qualityTxt shadow-dance-textTwo">
                                Ensure Best <br />
                                Quality Products
                            </p>
                        </div>
                    </div>
                    <div className="itemTwo">
                        <img src="https://images.pexels.com/photos/22491144/pexels-photo-22491144/free-photo-of-smart-home-devices.jpeg" alt="" />
                        <div className="content shadow-dance-containerTwo">
                            <p className="card container qualityTxt shadow-dance-textTwo">
                                Ensure Best <br />
                                Quality Products
                            </p>
                        </div>
                    </div>
                    <div className="itemTwo">
                        <img src="https://images.stockcake.com/public/7/2/5/7258907e-0900-4eba-b281-87ac655bc8bb_medium/assorted-audio-gear-stockcake.jpg" alt="" />
                        <div className="content shadow-dance-containerTwo">
                            <p className="card container qualityTxt shadow-dance-textTwo">
                                Ensure Best <br />
                                Quality Products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QualityPreview;