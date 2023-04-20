import { Button, Drawer } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll';

interface typeprops {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<typeprops> = ({ open, setOpen }) => {
    const showDrawer = () => {
        setOpen(true);
    };

    const onCloseDrawer = () => {
        setOpen(false);
    };


    return <Header className='bg-black h-[62px] p-2 max-md:h-[52px]  w-[100%] shadow-xl'>
        <div className='flex justify-between !items-center h-[100%] max-w-[1400px] mx-auto'>
            <div className="logo" >
                <img src='./src/assets/images/logo.png' className='w-[100px] h-[30px] max-md:h-[26px] max-md:w-[80px]' />
            </div>
            <div className='flex justify-end !items-center space-x-3 max-md:hidden '>
                <ScrollLink to="features" smooth={true}>
                    <Button type='text' className='text-white font-medium text-base hover:!text-orange-500'>Features</Button>
                </ScrollLink>
                <ScrollLink to="about" smooth={true}>
                    <Button type='text' className='text-white font-medium text-base hover:!text-orange-500'>About</Button>
                </ScrollLink>
                <ScrollLink to="pricing" smooth={true}>
                    <Button type='text' className='text-white font-medium text-base hover:!text-orange-500'>Pricing</Button>
                </ScrollLink>
                <ScrollLink to="reviews" smooth={true}>
                    <Button type='text' className='text-white font-medium text-base hover:!text-orange-500'>Reviews</Button>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true}>
                    <Button type='text' className='text-white font-medium text-base hover:!text-orange-500'>Contact</Button>
                </ScrollLink>

            </div>
            <AiOutlineMenu className='max-md:inline hidden text-white  hover:!text-orange-500 cursor-pointer text-xl font-semibold' onClick={showDrawer} />
            <Drawer

                placement="right"
                closable={false}
                onClose={onCloseDrawer}
                open={open}
                getContainer={false}
                width={"150px"}
                className='!bg-black !mr-[0px] '
            >
                <ScrollLink to="features" smooth={true}>
                    <Button type='text' className='text-white block my-5 border-2  font-medium text-base hover:!text-orange-500'>Features</Button>
                </ScrollLink>
                <ScrollLink to="about" smooth={true}>
                    <Button type='text' className='text-white block my-5 border-2  font-medium text-base hover:!text-orange-500'>About</Button>
                </ScrollLink>
                <ScrollLink to="pricing" smooth={true}>
                    <Button type='text' className='text-white block my-5 border-2  font-medium text-base hover:!text-orange-500'>Pricing</Button>
                </ScrollLink>
                <ScrollLink to="reviews" smooth={true}>
                    <Button type='text' className='text-white block my-5 border-2  font-medium text-base hover:!text-orange-500'>Reviews</Button>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true}>
                    <Button type='text' className='text-white block my-5 border-2  font-medium text-base hover:!text-orange-500'>Contact</Button>
                </ScrollLink>



            </Drawer>
        </div>

    </Header>
}
export default Navbar;