import './computerList.css'
import Computer from '../Computer';
import { Link } from "react-router-dom";
import style from '../category.module.css'
import Footer from '../../Footer';
import CatergoryLink from '../../CategoryLink';

function ComputerList(){

    const computerProduct = [
        {
            id:'1',
            productPhoto:'https://images-cdn.ubuy.co.in/635ab843e719ef55c37b5824-original-xiaomi-mi-wifi-router-4c-64-ram.jpg',
            productName:'XIAOMI Router 4C 300Mbps',
            productPrice:'NGN 19,116.00'
        },
        
        {
            id:'2',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/77/9579004/1.jpg?7044',
            productName:'Ace Elec 14.1 16GB+256GB',
            productPrice:'NGN 226,519.00'
        },

        {
            id:'3',
            productPhoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOAYpvWxvFGZ0rd5GKfUkui7Cdc6W-N_HDw&s',
            productName:'Macbook PRO Laptop A1278 8GB RAM 500GB',
            productPrice:'NGN 212,503.00'
        },

        {
            id:'4',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/8071473/1.jpg?3667',
            productName:'Blueing 15.6" Laptop J4125 8GB+256GB SSD',
            productPrice:'NGN 231,000.00'
        },

        {
            id:'5',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/1422962/1.jpg?4577',
            productName:'Wireless Bluetooth Foldable Keyboard',
            productPrice:'NGN 32,500.00'
        },

        {
            id:'6',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/950456/1.jpg?0716',
            productName:'Backpack Casual Laptop School Bag',
            productPrice:'NGN 7,200.00'
        },

        {
            id:'7',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/2876313/1.jpg?5555',
            productName:'Hp Dual Core 8gbRam PC+MONITOR Window 11',
            productPrice:'NGN 377,000.00'
        },

        {
            id:'8',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/268856/1.jpg?3273',
            productName:'85A Black Laserjet Toner Cartridge- CE285A',
            productPrice:'NGN 8,000.00'
        },

        {
            id:'9',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/4546813/1.jpg?4916',
            productName:'LASA USB3.0 Type A To Micro Usb B Cable - 30CM',
            productPrice:'NGN 6,520.00'
        },

        {
            id:'10',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/2835153/1.jpg?3996',
            productName:'Hp ProBook 11 X360- TOUCH- 512GB SSD/4GB RAM - Intel',
            productPrice:'NGN 250,000.00'
        },

        {
            id:'11',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/8840591/1.jpg?3567',
            productName:'GUEETON 128GB Metal OTG Usb Flash Drive Waterproof',
            productPrice:'NGN 5,110.00'
        },

        {
            id:'12',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/4280183/1.jpg?2662',
            productName:'HD 1080P HDMI-Compatible To VGA Adapter Jack Audio Converter',
            productPrice:'NGN 3,870.00'
        },

        {
            id:'13',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/1728042/1.jpg?8172',
            productName:'EAGEAT 10 Speed Adjustable Laptop Stand+phone Stand',
            productPrice:'NGN 3,135.00'
        },

        {
            id:'14',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/541137/1.jpg?9745',
            productName:'GUEETON Ultra-thin Wireless Mouse 2.4G Bluetooth',
            productPrice:'NGN 4,170.00'
        },

        {
            id:'15',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/8487963/1.jpg?3957',
            productName:'Ace Elec 14.1 Intel(R)Pentium(R) CPU N3700 16GB+128GB',
            productPrice:'NGN 220,442.00'
        },

        {
            id:'16',
            productPhoto:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/293032/1.jpg?7046',
            productName:'Hp ProBook 11 X360- TOUCH- 256GB SSD/4GB RAM +Mouse &USB Light',
            productPrice:'NGN 220,000.00'
        }
    ]

    const groupedComputerProduct = {
        'Build Your Setup': computerProduct,
    };


    return(
        <>
            <div className='computerBackground'>
                <div className="computerTamplete">
                    <p>
                        Explore top tech picks in Gadgets, <br /> Devices, <br /> Accessories, <br /> Smart, <br /> and Power.
                    </p>
                </div>

                <div className="container pt-4">
                    <CatergoryLink/>
                </div>

                <div className="container neon-container mt-4">
                    <div className="productContainer mt-5">
                        <Computer computerProduct={groupedComputerProduct} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ComputerList;