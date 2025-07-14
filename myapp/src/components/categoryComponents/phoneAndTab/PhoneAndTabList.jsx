import PhoneAndTab from "../PhoneAndTab"
import './phoneAndTabList.css'
import { Link } from "react-router-dom";
import style from '../category.module.css'
import Footer from '../../Footer'
// import { useCart } from "../CartContext";
// import AddCartTwo from '../AddCartTwo'
// import Checkout from "../Checkout";
import CatergoryLink from "../../CategoryLink";

// phone items
import audioOne from './phoneImg/audioOne.jpg'

function PhoneAndTabList(){

    // const {addToCart} = useCart();

    const phoneProduct = [
        {
            id:'1',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/1669193/1.jpg?5412',
            productName:'Hmd Pulse Pro 6.56" (256GB/8GB)',
            productPrice:'NGN 190,000.00'
        },

        {
            id:'2',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/2734883/1.jpg?8805',
            productName:'Infinix Hot 50 Pro+ 6.78" 8GB RAM/128GB ROM',
            productPrice:'NGN 256,317.00'
        },

        {
            id:'3',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/3101593/1.jpg?0811',
            productName:'Oraimo Traveler 4 20000mAh 10.5W Power Bank',
            productPrice:'NGN 13,446.00'
        },

        {
            id:'4',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/0813292/1.jpg?6446',
            productName:'Samsung Galaxy Z Fold 5 1TB',
            productPrice:'NGN 2,624,500.00'
        },

        {
            id:'5',
            productPhoto:`${audioOne}`,
            productName:'Jbl Charge 5 Portable Bluetooth Speaker',
            productPrice:'NGN 217,999.00'
        },

        {
            id:'6',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/5478143/1.jpg?8048',
            productName:'Samsung Galaxy Z Flip 5 512GB',
            productPrice:'NGN 1,477,000.00'
        },

        {
            id:'7',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/7876882/1.jpg?2458',
            productName:'Maxim Tesserat ​T56 Ultra Sleek 11 Tablet 12GB/256GB',
            productPrice:'NGN 237,491.00'
        },

        {
            id:'8',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/3817773/1.jpg?7736',
            productName:'Infinix XE23 ENC Wireless Earbuds',
            productPrice:'NGN 8,500.00'
        },

        {
            id:'9',
            productPhoto:'https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/i/t/itel_a70_1.png',
            productName:'Itel A70 3GB+128GB',
            productPrice:'NGN 107,900.00'
        },

        {
            id:'10',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/6508372/1.jpg?1655',
            productName:'Zealot B38 Wireless BT Headphone',
            productPrice:'NGN 21,360.00'
        },

        {
            id:'11',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2542404/1.jpg?3536',
            productName:'itel S24 6.6 8GB RAM/128GB ROM',
            productPrice:'NGN 120,000.00'
        },

        {
            id:'12',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8715403/1.jpg?8230',
            productName:'Guixia Air39 Wireless Bluetooth',
            productPrice:'NGN 5,607.00'
        },

        {
            id:'13',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4554283/1.jpg?3620',
            productName:'Apple iPhone 15 Pro Max 512GB',
            productPrice:'NGN 2,074,800.00'
        },

        {
            id:'14',
            productPhoto:'https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/s/a/samsung_galaxy_s24_plus-removebg-preview.png',
            productName:'Samsung Galaxy S24 FE 8GB 256GB',
            productPrice:'NGN 986,000.00'
        },

        {
            id:'15',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/3846692/1.jpg?3209',
            productName:'Maxim ​MatrixPad Ultra Slim 10.1" 6GB 128GB',
            productPrice:'NGN 151,991.00'
        },

        {
            id:'16',
            productPhoto:'https://slot.ng/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/i/t/itel_p55-1-removebg-preview.png',
            productName:'Itel P55 6GB+128GB 5G',
            productPrice:'NGN 121,636.00'
        },

        {
            id: '17',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/8367953/1.jpg?2143',
            productName: 'New Age 55000 MAh',
            productPrice:'49,450'
        },

        {
            id:'18',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/2903383/1.jpg?9535',
            productName:'Tecno Pop 9 6.67" 4GB RAM / 128GB ROM',
            productPrice:'NGN 132,900.00'
        },

        {
            id:'19',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/9534833/1.jpg?2731',
            productName:'Itel S24 4GB+128GB',
            productPrice:'NGN 138,700.00'
        },

        {
            id:'20',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/0952392/1.jpg?1263',
            productName:'Oraimo PowerBox-600 60000mAh',
            productPrice:'94,990'
        }
    ];

    const groupedPhoneProduct = {
        Smartphones: phoneProduct,
    };

    return(
        <>
            {/* <div className="phoneTamplete">
                <p>
                    Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                </p>
            </div> */}
            <div className="phoneBackground">
                <div className="phoneTamplete">
                    <p>
                        Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                    </p>
                </div>    

                <div className="container pt-4">
                    <CatergoryLink/>
                </div>

                <div className="container neon-container mt-4 pb-5">
                    <div className="productContainer row mt-5">
                        <PhoneAndTab phoneProduct={groupedPhoneProduct} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default PhoneAndTabList