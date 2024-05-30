import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation, Trans } from "react-i18next";


const Languages = (props) => {
    const { t, i18n} = useTranslation();
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <>
           <NavDropdown title={i18n.language === "vi" ? "Vietnamese" : "English"} id="basic-nav-dropdown2" className="languages" >
                <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>Vietnamese</NavDropdown.Item>
              </NavDropdown> 
        </>
    );
};

export default Languages;