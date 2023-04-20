import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


const Banner: React.FC = () => {
    return <div className='bg-[url("https://live.staticflickr.com/65535/52831507699_b1afaa71ff_c.jpg")] px-2 py-40 max-md:py-32'>
        <div className='max-w-[1400px] mx-auto '>
            <Row className='!justify-between max-md:!flex-col  max-md:space-y-10'>
                <Col xl={12} lg={12} md={22} sm={22} xs={22} className='flex justify-start flex-col max-md:justify-center space-y-8 max-md:space-y-5 max-md:mx-auto'>
                    <img src='https://coursesbe.s3.ap-southeast-1.amazonaws.com/868bc9e2-5c00-44b6-a793-1af2cba34742-logo.png' className='w-[200px] max-md:w-[140px] max-md:mx-auto' />
                    <h2 className='text-white text-5xl font-extralight max-md:text-center max-md:text-3xl'>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h2>
                    <div className='w-[100px] h-[1px] rounded-2xl max-md:mx-auto bg-white'></div>
                    <p className='text-white text-base pr-20 max-md:pr-0 max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>
                    <Button className='w-[130px] h-[36px] rounded-none hover:!border-orange-500 hover:!text-orange-500 text-md max-md:mx-auto  text-white'>Download</Button>

                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24} className='!h-[320px] max-md:space-y-7 flex flex-col justify-between !py-0 max-w-[400px] max-md:!w-[300px] rounded-lg max-md:mx-auto bg-white overflow-hidden'>
                    <div className='w-[100%] py-3  bg-gray-200'>
                        <h4 className='font-bold text-2xl text-center max-md:text-xl'>Try Your <span className='text-orange-500'>FREE</span> Trial Today</h4>
                    </div>
                    <Form

                        name="control-ref"

                        style={{ maxWidth: 600 }}
                    >
                        <Form.Item className='w-[75%] mx-auto hover:border-none ' name="name" rules={[{ required: true, type: 'string', message: "Pleace enter name" }]}>
                            <Input placeholder='Name' className='text-lg  !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                        <Form.Item className='w-[75%] mx-auto ' name="email" rules={[{ required: true, type: 'email', message: "Pleace enter email" }]}>
                            <Input placeholder='Email' className='text-lg   !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                        <Form.Item className='w-[75%] mx-auto ' name="password" rules={[{ required: true, min: 6, type: 'string', message: "Password has at least 6 characters" }]}>
                            <Input.Password className='text-lg  !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                        <Form.Item className='w-[100%] mx-auto mb-0' name="password" rules={[{ required: true, min: 6, type: 'string', message: "Password has at least 6 characters" }]}>
                            <Button className='w-[100%] !cursor-pointer bg-orange-400 font-medium h-[46px] rounded-none hover:!bg-orange-500 text-lg text-center' type="primary">Submit</Button>
                        </Form.Item>



                    </Form>

                </Col>
            </Row>


        </div>
    </div>
}
export default Banner;