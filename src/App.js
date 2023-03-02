import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from './pages/CompareProduct'
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";

function App() {
  return ( <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="store" element={<OurStore/>} />
      <Route path="blogs" element={<Blog />} />
      <Route path="compare-product" element={<CompareProduct />} />
      <Route path="wishlists" element={<Wishlist />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<Forgotpassword />} />
    </Route>
    </Routes></BrowserRouter>
  
  
  </>
  )
}

export default App;
