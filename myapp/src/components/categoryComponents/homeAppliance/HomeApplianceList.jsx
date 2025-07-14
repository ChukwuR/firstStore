import '../../categoryComponents/computing/computerList.css'
import HomeAppliance from '../HomeAppliance';
import './homeApplianceList.css'
import { Link } from "react-router-dom";
import style from '../../categoryComponents/category.module.css'
import './homeApplianceList.css'
import Footer from '../../Footer'
import CatergoryLink from '../../CategoryLink';

function HomeApplianceList(){

    const homeApplianceProduct = [
        {
            id:'1',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3448404/1.jpg?1730',
            productName:'Hc Solar Rechargeable Standing Fan',
            productPrice:'NGN 42,532.00'
        },

        {
            id:'2',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/9107893/1.jpg?8751',
            productName:'2L Industrial 8500W Food Crusher',
            productPrice:'NGN 26,499.00'
        },

        {
            id:'3',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/3529804/1.jpg?3633',
            productName:'6L Extra Large Capacity Digital AirFryer',
            productPrice:'NGN 41,580.00'
        },

        {
            id:'4',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/7928204/5.jpg?6362',
            productName:'Rechargeable Light Bulb Home / Outdoors 20W',
            productPrice:'NGN 3,320.00'
        },

        {
            id:'5',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/1149363/1.jpg?4917',
            productName:'Syinix 2.2L Electric Kettle',
            productPrice:'NGN 6,100.00'
        },

        {
            id:'6',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/4106404/1.jpg?2588',
            productName:'SOLITEC STANDING FAN',
            productPrice:'NGN 20,060.00'
        },

        {
            id:'7',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/1.jpg?9530',
            productName:'Hisense WashingMachine',
            productPrice:'NGN 149,350.00'
        },

        {
            id:'8',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/1366804/2.jpg?9372',
            productName:'SunKing Pro Solar',
            productPrice:'NGN 102,900.00'
        },

        {
            id:'9',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/7903114/1.jpg?1380',
            productName:'PowerStation For Home Backup',
            productPrice:'NGN 679,900.00'
        },

        {
            id:'10',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/2502704/1.jpg?6603',
            productName:'1000watts Solar Street Light-3 Bulbs',
            productPrice:'NGN 22,931.00'
        },

        {
            id:'11',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/9518204/1.jpg?7294',
            productName:'TCL 1.5HP Inverter Air Conditioner (TAC-12CSD)',
            productPrice:'NGN 399,999.00'
        },

        {
            id:'12',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/8695353/1.jpg?8902',
            productName:'Skyrun 118L Double Door Top Mount Fridge',
            productPrice:'NGN 253,265.00'
        },

        {
            id:'13',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/0757773/1.jpg?4818',
            productName:'Skyrun 70 Litres Double Door Top Mount Fridge (BCD-85HC)',
            productPrice:'NGN 188,490.00'
        },

        {
            id:'14',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/1049363/1.jpg?2288',
            productName:'Humidifier For Bedroom Cool Mist Humidifiers Quiet USB',
            productPrice:'NGN 7,068.00'
        },

        {
            id:'15',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5575733/1.jpg?6553',
            productName:'EAGEAT 7 Speed Electric Hand Mixer Whisk Egg Beater Cake Baking',
            productPrice:'NGN 7,600.00'
        },

        {
            id:'16',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/200665/1.jpg?4048',
            productName:'Qasa Ac/dc Dry Iron Inverter Frendly -300w 12V QDL-300',
            productPrice:'NGN 14,990.00'
        },

        {
            id:'17',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/6271583/1.jpg?5337',
            productName:'Hikers 32 Inches Frameless Android Smart HD LED TV',
            productPrice:'NGN 124,999.00'
        },

        {
            id:'18',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/374507/1.jpg?4666',
            productName:'Amani 55" 4k UHD ANDROID LED TV+FREE WALL BRACKET-R',
            productPrice:'NGN 368,190.00'
        },

        {
            id:'19',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/0260704/1.jpg?4817',
            productName:'4K TV Box MXQ Pro 5G Smart TV Box Android 10.0 OS 2.4/5G Dual WIFI',
            productPrice:'NGN 19,900.00'
        },

        {
            id:'20',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/8550301/1.jpg?8529',
            productName:'Nexus 43 Inch Smart Frameless LED TV( NX-TV43F621B)',
            productPrice:'NGN 279,999.00'
        }
    ]

    const groupedHomeApplianceProduct = {
        'Make Home Smarter': homeApplianceProduct,
    };

    return(
        <>
            <div className='gameBackground'>
                <div className="homeTamplete">
                    <p>
                        Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                    </p>
                </div>

                <div className="container pt-4">
                    <CatergoryLink/>
                </div>

                <div className="container neon-container mt-4">
                    <div className="productContainer mt-5">
                        <HomeAppliance homeApplianceProduct={groupedHomeApplianceProduct} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default HomeApplianceList;