import { Button, Card, Col, Modal, Row, notification } from "antd";
import React from "react";
import LocalStorageService from "../../services/localStorageService";

const { Meta } = Card;

const Offers = ({ visible, handleCancel, handleOk }) => {
  const ls = new LocalStorageService();

  const addCardToLS = (props) => {
    ls.set([...ls.get(), ...[props]]);
    notification.success({
      message: "Success",
      description: "Your dish has been successfully added to the cart.",
    });
  };

  return (
    <Modal
      title="Offers %"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="offer"
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg"
              />
            }
          >
            <Meta
              title="Masala Dosa"
              description="On purchase of 2 get 30% off."
            />
            <br />
            <Button
              type="primary"
              onClick={() =>
                addCardToLS({
                  title: "Masala Dosa",
                  description: 350,
                  image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg",
                  quantity: 1
                })
              }
            >
              ADD +
            </Button>
          </Card>
        </Col>

        <Col span={12}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="offer"
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              />
            }
          >
            <Meta title="Korean Combo" description="Get Combo of 3 @3999/-" />
            <br />
            <Button
              type="primary"
              onClick={() =>
                addCardToLS({
                  title: "Korean Combo",
                  description: 3999,
                  image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
                  quantity: 1
                })
              }
            >
              ADD +
            </Button>
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="offer"
                src="https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_640.jpg"
              />
            }
          >
            <Meta title="Pizza" description="Get 2 pizza @ 599/-" />
            <br />
            <Button type="primary"
            onClick={()=>
              addCardToLS({
                title: 'Pizza',
                description: 599,
                image: "https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_640.jpg",
                quantity: 1
              })}>ADD +</Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="offer"
                src="https://img.freepik.com/premium-photo/overhead-indian-traditional-dishes-appetizers-chicken-curry-pilaf-naan-bread-samosas-paneer-chutney-rustic-background-table-with-choice-food-indian-cuisine-space-text_92134-1145.jpg"
              />
            }
          >
            <Meta
              title="North Indian Meal"
              description="lunch buffet @ 1999/-"
            />
            <br />
            <br />
            <br />

            <Button type="primary"
            onClick={()=>
              addCardToLS({
                title: 'North Indian Meal',
                description: 1999,
                image:"https://img.freepik.com/premium-photo/overhead-indian-traditional-dishes-appetizers-chicken-curry-pilaf-naan-bread-samosas-paneer-chutney-rustic-background-table-with-choice-food-indian-cuisine-space-text_92134-1145.jpg",
                quantity: 1
              })}>ADD +</Button>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default Offers;
