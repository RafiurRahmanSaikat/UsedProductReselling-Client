import React from 'react';
import LOGO from '../assets/LOGO.ico';
const Footer = () => {
    const footerNavs = [
        {
            href: '/',
            name: 'About'
        },
        {
            href: '/',
            name: 'Blog'
        },
        {
            href: '/',
            name: ''
        },
        {
            href: '/',
            name: 'Team'
        },
        {
            href: '/',
            name: 'Careers'
        },

        {
            href: '/',
            name: 'Suuport'
        }
    ]
    return (
        <>
           <footer className="text-gray-800 bg-white px-4 py-5 max-w-screen-xl mx-auto">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src={LOGO} className="w-32 justify-center mx-auto " alt='' />
                <p className="leading-relaxed mt-2 text-xl">
                Dream Bike is a buy & sell website where you can buy any used bikes in a reasonable price .
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                            <a  href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-center mx-auto sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Dream Bike All rights reserved.
                </div>
               
            </div>
            
          
        </footer>
        </>
    );
};

export default Footer;