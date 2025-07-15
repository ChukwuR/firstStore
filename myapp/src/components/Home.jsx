import React, {useEffect} from 'react';
import './Home.css'
import Service from './Service';
import HomeShowCase from './HomeShowCase';
import Preview from './Preview';
import Carousel from './Carousel';
import TampleteCarousel from '../components/TampleteCarousel.jsx';
import Footer from './Footer';

function Home(){

    return(
        <>
            <div className='homeContainer' id='homeWrap'>
                <TampleteCarousel/>

                <Service/>

                <HomeShowCase/>

                <Preview/>

                <Carousel/>

            </div>
            <Footer/>
        </>
    )
}
export default Home;