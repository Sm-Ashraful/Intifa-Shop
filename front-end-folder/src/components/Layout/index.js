import React from "react";
import Sidebar from "../../containers/SideBar";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

function Layout(props) {
  return (
    <>
      <Header />
      <MenuHeader />

      {props.children}
      <Sidebar />
    </>
  );
}

export default Layout;
