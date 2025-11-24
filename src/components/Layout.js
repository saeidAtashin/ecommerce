import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ username }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header username={username} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
