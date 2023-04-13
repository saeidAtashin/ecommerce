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
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlogs from "./pages/SingleBlogs";
import TermConditions from "./pages/TermConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SingleProduct from "./pages/SingleProduct";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

function App() {
  return ( <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="product" element={<OurStore/>} />
      <Route path="blogs" element={<Blog />} />
      <Route path="product/:id" element={<SingleProduct />} />
      <Route path="blog/:id" element={<SingleBlogs />} />
      <Route path="compare-product" element={<CompareProduct />} />
      <Route path="wishlists" element={<Wishlist />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<Forgotpassword />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="reset-password" element={<Resetpassword />} />
      <Route path="refund-policy" element={<RefundPolicy />} />
      <Route path="shipping-policy" element={<ShippingPolicy />} />
      <Route path="term-conditions" element={<TermConditions />} />
      <Route path="admin/addproduct" element={<AddProduct />} />
      <Route path="editproduct/:id" element={<EditProduct />} />
    </Route>
    </Routes></BrowserRouter>
  
  
  </>
  )
}

export default App;
