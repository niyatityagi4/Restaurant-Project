import React, { useEffect, useState } from 'react';
import { Button, Layout, theme } from 'antd';
import Navbar from './Navbar';
import FooterFile from './FooterFile';
import { Link } from 'react-router-dom';


const { Content } = Layout;

const HomePage = () => {

  const [menuButtonVisible, setMenuButtonVisible] = useState(false);
  const [tableBookingButtonVisible, setTableBookingButtonVisible] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    'url("assets/homepage/homepage.png")',
    'url("assets/homepage/homepage1.png")',
    'url("assets/homepage/homepage2.png")',
    // 'url("assets/homepage/homepage3.png")',
  ];

  useEffect(() => {
    const menuButtonTimeout = setTimeout(() => {
      setMenuButtonVisible(true);
    }, 1000);

    const tableBookingButtonTimeout = setTimeout(() => {
      setTableBookingButtonVisible(true);
    }, 1600);

  
    const backgroundImageInterval = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000); 

    return () => {
      clearTimeout(menuButtonTimeout);
      clearTimeout(tableBookingButtonTimeout);
      clearInterval(backgroundImageInterval);
    };
  }, []);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      {/* <Navbar /> */}
      <Content>
        <div
          style={{
            minHeight: 380,
            backgroundImage: backgroundImages[backgroundIndex],
            borderRadius: borderRadiusLG,
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', 
            transition: 'background-image 1s ease-in-out', 
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/menu">
              <Button
                type="primary"
                size="large"
                ghost
                style={{
                  transform: `translateX(${menuButtonVisible ? '0' : '-1000%'})`,
                  transition: 'transform 0.20s',
                  width: '100%', 
                  marginBottom: '16px'
                }}
              >
                Menu
              </Button>
            </Link>
            <Link to="/tableReservation">
            <Button
              type="primary"
              size="large"
              ghost
              style={{
                transform: `translateX(${tableBookingButtonVisible ? '0' : '1000%'})`,
                transition: 'transform 0.20s',
                width: '100%'
              }}
            >
              Table Booking
            </Button>
            </Link>
          </div>
        </div>
      </Content>
      {/* <FooterFile /> */}
    </Layout>
  );
};

export default HomePage;

