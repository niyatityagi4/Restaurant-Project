import React from "react";
import { Menu } from "antd";
import { changeLanguage, languages } from "../utils/internationalization";

const LanguageSelector = () => {
  const handleChange = (value) => {
    changeLanguage(value);
  };

  return (
    <Menu style={{ position: "absolute", top: "100%", left: '84%' , borderRadius:'10%'}}>
      {languages.map((lng) => (
        <Menu.Item key={lng.code} onClick={() => handleChange(lng.code)}>
          {lng.lang}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default LanguageSelector;
