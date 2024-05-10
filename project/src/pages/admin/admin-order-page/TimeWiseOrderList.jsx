import { useState, useEffect } from 'react';
import { Row  ,Col , Typography,Card , Flex}  from 'antd';
import { getData } from '../../../services/Orders/Orders';



export default function TimeWiseOrderList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
   getData().then(data=>{
    let timeWise = {
      breakfast: {url : "https://i.ytimg.com/vi/FoXv5X4Y9PM/maxresdefault.jpg" , count : 0},
      lunch: {url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjh6nu8dNGqPbXxQuqWcxLP_mZuCLKBqiHQ&s" , count : 0},
      dinner: {url : "https://m.media-amazon.com/images/M/MV5BMTcyMTY2OTM2Nl5BMl5BanBnXkFtZTgwMDM4MjA2NjE@._V1_.jpg" , count : 0}
    };

    data.orders.forEach((order) => {
      if (order.time === "lunch") timeWise.lunch.count++;
      else if (order.time === "dinner") timeWise.dinner.count++;
      else timeWise.breakfast.count++;
    });
    setData(timeWise);
   })
  }

  return (
    <>
    <h1 className="heading">Time Wise List</h1>

   <Row style={{  padding : '10px 5%'}}>
    {
      data && (
        Object.keys(data).map((mealTime, index) => (
          <Card key={index} style={{width: '50%', height : '50%', marginRight : '20px', padding : '10px' , width : '20%' , boxShadow: '0 10px 16px gray'}}>
            {
              <Col>
              <img style={{width: '100%'}} src={data[mealTime].url} />
              <Typography.Title style={{textAlign:'center'}} level={5}>count : {data[mealTime].count}</Typography.Title>
              </Col>
            }
          </Card>
        ))
      )
      }
   </Row>
    </>

  );
}

