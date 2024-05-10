import { Button, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
// const { Header } = Layout;
import flower from '../../../Images/flower.png';
import flower2 from '../../../Images/flower2.png'
import { TranslateFunction } from "../../../utils/internationalization";
const MenuCuisines = ["South Indian", "North Indian", "Italian", "Asian", "Fusion"];
const MenuFilters = ({searchObj, setSearchObj}) => {
    const labels = TranslateFunction("labels");
   console.log("Search Menu:", searchObj);

   const handleMenuFilter = (menuFilterName, value) => {
    console.log("Clicked:", menuFilterName, value);

    setSearchObj(prevSearchObj =>({
        ...prevSearchObj,
        [menuFilterName]: prevSearchObj[menuFilterName] === value ? undefined : value
    }));
    console.log("SSSSSSSSS", searchObj); };

 return(
    <Layout>
          <Header style={{ position: 'relative', display: 'flex', alignItems: 'center', color: 'black', backgroundColor: 'white' }}>
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100px', height: '50px', backgroundImage: `url(${flower})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 style={{ margin: '1', marginRight: '2%', fontStyle: 'oblique', fontWeight: 600, marginLeft:'5%' , fontSize:26}}>{labels("Cuisines")}</h2>
        <div style={{ display: 'flex', gap: '40px' }}>
         
          {MenuCuisines.map((menuCuisine, index) => (
                        <Button
                            key={index}
                            onClick={() => handleMenuFilter("cuisine", menuCuisine)}
                            style={{ 
                                border: "1px solid",
                                borderRadius: "5px",
                                backgroundColor: searchObj.menuCuisine === menuCuisine ? "teal" : "transparent",
                                width: "120px"
                             }}
                        >
                            {menuCuisine}
                        </Button>
                    ))}
            </div>
            <div style={{ position: 'absolute', bottom: '0', right: '55vh', width: '100px', height: '50px', backgroundImage: `url(${flower2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h2 style={{ margin: '1', marginRight: '2%', fontStyle: 'oblique', fontWeight: 600, marginLeft:'15%', fontSize:26 }}>{labels("Dish Of The Day")}</h2>
        </Header>
    </Layout>
 )
}
export default MenuFilters;