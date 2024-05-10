// import { useEffect, useState } from "react";
// // import backg from '../../../Images/background.png';
// // import DishPage from "./DishPage";
// // import { Col, Row } from "antd";
// // import FooterFile from "../../Homepage & LogIn/FooterFile";
// import MenuPage from "./MenuPage";

// const filterDishes = (dishes, searchObj) => {
//     console.log("okd")
//     console.log("dishes", dishes)
//     return dishes.filter((dish) => {
//         if (!searchObj || ((searchObj.isVeg === undefined) || (dish.isVeg === searchObj.isVeg)) && ((searchObj.isVegan === undefined) || (dish.isVegan === searchObj.isVegan)) && ((searchObj.isGluetenFree === undefined) || (dish.isGluetenFree === searchObj.isGluetenFree)) &&((searchObj.cuisine===undefined)||(searchObj.cuisine===dish.cuisine)) && ((!searchObj.search) || (dish.dishName.toLowerCase().includes(searchObj.search.toLowerCase()))))
//             return true
//         return false
//     })
// }



// const MenuList = ({ selectedDish, searchObj, listUpdatedCount }) => {

//     const [filteredDishes, setFilteredDishes] = useState(null);
//     console.log("filterdishes", filteredDishes);

//     useEffect(() => {
//         if (selectedDish && searchObj) {
//             let filteredDishes = filterDishes(selectedDish.menuType, searchObj)
//             console.log("list", filteredDishes)
//             setFilteredDishes(filteredDishes);
//         }
//     }, [searchObj])

//     console.log("filell", filteredDishes)
//     return (
//         <>
      
//                     {filteredDishes && filteredDishes.map((dish) => (
                   
//                             <MenuPage dish={dish} searchObj={searchObj} listUpdatedCount={listUpdatedCount} />
                       
//                     ))}
            
          
//         </>
//     )

// }



// export default MenuList;

