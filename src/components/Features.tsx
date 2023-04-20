import { Button, Col, Drawer, Form, Input, Row, Select, Tabs } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


const Features: React.FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    return <div className='bg-[#f5f5f5] px-2 py-40 max-md:py-16' id='features'>
        <div className='max-w-[1400px] mx-auto  ' >
            <Row className='!justify-between max-md:!flex-col  max-md:space-y-10'>
                <Col xl={14} lg={14} md={22} sm={22} xs={22} className='flex justify-start flex-col max-md:justify-center space-y-8 max-md:space-y-5 max-md:mx-auto'>
                    <Tabs
                        onChange={onChange}
                        type="card"
                        tabPosition={'left'}
                        className='!flex !space-x-10 max-md:!flex-col max-md:!space-x-0 max-md:!space-y-8 '
                        items={new Array(3).fill(null).map((_, i) => {
                            const id = String(i + 1);
                            return {
                                label: `TAB ${id}`,
                                key: id,
                                children: <>
                                    <div className='flex flex-col space-y-7 max-md:!space-x-0 '>
                                        <h2 className='text-gray-900 text-3xl max-md:text-2xl font-bold  max-md:ml-0 max-md:text-center  max-md:w-[100%]'>Tabs with soft transitioning effect.</h2>

                                        <p className='text-gray-500 text-lg font-medium  max-md:pr-0 max-md:text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                                            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                                            justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
                                            penatibus et magnis dis parturient montes.
                                            <div className='block h-3' />

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                                            bibendum laoreet.</p>
                                        <div className='max-md:mx-auto w-[100%] max-md:text-center'>
                                            <Button type='primary' className='w-[130px] h-[42px] hover:!bg-orange-600 max-md:text-center bg-orange-500 rounded-md text-md max-md:mx-auto  text-white'>Download</Button>

                                        </div>
                                    </div>
                                </>,
                            };
                        })}
                    />

                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24} className='!h-[320px] max-md:space-y-7 flex flex-col justify-center !py-0 max-w-[400px] max-md:!w-[300px] rounded-lg max-md:mx-auto overflow-hidden'>
                    <img src='./src/assets/images/city.png' className='w-[350px] max-md:w-[300px] max-md:mx-auto' />

                </Col>
            </Row>


        </div>
    </div>
}
export default Features;