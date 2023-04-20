import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


const CustomSection: React.FC = () => {
    return <div className='bg-[url("./src/assets/images/bg-section.png")] px-2 py-20 max-md:py-10' id='reviews'>
        <div className='max-w-[1400px] mx-auto  !flex !flex-col space-y-5'>

            <h2 className='text-white text-3xl font-extralight text-center max-md:text-2xl'>STYLISH AXURE DESIGN</h2>

            <div className='flex justify-center'>
                <div className='w-[100px] h-[2.4px]  bg-white'></div>

            </div>

            <p className='text-white text-lg font-medium  max-md:pr-0 px-5 text-center max-md:!text-sm'>Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!</p>

            <div className='flex justify-center'>
                <Button className='w-[130px] h-[36px] rounded-none hover:!border-orange-500 hover:!text-orange-500 text-md mx-auto  text-white'>Download</Button>


            </div>


        </div>
    </div>
}
export default CustomSection;