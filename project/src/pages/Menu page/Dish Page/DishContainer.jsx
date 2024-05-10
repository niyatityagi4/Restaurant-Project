import { useState } from "react";
import  Filters  from "./DishFilter";
import { Layout } from "antd";
import Navbar from "../../Homepage & LogIn/Navbar";
import DishList from "./DishList";
// import { Link } from "react-router-dom";


export const DishContainer=({selectedDish, back})=>{
    console.log('as', selectedDish)
    const [searchObj, setSearchObj] = useState({});
    const [listUpdatedCount, setListUpdatedCount] = useState(null);
    console.log("searchObj", searchObj);
    

    return (
        <div>
           
            <div>
                <Layout>
                    <Navbar/>
                </Layout>
                
                <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
                {selectedDish && <DishList selectedDish={selectedDish} searchObj={searchObj} listUpdatedCount={listUpdatedCount} back={back}/>}

                {/* <DistList selectedDish={selectedDish} searchObj={searchObj} listUpdatedCount={listUpdatedCount} navigateBack={handleBackButtonClick} /> */}  
            </div>
          
        </div>
    );
};