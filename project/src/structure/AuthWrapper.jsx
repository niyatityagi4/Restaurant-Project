import { createContext, useContext, useState } from "react"
import users from "../services/User/user.json"
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./RenderRoutes";


console.log("Users List", users)


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false })


    console.log('AuthWrapper User', user)


    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            let validUser = users.find(user => password === user.password && userName === user.userName)
            if (validUser) {
                setUser({ name: userName, permissions: validUser.permissions, isAuthenticated: true })
                resolve("success")
            }
            else {
                reject("Incorrect Username or Password")
            }
        })


    }
    const logout = () => {


        setUser({ ...user, isAuthenticated: false })
    }


    return (


        <AuthContext.Provider value={{ user, login, logout }}>
            <BrowserRouter>
               
                {/* <MainHeader /> */}
                <RenderRoutes />
                {/* <FooterFile /> */}
            </BrowserRouter>
        </AuthContext.Provider>


    )


}


