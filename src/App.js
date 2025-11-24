import React, { useEffect, useState, Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import ChangeTable from "./components/ChangeTable";

// Lazy load all page components for code splitting and better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const OurStore = lazy(() => import("./pages/OurStore"));
const Blog = lazy(() => import("./pages/Blog"));
const CompareProduct = lazy(() => import("./pages/CompareProduct"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Forgotpassword = lazy(() => import("./pages/Forgotpassword"));
const Signup = lazy(() => import("./pages/Signup"));
const Resetpassword = lazy(() => import("./pages/Resetpassword"));
const SingleBlogs = lazy(() => import("./pages/SingleBlogs"));
const SingleHandi1 = lazy(() => import("./pages/SingleHandi1"));
const TermConditions = lazy(() => import("./pages/TermConditions"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const AddProduct = lazy(() => import("./admin/AddProduct"));
const EditProduct = lazy(() => import("./admin/EditProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Handi1 = lazy(() => import("./pages/Handi1"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="container-sm">
    <div className="row align-items-center justify-content-center middle-page">
      <img className="col-3" src="/images/Infinity-1.svg" alt="Loading..." />
    </div>
  </div>
);

function App() {
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  // Optimize useEffect - only run once on mount
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    const storedUserType = sessionStorage.getItem("userType");

    setUsername(storedUsername || "");
    setUserType(storedUserType || "");
  }, []); // Empty dependency array - only run on mount

  // Memoize user props to prevent unnecessary re-renders
  const userTypeMemo = useMemo(() => userType, [userType]);

  return (
    <>
      <BrowserRouter>
        {/* Optimized ToastContainer with performance settings */}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={5}
          enableMultiContainer={false}
          closeButton={true}
          toastClassName="custom-toast"
          bodyClassName="custom-toast-body"
          progressClassName="custom-toast-progress"
        />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout username={username} />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route
                path="product"
                element={<OurStore userType={userTypeMemo} />}
              />
              <Route path="blogs" element={<Blog />} />
              <Route
                path="product/:id"
                element={<SingleProduct userType={userTypeMemo} />}
              />
              <Route path="blog/:id" element={<SingleBlogs />} />
              <Route path="compare-product" element={<CompareProduct />} />
              <Route path="wishlists" element={<Wishlist />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="cart" element={<Cart />} />
              <Route path="handi1" element={<Handi1 />} />
              <Route
                path="handi1/:id"
                element={<SingleHandi1 userType={userTypeMemo} />}
              />
              <Route path="forgot-password" element={<Forgotpassword />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="reset-password" element={<Resetpassword />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="shipping-policy" element={<ShippingPolicy />} />
              <Route path="term-conditions" element={<TermConditions />} />
              <Route path="admin/addproduct" element={<AddProduct />} />
              <Route path="editproduct/:id" element={<EditProduct />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ChangeTable />
    </>
  );
}

export default React.memo(App);
