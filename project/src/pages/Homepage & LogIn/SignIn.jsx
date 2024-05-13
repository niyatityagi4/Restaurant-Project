import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "antd";
import { AuthData } from "../../structure/AuthWrapper";
const { Title, Text } = Typography;
export const SignIn = () => {


     const navigate = useNavigate();
     const location = useLocation();
     const { login } = AuthData();
     const [formData, setFormData] = useReducer((formData, newItem) => {
          return ({ ...formData, ...newItem })
     }, { userName: "", password: "" })
     const [errorMessage, setErrorMessage] = useState(null)


     const doLogin = () => {


          login(formData.userName, formData.password)
               .then(() => {
                    if (location.state?.from)
                         navigate(location.state.from);
                    else
                         navigate("/")
               },
                    errorMsg => setErrorMessage(errorMsg)
               )


     }


     return (

          <div style={{ backgroundColor: "lightblue", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
               <Card hoverable style={{ width: "50%", height: "50%" }}>
                    <div style={{ position: "absolute", transform: "translateX(-50%)", display: "flex", marginLeft: "24%", marginTop: "30%" }}>
                         <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" style={{ width: "30%", height: "30%" }} />
                         {/* <img src="https://img.freepik.com/premium-vector/burger-logo_1027727-2772.jpg?size=626&ext=jpg&ga=GA1.1.1252926155.1713460457&semt=ais_user" alt="Transparent Image 2" style={{ width: "30%", height: "30%" }} /> */}
                         <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG-High-Quality-Image.png" style={{ width: "32%", height: "32%", marginTop: "8%" }} />
                         <img src="https://www.pngall.com/wp-content/uploads/5/Serving-Food-PNG-Image-HD.png" style={{ width: "37%", height: "30%", marginTop: "12%" }} />
                         <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG-High-Quality-Image.png" style={{ width: "32%", height: "32%", marginTop: "8%" }} />
                         <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" style={{ width: "30%", height: "30%" }} />
                    </div>


                    <div className="inputs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                         <div className="input" style={{ marginBottom: "20px", marginTop: "100px" }}>
                              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Username:</Text>
                              <input style={{ marginLeft: "10px", borderWidth: "2px", borderStyle: "solid" }} value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} type="text" />
                         </div>
                         <div className="input" style={{ marginBottom: "20px", marginTop: "10px" }}>
                              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Password:</Text>
                              <input style={{ marginLeft: "12px", borderWidth: "2px", borderStyle: "solid" }} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" />
                         </div>
                         <div className="button" style={{ marginTop: "20px" }}>
                              <Button onClick={doLogin} style={{ fontSize: 15, fontWeight: "bold", borderWidth: "5px", borderStyle: "solid", height: "7%" }}>Login</Button>
                         </div>
                         {errorMessage && <div className="error" style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
                    </div>
               </Card>
          </div>



     )
}
