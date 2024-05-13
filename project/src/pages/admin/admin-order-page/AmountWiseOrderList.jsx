import { useEffect, useState } from "react";
import { Table ,Card ,Row , Flex ,Typography, Col} from 'antd';
import { getData } from "../../../services/Orders/Orders";

export default function AmountWiseOrderList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {

getData().then(data =>{
 

      let amountWise = { '🡻500': 0, '500-2000' : 0, '🡹2000': 0 };
      
      data.orders.map((order) => {
        if (order.amount < 500) amountWise["🡻500"]++;
        else if (order.amount > 500 && order.amount <= 2000)
          amountWise["500-2000"]++;
        else amountWise["🡹2000"]++;
      });

      const orders = Object.keys(amountWise).map((amount, index) => ({
      key: index.toString(), 
      amount: amount, 
      count: amountWise[amount], 
   
    })
      )
      setData(orders)
  })

}



  return (
<>
<h1 className="heading">Amount Wise Order List</h1>

<Row style={{  padding : '10px 5%'}}>
  <Flex style={{flexDirection : 'row'}}>
    {
      data.map((amount , index)=>{
      
    
    return <Card style={{backgroundColor : 'azure',width : '100px' , height : '70px' , boxShadow: '0 10px 16px gray' ,  marginRight : '5%'}}>
      <Col>
      <Typography.Title style={{textAlign : 'center' , paddingTop : '10px'}} level={2} key={index}>{amount.count}</Typography.Title>
      <Typography.Title style={{textAlign : 'center' , paddingTop : '6px' , color  : 'green'}} level={5} key={index}>{amount.amount}</Typography.Title>
      </Col>
    </Card>
      })}
  </Flex>
</Row>
  </>
  );
}
