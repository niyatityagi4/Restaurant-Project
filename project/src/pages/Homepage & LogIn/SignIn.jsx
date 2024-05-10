import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button,Card,Typography } from "antd";
import { AuthData } from "../../structure/AuthWrapper";
const { Title,Text } = Typography;
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
                    errorMsg=>setErrorMessage(errorMsg)
               )


     }


     return (
        
              
              //  <div className="inputs">
              //       <div className="input">
              //            <Text > UserName:</Text>
              //            <input value={formData.userName} onChange={(e) => setFormData({ userName: e.target.value })} type="text" />
              //       </div>
              //       <div className="input">
              //       <Text > Password:</Text>
              //            <input value={formData.password} onChange={(e) => setFormData({ password: e.target.value })} type="password" />
              //       </div>
                    
              //       <div className="button">
              //            <Button onClick={doLogin}>Login</Button>
              //       </div>
              //       {errorMessage &&
              //            <div className="error">{errorMessage}</div>
              //       }
              //  </div>
            <div style={{backgroundColor:"lightblue", height:"100%"}}>
              <Card hoverable style={{ width:"50%",margin:"auto", marginTop:"18%", height:"100%"}}> 
              <div className="inputs" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div className="input" style={{ marginBottom: "20px" }}>
                <Text> UserName:</Text>
                <input  style={{marginLeft:"10px"}} value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} type="text" />
              </div>
              <div className="input" style={{ marginBottom: "20px" }}>
                <Text> Password:</Text>
                <input style={{marginLeft:"12px"}} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" />
              </div>
        
              <div className="button" style={{ marginTop: "20px" }}>
                <Button onClick={doLogin}>Login</Button>
              </div>
              {errorMessage && <div className="error" style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
            </div>
            </Card>
            </div>
          
           
     )
}
