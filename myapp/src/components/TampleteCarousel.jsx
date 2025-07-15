import React, {useEffect} from "react";
import './tampleteCarousel.css'
import { Link } from "react-router-dom";

function TampleteCarousel(){

    useEffect(() => {
    const items = document.querySelectorAll('.slider .list .item');
    let countItem = items.length;
    let itemActive = 0;

    const showSlider = () => {
      const current = document.querySelector('.slider .list .item.active');
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
            <div className="slider">
                <div className="list">
                    <div className="item-active" id="item-active">
                        <img src="https://img.freepik.com/premium-photo/various-electronic-devices-are-spread-out-blue-background_36682-204844.jpg" alt="" />
                        <div className="content">
                            <p className='container neon-containerTwo' style={{fontSize:'xx-large', fontWeight:'bold'}}>
                                <span className="neon-textTwo" style={{color:'navy'}}>Best Electronic</span> <br />
                                Product Online Shop <br />
                                in The World
                            </p>
                            <p className='lead ms-lg-4'>
                                Our shop provide the perfect & best quality product
                            </p>
                            <Link to='/Category'>
                                <button className='btn btn-secondary liquid ms-lg-4'>Shop Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/16888144/pexels-photo-16888144/free-photo-of-electronic-devices-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="content">
                            <p className='container neon-containerTwo' style={{fontSize:'xx-large', fontWeight:'bold'}}>
                                <span className="neon-textTwo" style={{color:'navy'}}>Best Electronic</span> <br />
                                Product Online Shop <br />
                                in The World
                            </p>
                            <p className='lead ms-lg-4'>
                                Our shop provide the perfect & best quality product
                            </p>
                            <Link to='/Category'>
                                <button className='btn btn-secondary liquid ms-lg-4'>Shop Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img.freepik.com/premium-photo/flat-lay-various-electronic-devices-white-background_14117-592771.jpg" alt="" />
                        <div className="content">
                            <p className='container neon-containerTwo' style={{fontSize:'xx-large', fontWeight:'bold'}}>
                                <span className="neon-textTwo" style={{color:'navy'}}>Best Electronic</span> <br />
                                Product Online Shop <br />
                                in The World
                            </p>
                            <p className='lead ms-lg-4'>
                                Our shop provide the perfect & best quality product
                            </p>
                            <Link to='/Category'>
                                <button className='btn btn-secondary liquid ms-lg-4'>Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TampleteCarousel;