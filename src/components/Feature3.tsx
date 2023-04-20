import { Button, Col, Drawer, Form, Input, List, Row, Select, Tabs } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineMenu } from 'react-icons/ai'


const Features3: React.FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const data = [
        {
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
        },
        {
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }
    ]

    return <div className='bg-[#f5f5f5] px-2 py-40 max-md:py-16' id='pricing'>
        <div className='max-w-[1400px] mx-auto '>

            <Row className='!justify-between max-md:!flex-col  max-md:space-y-10 items-center'>

                <Col xl={12} lg={12} md={22} sm={22} xs={22} className='flex justify-start flex-col max-md:justify-center space-y-8 max-md:space-y-5 max-md:mx-auto'>
                    <div className='flex flex-col space-y-5 max-md:!space-x-0 font-medium'>
                        <h2 className='text-gray-900 text-2xl max-md:text-2xl font-bold ml-5 max-md:ml-0 max-md:text-center  max-md:w-[100%]'>Standard Picture Section</h2>
                        <div className='max-md:flex max-md:justify-center'>
                            <div className='w-[100px] h-[2.4px]  bg-orange-400'></div>

                        </div>
                        <p className='text-gray-500 text-lg font-medium  max-md:pr-0 max-md:text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                            et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
                            natoque penatibus et magnis dis parturient montes.</p>
                        <p className='text-gray-500 text-lg font-medium  max-md:pr-0 max-md:text-center max-md:!text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                            bibendum laoreet.</p>


                    </div>

                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24} className=' shadow-xl max-w-[450px] !h-[270px] max-md:max-w-[300px] max-md:!h-[180px] p max-md:space-y-7  flex flex-col justify-center !py-0  rounded-lg max-md:mx-auto overflow-hidden'>
                    <img src='./src/assets/images/tab-1.png' className='w-[100%] h-[100%] max-md:mx-auto' />

                </Col>

            </Row>


        </div>
    </div>
}
export default Features3;