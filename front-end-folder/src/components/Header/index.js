import React from "react";
import "./style.css";
import { ToggleButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { AppContext, useGlobalContext } from "../../context";

export default function Header() {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      <div className="header">
        <div className="toggle-button" onClick={openSidebar}>
          <ToggleButton>
            <MenuIcon className="toggle" />
          </ToggleButton>
        </div>
        <div className="header-logo">
          <img src="logo.jpg" alt="logo" />
        </div>
        <div className="header-link">
          <FontAwesomeIcon
            className="shop-icon"
            icon={faCartPlus}
            size="lg"
            beat
          />
          <PersonIcon className="register-icon" />
        </div>
      </div>
    </>
  );
}
