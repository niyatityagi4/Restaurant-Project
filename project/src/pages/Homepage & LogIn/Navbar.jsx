import {
  UserOutlined,
  UserDeleteOutlined,
  PercentageOutlined,
  ShoppingCartOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Offers from "./Offers";
import Cart from "../OrderBooking & Cart/Cart";
import { TranslateFunction } from "../../utils/internationalization";
import LanguageSelector from "../LanguageSelector";
import { isAuthorisedRoute } from "../../structure/RenderRoutes";
import { AuthData } from "../../structure/AuthWrapper";
import { navList } from "../../structure/Navigation";

const { Header } = Layout;

const Navbar = () => {
  const labels = TranslateFunction("labels");
  const [modalVisible, setModalVisible] = useState(false);
  const [offersModalVisible, setOffersModalVisible] = useState(false);
  const [cart, setCart] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const showOffersModal = () => {
    setOffersModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOffersOk = () => {
    setOffersModalVisible(false);
  };

  const handleOffersCancel = () => {
    setOffersModalVisible(false);
  };

  const toggleCart = () => setCart((prev) => !prev);

  const toggleLanguageDropdown = () => setLanguageDropdownVisible((prev) => !prev);
  const nav = useNavigate()
  const { user, logout } = AuthData()


  const items = [
    ...navList.map((r, i) => {
      if (isAuthorisedRoute(user, r, true)) {
        return { key: r.path, label: r.name, to: r.path };
      }
    }).filter(item => item),
    {
      key: "offers",
      label: "Offers",
      icon: <PercentageOutlined />,
      onClick: showOffersModal,
    },
    {
      key: "cart",
      label: "Cart",
      icon: <ShoppingCartOutlined />,
      onClick: toggleCart,
    },
    {
      key: "language",
      label: "Language",
      icon: <ReadOutlined />,
      onClick: toggleLanguageDropdown,
    }
  ];
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div>
        <img
          style={{ width: 100, height: 110 }}
          src="assets\homepage\Logo.png"
          alt="Logo"
        />
      </div>
  
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor:"black",
          width: "50%",
          marginLeft:"60%",
          justifyContent:"space-evenly"
        }}
      >
        {items.slice(0, 2).map((item) => (
          <Menu.Item
            key={item.key}
            style={{ color: "white" }}
            onClick={item.onClick}
          >
            <Link to={item.to}>
              {item.icon} {labels(item.label)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
  
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor:"black",
          width: "50%",
        }}
      >
        {items.slice(2).map((item) => (
          <Menu.Item
            key={item.key}
            style={{ color: "white" }}
            onClick={item.onClick}
          >
            {item.to ? (
              <Link to={item.to}>
                {item.icon} {labels(item.label)}
              </Link>
            ) : (
              <>
                {item.icon} {labels(item.label)}
              </>
            )}
          </Menu.Item>
        ))}
      </Menu>
  
      <Offers
        visible={offersModalVisible}
        handleCancel={handleOffersCancel}
        handleOk={handleOffersOk}
        style={{ backgroundColor: "red" }}
      />
      <Cart visible={cart} handleCancel={toggleCart} handleOk={toggleCart} />
  
      {languageDropdownVisible && <LanguageSelector />}
      <div>
        {user.isAuthenticated ? (
          <div className="menuItem">
            <Link to={"#"} onClick={logout}>
              <Button style={{ backgroundColor: "transparent", color:"white", border:"0" }}>
              <UserDeleteOutlined/>
                {labels("Log Out")}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="menuItem">
            <Link to={"login"}>
              <Button style={{ backgroundColor: "transparent", color:"white" , border:"0"}}>
              <UserOutlined />
              {labels("Log In")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Header>
  );
  
};

export default Navbar;