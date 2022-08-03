import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const componentsToHide = location.pathname.includes("/login");
  return (
    <>
      {componentsToHide ? null : <Header />}
      {children}
    </>
  );
};

export default Layout;
