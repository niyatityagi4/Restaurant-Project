import React from "react"
import {HomeOutlined} from "@ant-design/icons";
import HomePage from "../pages/Homepage & LogIn/HomePage"
import MenuWrapper from "../pages/Menu page/MenuWrapper"
import { SignIn } from "../pages/Homepage & LogIn/SignIn"
import AdminPage from "../pages/admin/AdminPage"


export const navList = [
    { path:     "/",         name: "Home",    element: <HomePage/>,       isMenu: true,     isPrivate: false  },
    { path:     "/signIn",    name: "Sign In",  element: <SignIn/>,      isMenu: false,    isPrivate: false  },
    // { path:     "/",    name: "Offers",  element: <Offers/>,      isMenu: true,    isPrivate: false  },
    // { path:     "/cart",    name: "Cart",  element: <Cart/>,      isMenu: true,    isPrivate: true  } ,
    { path:     "/menu",    name: "Menu",  element: <MenuWrapper/>,    isMenu: false,    isPrivate: false  }  ,
    { path:     "/admin",    name: "Admin",  element: <AdminPage/>,    isMenu: true,    isPrivate: true}  

]