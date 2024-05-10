

import { useEffect, useState } from "react";
import backg from '../../../Images/background.png';
import backg2 from '../../../Images/background2.png'
import { Button, Col, Layout, Row } from "antd";
import FooterFile from "../../Homepage & LogIn/FooterFile";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import DishOftheDay from "../Menu Level1/DishOftheDay";
import DishPage from "./DishPage";
import { TranslateFunction } from "../../../utils/internationalization";
const filterDishes = (dishes, searchObj) => {
    console.log("Filtering Dishes:", dishes);
    return dishes.filter((dish) => (
        (!searchObj ||
            (searchObj.isVeg === undefined || dish.isVeg === searchObj.isVeg) &&
            (searchObj.isVegan === undefined || dish.isVegan === searchObj.isVegan) &&
            (searchObj.isGluetenFree === undefined || dish.isGluetenFree === searchObj.isGluetenFree) &&
            (searchObj.cuisine === undefined || dish.cuisine === searchObj.cuisine) &&
            (!searchObj.search || dish.dishName.toLowerCase().includes(searchObj.search.toLowerCase()))
        )
    ));
};
// return dishes.filter((dish) => {
//         if (!searchObj || ((searchObj.isVeg === undefined) || (dish.isVeg === searchObj.isVeg)) && 
//         ((searchObj.isVegan === undefined) || (dish.isVegan === searchObj.isVegan)) && 
//         ((searchObj.isGluetenFree === undefined) || (dish.isGluetenFree === searchObj.isGluetenFree)) &&
//         ((searchObj.cuisine===undefined)||(searchObj.cuisine===dish.cuisine)) && 
//         ((!searchObj.search) || (dish.dishName.toLowerCase().includes(searchObj.search.toLowerCase()))))
//             return true
//         return false
//     })

const DishList = ({ selectedDish, searchObj, listUpdatedCount, back }) => {
    const labels = TranslateFunction("labels");
    console.log("Selected Dish:", selectedDish);
    console.log("Search Object:", searchObj);

    const [filteredDishes, setFilteredDishes] = useState(null);

    useEffect(() => {
        if (selectedDish && searchObj) {
            const filtered = filterDishes(selectedDish.menuType, searchObj);
            console.log("Filtered Dishes:", filtered);
            setFilteredDishes(filtered);
        }
    }, [selectedDish, searchObj]);

    return (
        <>
            <Layout>
                <Layout>
                    <Content>
                        <div style={{ background: `url(${backg})`, backgroundSize: 'cover', minHeight: 'calc(300vh - 64px)', padding: '20px' }}>
                            <Button onClick={back}>{labels("Back")}</Button>
                            <h1 style={{ color: 'white', fontStyle: 'oblique', fontSize: '4vh' }}>{labels("For the love of delicious food.")}</h1>
                            {/* <Row gutter={[10, 10]} style={{ width: "90%" }}>
                    {filteredDishes && filteredDishes.map((dish) => (
                        <Col key={dish.foodId} span={6} >
                            <DishPage dish={dish} searchObj={searchObj} listUpdatedCount={listUpdatedCount} />
                        </Col>
                    ))}
                </Row> */}
                            <Row gutter={[10, 10]} style={{ width: "90%" }}>
                                {filteredDishes && filteredDishes.map((dish) => (
                                    <Col key={dish.foodId} span={8}>
                                        <DishPage dish={dish} searchObj={searchObj} listUpdatedCount={listUpdatedCount} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Content>
                    <Sider width="30%" style={{ backgroundImage: `url(${backg2})`, backgroundSize: '120vh' }}>
                        <DishOftheDay />
                    </Sider>
                </Layout>
                <FooterFile />
            </Layout>
        </>
    );
};

export default DishList;
























