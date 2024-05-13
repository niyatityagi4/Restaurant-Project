import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Layout, Carousel } from 'antd';
import backg from '../../../Images/background.png';
import backg2 from '../../../Images/background2.png'
import image1 from '../../../Images/Menu1.png'
import image2 from '../../../Images/Menu2.png'
import image3 from '../../../Images/Menu3.png'
import { RightOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import FooterFile from '../../Homepage & LogIn/FooterFile';
import Sider from 'antd/es/layout/Sider';
import DishOftheDay from './DishOftheDay';
import { getMenuDish } from '../../../services/Dishes/DishesOperation';
import MenuFilters from './MenuFilter';
import { TranslateFunction } from '../../../utils/internationalization';


const { Meta } = Card;
const { Title } = Typography;

const filterDishes = (dishes, searchObj) => {

  return dishes.filter((dish) => (
    // console.log(dish)
    (!searchObj ||
      (searchObj.cuisine === undefined || dish.menuCuisine === searchObj.cuisine)
    )

  ));

};

const MenuPage = ({ next, setSelectedDish, searchObj, setSearchObj }) => {
  const [dishes, setDishes] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(null);
  const labels = TranslateFunction("labels");
  console.log("searchObjjjjjjjjjjjj", searchObj);
  useEffect(() => {
    getMenuDish().then((dishes) => setDishes(dishes));
  }, []);

  useEffect(() => {
    if (dishes && searchObj) {
      let filteredMenu = filterDishes(dishes, searchObj);
      console.log("filll", filteredMenu)
      setFilteredMenu(filteredMenu);
    }
  }, [dishes, searchObj])

  return (
    <>
      
        <Layout>
        <MenuFilters searchObj={searchObj} setSearchObj={setSearchObj} />
        <Layout>
  
          <Content>
          
            <div
              style={{
                backgroundImage: `url(${backg})`,
                backgroundSize: '300vh',
                minHeight: 'calc(170vh - 64px)',
                paddingTop: '30px',
              
              }}
            >
              <Carousel autoplay autoplaySpeed={4000} style={{ marginTop: '0' }}>
                <div>
                  <img src={image1} alt="Image 1" style={{ objectFit: 'cover', marginLeft: '5%', width: '80%', height: '40vh' }} />
                </div>
                <div>
                  <img src={image2} alt="Image 2" style={{ objectFit: 'cover', marginLeft: '5%', width: '80%', height: '40vh' }} />
                </div>
                <div>
                  <img src={image3} alt="Image 3" style={{ objectFit: 'cover', marginLeft: '5%', width: '80%', height: '40vh' }} />
                </div>
              </Carousel>
              <br></br>
              <Title level={0} style={{ textAlign: 'left', color: 'white', marginTop: '0px', marginLeft: '5%', fontStyle: 'oblique' }}>
                {labels("What's On Your Mind?")}</Title>

              <Row gutter={[8, 48]} style={{ width: "90%" }}>
                {filteredMenu?.map((dish, index) => (
                  <Col key={dish.menuId} span={8} style={{ marginBottom: '12px', marginRight: 0, display: "flex", justifyContent: "center" }}>
                    <Menu
                      dish={dish}
                      onClick={next}
                      setSelectedDish={setSelectedDish}
                      index={index}
                      total={dishes.length}
                    />
                  </Col>
                ))}
              </Row>

            </div>
          </Content>
          <Sider width="30%" style={{
            backgroundImage: `url(${backg2})`,
            backgroundSize: '120vh',
          }}>
            <DishOftheDay />
          </Sider>
        </Layout>
        {/* <FooterFile /> */}
        </Layout>
    </>
  );
};

const Menu = ({ dish, onClick, setSelectedDish, index, total }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = () => {
    setIsVisible(false);
    onClick();
    setSelectedDish(dish);
  };

  return (
    <Card
      onClick={handleCardClick}
      hoverable
      className={isVisible ? 'slide-in' : 'slide-out'}
      style={{
        width: '90%',
        transitionDelay: `${(total - index) * 0.1}s`,
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '5%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
        }}
      >
        <img
          src={dish.mImage}
          alt={dish.menuName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <br></br>
      <Meta
        title={
          <span style={{ color: 'black' }}>
            {dish.menuName} <RightOutlined style={{ marginLeft: '5px' }} />
          </span>
        }
      />
    </Card>
  );
};

export default MenuPage;
