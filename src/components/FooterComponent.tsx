import { Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import { BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BiWifi } from 'react-icons/bi';
import { TfiGoogle } from 'react-icons/tfi';

const FooterComponent: React.FC = () => {


    return <div className='bg-black px-2 '>
        <div className='max-w-[1400px] mx-auto '>
            <Footer className='!bg-black text-center text-white text-md'>
                <div className='flex justify-center items-center space-x-5 max-md:space-x-3 mb-4 text-3xl'>
                    <FaFacebookF />
                    <BsTwitter />
                    <TfiGoogle />
                    <BsPinterest />
                    <FaInstagram />
                    <BiWifi />

                </div>
                <p>© 2021 Axure Themes</p></Footer>
        </div>
    </div>
}
export default FooterComponent;