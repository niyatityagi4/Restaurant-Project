import { Flex,Col, Typography } from "antd";
import { useState, useEffect } from "react";
import { getData } from "../../../services/Menu/Menu";
import Filters from "./FilterMenuPage";
import MenuTable from "./MenuTable";


export default function AdminMenuPage() {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [selectedObj, setSelectedObj] = useState([]);
  const [data , setData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      const menu = res.menu.map((dish, index) => ({
        ...dish,
        key: index.toString(),
      }));
      setData(menu);
    });
  }, []);

  return (
    <Col >
      <Typography.Title style={{ textAlign: "center" , padding: '2% 0' ,textShadow: '2px 2px 4px blue'}}>
        Menu Table
      </Typography.Title>

      <Col >
        <Filters
          selectedObj={selectedObj}
          setSelectedObj={setSelectedObj}
          updatedCount={updatedCount}
          data = {data}
          setData = {setData}
        />
        <MenuTable
          selectedObj={selectedObj}
          setUpdatedCount={setUpdatedCount}
          data = {data}
          setData = {setData}
        />
      </Col>
    </Col>
  );
}
