import '../../computing/computerList.css'
import Game from '../../Game';
import './gameList.css'
import { Link } from "react-router-dom";
import style from '../../category.module.css'
import Footer from '../../../Footer'
import CatergoryLink from '../../../CategoryLink';

function GameList(){

    const gameProduct = [
        {
            id:'1',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/638018/1.jpg?3964',
            productName:'Sony PS5 Controller-PlayStation 5',
            productPrice:'NGN 98,900.00'
        },

        {
            id:'2',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/961517/1.jpg?5654',
            productName:'Dobe Ps5 Controller Fast Charging Led Light',
            productPrice:'NGN 14,999.00'
        },

        {
            id:'3',
            productPhoto:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/5159011/1.jpg?6458",
            productName:'Sony Ps4 Console 500 GB WITH 2 CONTROLLER',
            productPrice:'NGN 239,500.00'
        },

        {
            id:'4',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/1927114/1.jpg?8118',
            productName:'Finger Thumb Sleeve Gloves For Gamer',
            productPrice:'NGN 4,400.00'
        },

        {
            id:'5',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/734099/1.jpg?3467',
            productName:'Original Wireless PS4 Pad With Touchpad Lightbar',
            productPrice:'NGN 65,000.00'
        },

        {
            id:'6',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/576118/1.jpg?6248',
            productName:'Sony PS3 Super Slim - 500GB Console',
            productPrice:'NGN 149,000.00'
        },
        
        {
            id:'7',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/969218/1.jpg?3987',
            productName:'Sony PlayStation 4-Pro 1TB Console',
            productPrice:'NGN 329,500.00'
        },

        {
            id:'8',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/6311431/1.jpg?3960',
            productName:'Wired Luminescent Gaming Mouse',
            productPrice:'NGN 6,303.00'
        },

        {
            id:'9',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/2915042/1.jpg?7831',
            productName:'Warner Bros. Mortal Kombat 11 Ultimate (PS4)',
            productPrice:'NGN 32,900.00'
        },

        {
            id:'10',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/5955204/1.jpg?6186',
            productName:'EA Sports Electronic Arts EA SPORT PLAYSTATION 5 FC25',
            productPrice:'NGN 52,500.00'
        },

        {
            id:"11",
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/4987412/1.jpg?0023',
            productName:'Mobile Game Controller For PUBG / Call Of Duty / Fortnite',
            productPrice:'NGN 11,880'
        },

        {
            id:'12',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/9503842/1.jpg?5090',
            productName:'Dobe PS4 Pad Charger PS4 Dual Charging Dock Station TP4',
            productPrice:'NGN 12,800.00'
        },

        {
            id:'13',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/3326261/1.jpg?8186',
            productName:'Rockstar Games Playstation 5 Gta V',
            productPrice:'NGN 34,900.00'
        },

        {
            id:'14',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/330389/1.jpg?1074',
            productName:'Playstation God Of War - Playstation',
            productPrice:'NGN 25,500.00'
        },

        {
            id:'15',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/9026912/1.jpg?3152',
            productName:'Santa Monica God Of War: Ragnarok PS4',
            productPrice:'NGN 52,400.00'
        },

        {
            id:'16',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/991546/1.jpg?6265',
            productName:'Activision Call Of Duty: Advanced Warfare - PS4',
            productPrice:'NGN 28,995.00'
        }
    ]

    const groupedGameProduct = {
        'Game On': gameProduct,
    };

    return(
        <>
            <div className='gameBackground'>
                <div className="gameTamplete">
                    <p>
                        Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                    </p>
                </div>

                <div className="container pt-4">
                    <CatergoryLink/>
                </div>

                <div className="container neon-container mt-4">
                    <div className="productContainer mt-5">
                        <Game gameProduct={groupedGameProduct} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default GameList;