import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Button, theme, notification } from 'antd';
import LocalStorageService from '../../../services/localStorageService';
import { TranslateFunction } from '../../../utils/internationalization';

const { Paragraph } = Typography;
const { Meta } = Card;




const DishPage = ({ dish, searchObj}) => {
  const labels = TranslateFunction("labels");
  const ls = new LocalStorageService();
  // console.log(dish)
  const addCardToLS = () => {
    const cartItem = {
      title: dish.dishName,
      description: dish.unitPrice,
      image: dish.menuImage,
      quantity: 1
    };
    ls.set([...ls.get(), cartItem]);
    notification.success({
      message: "Success",
      description: "Your dish has been successfully added to the cart.",
    });
  };
  
  
  const filterDishes = (dishes, searchObj) => { 
  console.log(searchObj);
  // console.log(dishes,"niyati")
  return dishes.filter((dish) => {
    console.log(dish)


   
    // if (
    //   !searchObj ||
    //   ((!searchObj.cuisine || dish.cuisine === searchObj.cuisine) &&
    //     ((searchObj.isVeg===undefined) || (dish.isVeg === searchObj.isVeg))
    // )
    //   return true;
    // return false;
   
  });
};

  // useEffect(() => {
  //       if (searchObj && dish) {
  //         let filteredDishes = filterDishes(dishes, searchObj);
  //         setFilteredDishes(filteredDishes);
  //       }
  //     }, [dishes, searchObj]);

  const [ellipsis, setEllipsis] = useState(true);

  // return (
  //   <>

  //     <Card
  //       hoverable
  //       style={{ padding:'20px', width: 210 }}
  //       cover={<img alt={dish.dishName} style={{ padding:'5px', width: "150px", height: "100px" }} src={dish.menuImage} />}
  //     >
  //       <Meta title={dish.dishName} description={dish.unitPrice} style={{marginBottom:"5px", fontWeight:"bolder"}}/>
  //       <Paragraph
  //         ellipsis={
  //           ellipsis
  //             ? {
  //               rows: 2,
  //               expandable: true,
  //               symbol: 'more',
  //             }
  //             : false
  //         }
  //       >
  //         {dish.dishDesciption}
  //       </Paragraph>
  //       <Button type="primary">ADD +</Button>
  //     </Card>

  //   </>
 

  // )
  return(
  <Card
  hoverable
  style={{ borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '300px', margin: '20px' }}
  bodyStyle={{ padding: '20px', display: 'flex', alignItems: 'center' }}
>
  <div style={{ flex: '1', marginRight: '20px' }}>
    <img
      alt={dish.dishName}
      style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
      src={dish.menuImage}
    />
  </div>
  <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
    <div style={{ marginBottom: '10px' }}>
      <h3 style={{ margin: '0', fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>{dish.dishName}</h3>
      <p style={{ margin: '0', fontSize: '1rem', color: '#666' }}>Rs: {dish.unitPrice}</p>
    </div>
    <Paragraph
    ellipsis={
                ellipsis
                  ? {
                    rows: 2,
                    expandable: true,
                    symbol: 'more',
                  }
                  : false
              }
     style={{ margin: '0', fontSize: '1rem', color: '#666', flex: '1', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>
      {dish.dishDesciption}
    </Paragraph>
    <Button 
  type="primary" 
  style={{ alignSelf: 'flex-end' }}
  onClick={addCardToLS}
>
{labels("ADD")}+
</Button>

  </div>
</Card>
);

 
  

}
export default DishPage;




// const filterDishes = (dishes, searchObj) => { 
//   console.log(searchObj);
//   console.log(dishes,"niyati")
//   return dishes.filter((dish) => {
//     console.log(dish)
//     if (
//       !searchObj ||
//       ((!searchObj.cuisine || dish.cuisine === searchObj.cuisine) &&
//         ((searchObj.isVeg===undefined) || (dish.isVeg === searchObj.isVeg))
//     )
//       return true;
//     return false;
//   });
// };

// const DishPage = ({ searchObj, listUpdatedCount }) => {
//   const [dishes, setDishes] = useState(null);
//   const [filteredDishes, setFilteredDishes] = useState(null);

//   useEffect(() => {
//     getDish().then((dishes) => {
//       setDishes(dishes);
//     });
//   }, [listUpdatedCount]);
//   console.log(dishes);

//   useEffect(() => {
//     if (searchObj && dishes) {
//       let filteredDishes = filterDishes(dishes, searchObj);
//       setFilteredDishes(filteredDishes);
//     }
//   }, [dishes, searchObj]);
//   console.log(filteredDishes)

//   return (
//     <div style={{ backgroundColor: 'yellow' }}> {/* Add yellow background */}
//       <Row gutter={[2, 2]}>
//         {filteredDishes &&
//           filteredDishes.map((dish, index) => (
//             <Col key={dish.foodId} xs={5} sm={3} md={4} lg={4}>
//               <MenuDish dish={dish} />
//             </Col>
//           ))}
//       </Row>
//     </div>
//   );
// };

// const MenuDish = ({ dish }) => {
//   // console.log(dish)
//   const [ellipsis, setEllipsis] = useState(true);

//   return (
//     <Card
//       hoverable
//       style={{ width: 300 }}
//       cover={<img alt="Dish" style={{ width: "300px", height: "250px" }} src={dish.menuImage} />}
//     >
//       <Meta title={dish.dishName} description={dish.unitPrice} />
//       <Paragraph
//         ellipsis={
//           ellipsis
//             ? {
//                 rows: 2,
//                 expandable: true,
//                 symbol: 'more',
//               }
//             : false
//         }
//       >
//         {dish.dishDesciption}
//       </Paragraph>
//       <Button type="primary">ADD +</Button>
//     </Card>
//   );
// };

//export default DishPage;
