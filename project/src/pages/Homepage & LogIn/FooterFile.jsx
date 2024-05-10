import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Col, Row } from 'antd';
import { Image, Typography} from 'antd'
import { InstagramOutlined, XOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { TranslateFunction } from '../../utils/internationalization';
const { Footer } = Layout;
const FooterFile = () => {
  const labels = TranslateFunction("labels");
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
      }}
    >

      <Row gutter={24} style={{width:'100%', justifyContent: 'space-between'}}>
        <Col span={8} > <h3 style={{ color: 'white' }}>{labels("ABOUT")}</h3>
          <Typography style={{ color: 'white' }}><strong style={{ fontSize: '20px' }}> </strong>
          {labels("This brand is registered Trademarks of Karan Makan. The parent company is Private limited.  With these sub-Brands in the kitty are bound to create magic as we start. The Franchise expansion is exclusively done through the parent company. Any other entity that represents or portrays to be the same are completely false.With multiple locations coming soon across India, Deliso is your new destination for mouth-watering and mind-blowing food.")}<br />
          </Typography>
        </Col>

        <Col span={8}>
          <h3 style={{ color: 'white' }}>{labels("CONTACT US")}</h3>
          <Menu theme="dark" style={{backgroundColor: 'black'}} >
            <Menu.Item style={{ color: 'white' }} key="contact-us">
              Contact us: +91 22 67598800 
            </Menu.Item>
            <Menu.Item style={{ color: 'white' }} key="web">
              Website: www.google.com
            </Menu.Item>
            <Menu.Item style={{ color: 'white' }} key="privacy">Privacy and Policy</Menu.Item>
          </Menu>
        </Col>
        {/* <Col span={6}><h3 style={{ color: 'white' }}>CONTACTS US</h3></Col> */}

        <Col span={8}><h3 style={{ color: 'white'}}>{labels("SOCIAL MEDIA")}</h3>
          <div style={{}}>
            <a href="https://www.facebook.com" >
              <FacebookOutlined style={{ color: 'white', fontSize: '24px', marginRight: '40px' }} />
            </a>
            <a href="https://www.google.com">
              <GoogleOutlined style={{ color: 'white', fontSize: '24px', marginRight: '40px' }} />
            </a>
            <a href="https://www.instagram.com">
              <InstagramOutlined style={{ color: 'white', fontSize: '24px', marginRight: '40px' }} />
            </a>
            <a href='https://twitter.com/?lang=en'>
              <XOutlined style={{ color: 'white', fontSize: '24px', marginRight: '10px' }} />
            </a>
          </div>
        </Col>
      </Row>

      Deliso ©{new Date().getFullYear()} Created by NBCS Family
    </Footer>
  )
}

export default FooterFile