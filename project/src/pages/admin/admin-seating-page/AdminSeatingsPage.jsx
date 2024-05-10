import {  Flex } from "antd";
import { useEffect, useState } from "react";
import { getData } from "../../../services/Table Reservation/TableBooking";
import Dinner from "./DinnerSeating";
import Lunch from "./LunchSeating";



export default function AdminSeatingsPage() {

  const [data , setData] = useState(null);
  
  useEffect(()=>{
      getData().then(list =>{
          setData(list);
      })
  },[])


  return (
    <>
          <Flex
            style={{
              display: "flex",
              flexDirection: "column",
            margin : "1% 10%"
             
            }}
          >
            {
              data && (
                <>
                <Lunch  data={data} />
                <Dinner data={data} />
                </>
              )
            }
          </Flex>


    </>
  );
}
