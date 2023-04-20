import React, { useState } from 'react';
import { Breadcrumb, Button, Drawer, Layout, Menu, theme } from 'antd';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Features2 from './components/Feature2';
import Features3 from './components/Feature3';
import OurProcess from './components/OurProcess';
import CustomSection from './components/CustomSection';
import ContactUs from './components/ContactUs';
import FooterComponent from './components/FooterComponent';

const { Header, Content, Footer } = Layout;


const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <div className={open ? 'fixed !w-[100%] !h-[100%] z-50' : 'fixed !w-[100%] z-50'}>
        <Navbar open={open} setOpen={setOpen} />

      </div>
      <Content >
        <Banner />
        <Features />
        <Features2 />
        <Features3 />
        <OurProcess />
        <CustomSection />
        <ContactUs />
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default App;