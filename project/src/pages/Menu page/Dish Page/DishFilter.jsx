import React, { useState } from "react";
import { Button, Layout, Select } from "antd";
import SearchBar from "./SearchBar";
import flower from '../../../Images/flower.png';
import flower2 from '../../../Images/flower2.png'
import { TranslateFunction } from "../../../utils/internationalization";
// import Navbar from "../../Homepage & LogIn/Navbar";

const { Header } = Layout;
const { Option } = Select;
const Cuisines = ["South Indian", "North Indian", "Italian", "Chinese", "Korean"];

const Filters = ({ searchObj, setSearchObj }) => {
    const labels = TranslateFunction("labels");
    console.log("Search Object:", searchObj);

    const handleFilter = (filterName, value) => {
        console.log("Filter Clicked:", filterName, value);
        setSearchObj(prevSearchObj => ({
            ...prevSearchObj,
            [filterName]: prevSearchObj[filterName] === value ? undefined : value
        }));
       
        
    };

    return (
        <Layout>
             <Header style={{ position: 'relative', display: 'flex', alignItems: 'center', color: 'black', backgroundColor: 'white' }}>
             <div style={{ position: 'absolute', top: '0', left: '0', width: '40px', height: '60px', backgroundImage: `url(${flower})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <h2 style={{ margin: '1', marginRight: '2%', fontStyle: 'oblique', fontWeight: 600 }}>{labels("Filters")}</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        style={{ backgroundColor: searchObj.isVeg === true ? "teal" : "white" }}
                        onClick={() => handleFilter("isVeg", true)}
                    >
                        Vegetarian
                    </Button>
                    <Button
                        style={{ backgroundColor: searchObj.isVeg === false ? "teal" : "white" }}
                        onClick={() => handleFilter("isVeg", false)}
                    >
                        Non-Vegetarian
                    </Button>
                    <Button
                        style={{ backgroundColor: searchObj.isVegan === true ? "teal" : "white" }}
                        onClick={() => handleFilter("isVegan", true)}
                    >
                        Vegan
                    </Button>
                    <Button
                        style={{ backgroundColor: searchObj.isGluetenFree === true ? "teal" : "white" }}
                        onClick={() => handleFilter("isGluetenFree", true)}
                    >
                        Gluten Free
                    </Button>

                    {/* <Select
                        value={searchObj.cuisine}
                        onChange={(value) => handleFilter("cuisine", value)}
                        style={{ width: 200}}
                        placeholder="Select Cuisine"
                    >
                        {Cuisines.map((cuisine, index) => (
                            <Option key={index} value={cuisine}>
                                {cuisine}
                            </Option>
                        ))}
                    </Select>  */}

{Cuisines.map((cuisine, index) => (
        <Button
            key={index}
            onClick={() => handleFilter("cuisine", cuisine)}
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: searchObj.cuisine === cuisine ? "teal" : "white",
            }}
        >
            {cuisine}
        </Button>
    ))}
                </div>
                <SearchBar searchObj={searchObj} setSearchObj={setSearchObj} />
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '90px', height: '50px', backgroundImage: `url(${flower2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </Header>
        </Layout>
    );
};

export default Filters;
