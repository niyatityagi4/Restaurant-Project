import React from "react"
import {HomeOutlined} from "@ant-design/icons";
import HomePage from "../pages/Homepage & LogIn/HomePage"
import MenuWrapper from "../pages/Menu page/MenuWrapper"
import { SignIn } from "../pages/Homepage & LogIn/SignIn"
import AdminPage from "../pages/admin/AdminPage"
import TableReservation from "../pages/Table Reservation/TableReservation";
import AdminMenuPage from "../pages/admin/admin-menu-page/AdminMenuPage";
import AdminOrderPage from "../pages/admin/admin-order-page/AdminOrderPage";
import AdminSeatingsPage from "../pages/admin/admin-seating-page/AdminSeatingsPage";


export const navList = [

    { path:     "/admin",    name: "Admin",  element: <AdminPage/>,    isMenu: true,    isPrivate: true, permissions:["admin"], children: [
        {path: "", name: "AdminMenu", index: "index" , element: <AdminMenuPage/>, isMenu:false, isPrivate: false },
        {path: "orders", name: "Orders", element: <AdminOrderPage/>, isMenu:false, isPrivate: false},
        {path: "seatings", name: "Seatings", element: <AdminSeatingsPage/>, isMenu:false, isPrivate: false},
    ]},
    { path:     "/",         name: "Home",    element: <HomePage/>,       isMenu: true,     isPrivate: false  },
    { path:     "/signIn",    name: "Sign In",  element: <SignIn/>,      isMenu: false,    isPrivate: false  },
    // { path:     "/",    name: "Offers",  element: <Offers/>,      isMenu: true,    isPrivate: false  },
    // { path:     "/cart",    name: "Cart",  element: <Cart/>,      isMenu: true,    isPrivate: true  } ,
    { path:     "/menu",    name: "Menu",  element: <MenuWrapper/>,    isMenu: false,    isPrivate: false  },
    // {path: "/tableReservation", name: "Table Reservation", element: <TableReservation/>, isMenu:false, isPrivate: false},
    
    {path: "/tableReservation", name: "Table Reservation", element: <TableReservation/>, isMenu:false, isPrivate: false},

]