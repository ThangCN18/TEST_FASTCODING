import { Button, Col, Drawer, Form, Input, List, Row, Select, Tabs } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineMenu } from 'react-icons/ai'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsKeyboard } from 'react-icons/bs'
import { IoMdFlash } from 'react-icons/io'


const OurProcess: React.FC = () => {

    return <div className='bg-[#ffffff] px-2 py-40 max-md:py-16'>

        <div className='max-w-[1400px] mx-auto '>
            <h2 className='text-gray-900 text-4xl  max-md:text-3xl font-bold ml-5 max-md:ml-0 text-center  max-md:w-[100%]  mb-7'>WHY THIS IS AWESOME</h2>
            <div className='flex justify-center mb-5'>
                <div className='w-[100px] h-[2.4px]  bg-orange-400'></div>

            </div>

            <p className='text-gray-500 text-lg font-medium  max-md:pr-0 text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



            <Row className='!justify-between max-md:!flex-col-reverse  max-md:space-y-10 items-center mt-7'>
                <Col xl={8} lg={12} md={12} sm={24} xs={24} className='  max-md:mx-auto overflow-hidden flex flex-col justify-center items-center space-y-5 mt-7 mx-auto'>
                    <div className='text-3xl text-orange-500 border-[2px] p-2 max-md:!text-md border-orange-500 rounded-full'><FaRegLightbulb /></div>
                    <h2 className='text-gray-900 text-2xl max-md:text-2xl font-bold ml-5 max-md:ml-0 max-md:text-center  max-md:w-[100%]'>Thoughtful Design</h2>


                    <p className='text-gray-500 text-lg font-medium px-6 max-md:pr-0 text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>

                </Col>
                <Col xl={8} lg={12} md={12} sm={24} xs={24} className='  max-md:mx-auto overflow-hidden flex flex-col justify-center items-center space-y-5 mt-7 mx-auto'>
                    <div className='text-3xl text-orange-500 border-[2px] p-2 max-md:!text-md border-orange-500 rounded-full'><BsKeyboard /></div>
                    <h2 className='text-gray-900 text-2xl max-md:text-2xl font-bold ml-5 max-md:ml-0 max-md:text-center  max-md:w-[100%]'>Well Crafted</h2>


                    <p className='text-gray-500 text-lg font-medium px-6 max-md:pr-0 text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>

                </Col>
                <Col xl={8} lg={12} md={12} sm={24} xs={24} className='  max-md:mx-auto overflow-hidden flex flex-col justify-center items-center space-y-5 mt-7 mx-auto'>
                    <div className='text-3xl text-orange-500 border-[2px] p-2 max-md:!text-md border-orange-500 rounded-full'><IoMdFlash /></div>
                    <h2 className='text-gray-900 text-2xl max-md:text-2xl font-bold ml-5 max-md:ml-0 max-md:text-center  max-md:w-[100%]'>Easy to Customize</h2>


                    <p className='text-gray-500 text-lg font-medium px-6 max-md:pr-0 text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>

                </Col>


            </Row>


        </div>
    </div>

}
export default OurProcess;