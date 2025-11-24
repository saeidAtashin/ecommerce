import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ username }) => {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header username={username} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
