import { useState, useEffect } from "react";
import MenuPage from "./MenuPage";
import MenuFilters from "./MenuFilter";
import Navbar from '../../Homepage & LogIn/Navbar';
import { Layout } from "antd";


const MenuContainer = ({ next, setSelectedDish }) => {
    const [searchObj, setSearchObj] = useState({});
    

    return (
        <>
        <Layout>
        <Navbar />
             
            
                <MenuPage 
                    
                    next={next} 
                    setSelectedDish={setSelectedDish} 
                    searchObj={searchObj} 
                    setSearchObj={setSearchObj}  
                />
         </Layout>
        </>
    );
};

export default MenuContainer;

