import { Button, Col, Drawer, Form, Input, List, Row, Select, Space, Tabs } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineMenu } from 'react-icons/ai'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsKeyboard } from 'react-icons/bs'
import { IoMdFlash } from 'react-icons/io'
import TextArea from 'antd/es/input/TextArea'


const ContactUs: React.FC = () => {

    return <div className='bg-[#ffffff]  p-0 m-0' id='contact'>

        <div className='max-w-[1400px] mx-auto  py-40 max-md:py-16 px-2'>
            <h2 className='text-gray-900 text-4xl  max-md:text-3xl font-bold ml-5 max-md:ml-0 text-center  max-md:w-[100%]  mb-7'>CONTACT US</h2>
            <div className='flex justify-center mb-5'>
                <div className='w-[100px] h-[2.4px]  bg-orange-400'></div>

            </div>

            <p className='text-gray-500 text-lg font-medium  max-md:pr-0 text-center max-md:!text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



            <Form

                name="control-ref"
                className='!w-[100%] mt-10'

            >
                <Row gutter={[0, 0]} className='' >
                    <Col xl={12} lg={12} md={22} sm={22} xs={22} className='mx-auto pr-10 max-md:p-0' >
                        <Form.Item className='w-[100%] mx-auto hover:border-none ' name="name" rules={[{ required: true, type: 'string', message: "Pleace enter name" }]}>
                            <Input placeholder='Name' className='text-lg  !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                        <Form.Item className='w-[100%] mx-auto ' name="email" rules={[{ required: true, type: 'email', message: "Pleace enter email" }]}>
                            <Input placeholder='Email' className='text-lg   !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                        <Form.Item className='w-[100%] mx-auto hover:border-none ' name="subject" rules={[{ required: true, type: 'string', message: "Pleace enter subject" }]}>
                            <Input placeholder='Subject' className='text-lg  !border-b-[1.8px] !border-b-gray-500 rounded-none' />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={22} sm={22} xs={22} className='mx-auto pl-10 max-md:pl-0' >
                        <Form.Item className='w-[100%] mx-auto hover:border-none ' name="message" rules={[{ required: true, type: 'string', message: "Pleace enter message" }]}>
                            <TextArea placeholder='Message' className='text-lg pb-4  !border-b-[1.8px] !border-b-gray-500 rounded-none' rows={5} />
                        </Form.Item>

                    </Col>

                </Row>

                <Form.Item className='w-[150px] rounded-md overflow-hidden mx-auto mb-0 mt-6' name="password" rules={[{ required: true, min: 6, type: 'string', message: "Password has at least 6 characters" }]}>
                    <Button className='w-[100%] !cursor-pointer bg-orange-400 font-medium h-[46px] rounded-none hover:!bg-orange-500 text-lg text-center' type="primary">Send Message</Button>
                </Form.Item>



            </Form>


        </div>
    </div>

}
export default ContactUs;