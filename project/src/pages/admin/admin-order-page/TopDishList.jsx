import { useEffect, useState } from "react";
import { Typography, Card, Flex, Col } from "antd";
import { getData } from "../../../services/Orders/Orders";

export default function TopDishList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {

    getData().then(data =>{
      
        let topDishWise = {};

          data.orders.map((order) => {
            if (!topDishWise[order.dishName]) {
              topDishWise[order.dishName] = {
                url: order.url,
                quantity: order.quantity,
              }
            } 
            else {
              topDishWise[order.dishName].quantity += order.quantity;
              topDishWise[order.dishName] = {
                ...topDishWise[order.dishName],
                url: order.url,
              };
            }
          });
      
          const sortedArr = Object.entries(topDishWise);
      
          sortedArr.sort((a, b) => b[1].quantity - a[1].quantity);
          topDishWise = Object.fromEntries(sortedArr);
          const sliced = Object.fromEntries(Object.entries(topDishWise).slice(0, 5));
        
          const orders = Object.keys(sliced).map((dish, index) => ({
                key: index.toString(),
                dishName: dish,
                count: sliced[dish],
              }));

              setData(orders);

    })
  }

  return (
    <>
      <h1 className="heading">Top Five Dishes List</h1>

      <Flex style={{ flexDirection: "row"  , justifyContent: 'space-around' , padding : '10px 5%'}}>
        {data.map((dish ,index) => {
          let url = dish.count.url;
          return (
            <>
              
                <Card key={index} hoverable style={{ width: "24%" ,  boxShadow: '0 10px 16px gray' , marginRight : '2%' }}>
                <Col>
                  <img style={{ width: "100%"  ,}} src={url} />
                  <Typography.Title level={5} style={{textAlign : 'center'}}>
                    {dish.dishName + " : " + dish.count.quantity}
                  </Typography.Title>
                  </Col>
                  </Card>
             
            </>
          );
        })}
      </Flex>
    </>
  );
}
