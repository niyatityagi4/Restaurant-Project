
import React, { useState } from "react";
import { Button, Col, List, Modal, Row, Radio } from "antd";
import LocalStorageService from "../../services/localStorageService";
import { CreditCardOutlined, PayCircleOutlined, GoogleCircleFilled, DollarCircleOutlined } from '@ant-design/icons';
import { TranslateFunction } from "../../utils/internationalization";
const Cart = ({ visible, handleCancel }) => {
  const labels = TranslateFunction("labels");
  const ls = new LocalStorageService();

  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderConfirmed, setOrderConfirmed] = useState({ confirmed: false, details: [] });

  const [orderDetails, setOrderDetails] = useState([]);
  // console.log("lallalalala", orderDetails)
  const clearAllAndCancel = (event) => {
    handleCancel(event);
    ls.deleteAllValues();
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...ls.get()];
    updatedCart.splice(index, 1);
    ls.set(updatedCart);
    forceUpdate();
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...ls.get()];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      ls.set(updatedCart);
      forceUpdate();
    }
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...ls.get()];
    updatedCart[index].quantity++;
    ls.set(updatedCart);
    forceUpdate();
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const cartItems = ls.get();
    cartItems.forEach((item) => {
      totalPrice += item.description * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    setCheckoutVisible(true);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleConfirmCheckout = () => {
    const cartItems = ls.get();
    setOrderConfirmed({ confirmed: true, details: cartItems });
    setCheckoutVisible(false);
    handleCancel();
  };

  // const handleConfirmCheckout = () => {
  //   const cartItems = ls.get();
  //   setOrderConfirmed({ confirmed: true, details: cartItems });
  //   setCheckoutVisible(false);
  //   handleCancel();
  //   setTimeout(() => {
  //     setOrderConfirmed({ confirmed: false, details: [] });
  //   }, 30000);
  // };
  return (
<>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        width={900}
        footer={[
          <Button key="clearAll" onClick={clearAllAndCancel}>
            {labels("Clear All")}
          </Button>,
          <Button key="checkout" type="primary" onClick={handleCheckout}>
          {labels("Checkout")}
          </Button>
        ]}
      >
        <h2 style={{ textAlign: "center", fontWeight: "normal" }}>{labels("Chosen Ones")}</h2>
        <List
          size="large"
          bordered
          dataSource={ls.get()}
          renderItem={(item, index) => (
            <List.Item>
              <Row gutter={16} justify="start" align="middle" style={{ width: "200%" }}>
                <Col span={8}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.image} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
                    <span>{item.title}</span>
                  </div>
                </Col>
                <Col span={4}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Price: Rs {item.description}</span>
                  </div>
                </Col>
                <Col span={4}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button onClick={() => handleDecreaseQuantity(index)} disabled={item.quantity === 1}>
                      -
                    </Button>
                    <span style={{ margin: "0 10px", marginLeft: "2%" }}>{item.quantity}</span>
                    <Button onClick={() => handleIncreaseQuantity(index)}>+</Button>
                  </div>
                </Col>
                <Col span={4}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Total: Rs{(item.description * item.quantity).toFixed(2)}</span>
                  </div>
                </Col>
                <Col span={4}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button onClick={() => handleDeleteItem(index)} danger>
                      Delete
                    </Button>
                  </div>
                </Col>
              </Row>
            </List.Item>
          )}
        />
        <div style={{ textAlign: "right", marginRight: "18%" }}>Total Price: Rs{calculateTotalPrice()}</div>
      </Modal>
  
      <Modal
        title={labels("ORDER DETAILS")}
        visible={checkoutVisible}
        onCancel={() => setCheckoutVisible(false)}
        okText="Proceed" 
        onOk={handleConfirmCheckout}
        width={5000}
      >
        <p style={{fontWeight:"bold"}}>{labels("Order Summary")}:</p>
        <List
  dataSource={ls.get()}
  renderItem={(item) => (
    <List.Item>
      <Row gutter={16} justify="start" align="middle" style={{ width: "100%" }}>
        <Col span={4}>
          <img src={item.image} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
        </Col>
        <Col span={8}>
          
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{item.title}</span>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Price: Rs {item.description}</span>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Quantity: {item.quantity}</span>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Total: Rs {(item.description * item.quantity).toFixed(2)}</span>
          </div>
        </Col>
      </Row>
    </List.Item>
  )}
/>

        <p style={{textAlign:'right', marginRight:'8%', fontWeight:'bolder'}}>Total Price: Rs{calculateTotalPrice()}</p>
        <br></br>
        <br></br>
        <p>Select Payment Method:</p>
        <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
  <Radio value="creditCard">
    <CreditCardOutlined /> Credit Card
  </Radio>
  <Radio value="Paytm">
    <PayCircleOutlined /> Paytm
  </Radio>
  <Radio value="Google Pay">
    <GoogleCircleFilled /> Google Pay
  </Radio>
  <Radio value="Cash On delivery">
    <DollarCircleOutlined /> Cash On Delivery
  </Radio>
</Radio.Group>

      </Modal>
      {/* {orderConfirmed && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, backdropFilter: 'blur(10px)' }}>
          <img src={confirmed} alt="Order Confirmed" style={{ width: '500px' }} />
        </div>
      )} */}
    {orderConfirmed.confirmed && (
  <Modal
    visible={orderConfirmed.confirmed}
    onCancel={() => setOrderConfirmed({ confirmed: false, details: [] })}
    footer={null}
    width={1200}
  >
    <h2>Bill Details</h2>
    <List
      dataSource={orderConfirmed.details}
      renderItem={(item) => (
        <List.Item>
          <Row gutter={16} justify="start" align="middle" style={{ width: "100%" }}>
          <Col span={8}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{item.title}</span>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>Quantity: {item.quantity}</span>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>Total: Rs {(item.description * item.quantity).toFixed(2)}</span>
              </div>
            </Col>
          </Row>
        </List.Item>
      )}
    />
    <p style={{ fontWeight: 'bold', textAlign:'right' , marginRight:'40%' }}>Total Price: Rs {calculateTotalPrice()}</p>
    <div style={{ textAlign: 'center', width: '220px', height: '220px', overflow: 'hidden',position: 'fixed', top: '20%', left: '66%'}}>
    <img src="https://cdn.dribbble.com/users/3955123/screenshots/7107983/image.gif" alt="Order Confirmed" style={{ width: '130%', height: '120%', objectFit: 'cover' }} />
    </div>
    <p style={{ fontWeight: 'bold', fontSize: '30px', color:'orange', marginRight: '5%', fontStyle:'normal', textAlign:'right', marginTop:'10%'}}>ORDER CONFIRMED</p>
    
  </Modal>
)}
    </>
  );
};

export default Cart;
