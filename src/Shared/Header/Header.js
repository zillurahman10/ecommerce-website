import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const products = [
        {
            id: 1,
            name: 'Apple AirPods (2nd Generation)',
            price: 119,
            discount: '20%',
            img: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg'
        },
        {
            id: 2,
            name: 'Apple EarPods with 3.5mm Headphone Plug - White',
            price: 90,
            discount: '10%',
            img: 'https://m.media-amazon.com/images/I/410eivKV4DL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 3,
            name: 'DualShock 4 Wireless Controller for PlayStation 4 - Jet Black',
            price: 59,
            discount: '',
            img: 'https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 4,
            name: 'Kasa Smart Light Switch HS200, Single Pole, Needs Neutral Wire, 2.4GHz Wi-Fi Light Switch Works with Alexa and Google Home, UL Certified, No Hub Required , White',
            price: 14,
            discount: '25%',
            img: 'https://m.media-amazon.com/images/I/71nMzhO05jL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 5,
            name: 'LAMAZE Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories, Multi, one Size (L27901B)',
            price: 14,
            discount: '32%',
            img: 'https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 6,
            name: 'Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT',
            price: 54,
            discount: '22%',
            img: 'https://m.media-amazon.com/images/I/71q-KKcG4aL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 7,
            name: 'Philips AVENT Microwave Steam Sterilizer for Baby Bottles, Pacifiers, Cups and More, SCF281/05',
            price: 19,
            discount: '',
            img: 'https://m.media-amazon.com/images/I/819Ym3vTv-L._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 8,
            name: 'Amazon Brand - Presto! Flex-a-Size Paper Towels, Huge Roll, 12 Count = 38 Regular Rolls',
            price: 27,
            discount: '',
            img: 'https://m.media-amazon.com/images/I/718xN2kSZ1L._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 9,
            name: 'Nintendo Switch Pro Controller',
            price: 71,
            discount: '15%',
            img: 'https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 10,
            name: 'NETGEAR Wi-Fi Range Extender EX3700 - Coverage Up to 1000 Sq Ft and 15 Devices with AC750 Dual Band Wireless Signal Booster & Repeater (Up to 750Mbps Speed), and Compact Wall Plug Design',
            price: 36,
            discount: '10%',
            img: 'https://m.media-amazon.com/images/I/61z5oOk5fzL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
            id: 12,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/710o0VupScL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 13,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71KQ0DIiTqL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 14,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71szqCoFfYL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 15,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71AcCbKg3IL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 16,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/81IQnaKr3FL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 17,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/61jefBy3DlL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 18,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71UQhfJQFkL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 19,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/61EMHEjsz-L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 20,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/91HqVhet2xL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 21,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/51WjRQyMp7L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 22,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/51lcBQJtssL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 23,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71LHga3lg2L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 24,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/610qD1Qyr4L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 25,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/91JqNJYhR2L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 26,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/61MDcJjN8JL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 27,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/41TQwIs4d-S._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 28,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/81hN0aBmHtL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 29,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/610wZP7f+-L._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 30,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/51cdq8ZovBL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 31,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/61fyoyHT4GL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 32,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/91Ag2VhGCoL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 33,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/81iV5-cxHPL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 34,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/914dkUE8j0L._MCnd_AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 35,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/91++RyE-DRL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 36,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/91HuntPlNGL._MCnd_AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 37,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/81IO-tSRUeL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 38,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/81mfx+IzJiL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 39,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/71pYEho0sEL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
            id: 40,
            name: '',
            price: 1,
            discount: '1%',
            img: 'https://m.media-amazon.com/images/I/8191Ha5NCNL._AC_UL480_FMwebp_QL65_.jpg'
        },
    ]
    return (
        <div className='d-flex justify-content-between container mt-3'>
            <div className=''>
                <Link className='text-decoration-none text-dark' to='/'>
                    <h3>LOGO</h3>
                </Link>
            </div>
            <div className='links-section'>
                <Link className='text-decoration-none' to='/'>Home</Link>
                <Link className='text-decoration-none' to='/about'>About</Link>
                <Link className='text-decoration-none' to="help">Help</Link>
                <Link className='text-decoration-none' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;