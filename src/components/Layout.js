import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ username }) => {
  return (
    <>
      <Header username={username} />
      <Outlet />
      <Footer />
    </>
  );
};

export default React.memo(Layout);
