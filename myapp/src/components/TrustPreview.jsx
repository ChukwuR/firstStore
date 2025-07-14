import React, {useEffect} from "react";
import './trustPreview.css'
import trust from './image/clients.jpg'

function TrustPreview(){

    useEffect(() => {
            const items = document.querySelectorAll('.sliderThree .listThree .itemThree');
            let countItem = items.length;
            let itemActive = 0;
        
            const showSlider = () => {
              const current = document.querySelector('.sliderThree .listThree .itemThree .item-activeThree');
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
            <div className="sliderThree" style={{height:'250px', borderRadius:'10px'}}>
                <div className="listThree">
                    <div className="item-activeThree" id="item-activeThree">
                        <img src={trust} alt="" />
                        <div className="content shadow-dance-containerThree">
                            <p className="card container qualityTxtThree shadow-dance-textThree">
                                Trustworthy <br />
                                Shop by Our Client
                            </p>
                        </div>
                    </div>
                    <div className="itemThree">
                        <img src="https://images.pexels.com/photos/4672717/pexels-photo-4672717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <div className="content shadow-dance-containerThree">
                            <p className="card container qualityTxtThree shadow-dance-textThree">
                                Trustworthy <br />
                                Shop by Our Client
                            </p>
                        </div>
                    </div>
                    <div className="itemThree">
                        <img src="https://media.istockphoto.com/id/1304328310/video/imaginative-visual-business-handshake-with-computer-graphic-of-investment-data.jpg?s=640x640&k=20&c=ULY0RBQfWagzUzSec1DlomU7OYGGQKGkr1hf8jRYpiw=" alt="" />
                        <div className="content shadow-dance-containerThree">
                            <p className="card container qualityTxtThree shadow-dance-textThree">
                                Trustworthy <br />
                                Shop by Our Client
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TrustPreview;