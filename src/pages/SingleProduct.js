import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductsByIdQuery } from "../toolkit/features/productApi";
import { addToCart } from "../toolkit/features/cartSlice";
import { useChangeTableLogger } from "../context/useChangeTableLogger";

const SingleProduct = ({ userType }) => {
  const { logAddToCart } = useChangeTableLogger();

  const { id } = useParams();
  const { data, error, isLoading } = useGetProductsByIdQuery(id);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [orderdProduct, setOrderdProduct] = useState(true);
  const [showImage, setShowImage] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const navigate = useNavigate();

  // Handle ESC key to close full screen
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isFullScreen) {
        setIsFullScreen(false);
        setZoomLevel(1);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isFullScreen]);

  // Prevent body scroll when full screen is open
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullScreen]);

  const openFullScreen = () => {
    setIsFullScreen(true);
    setZoomLevel(1);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const DeleteProduct = (id) => {
    if (window.confirm("delete_product")) {
      fetch("https://apitest-lovat.vercel.app/products/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("REMOVED");
          navigate("/product");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleAddToCart = (id, elementName) => {
    logAddToCart(userType, id.name, elementName);
    console.log(id.name);
    console.log(userType);
    console.log(elementName);
    dispatch(addToCart(id));
    // navigate("/cart");
  };

  const handleEdit = (id, elementName) => {
    logAddToCart(userType, id.name, elementName);
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            fontSize: "24px",
            color: "#667eea",
          }}
        >
          Loading...
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            fontSize: "24px",
            color: "#e74c3c",
          }}
        >
          An error occurred...
        </div>
      ) : (
        data && (
          <>
            <Meta title={data.name} />

            <BreadCrumb brand={data.brand} title={data.name} />

            <div
              className="main-product-wrapper py-5"
              style={{
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #f5f7fa 100%)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 15s ease infinite",
              }}
            >
              <style>{`
                @keyframes gradientShift {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                @keyframes float {
                  0%, 100% { transform: translate(0, 0) rotate(0deg); }
                  50% { transform: translate(20px, -20px) rotate(180deg); }
                }
                @keyframes shadowPattern {
                  0% { transform: translate(0, 0); }
                  100% { transform: translate(200px, 200px); }
                }
              `}</style>

              {/* Repeated shadow pattern background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.03,
                  backgroundImage: `url(/${data?.def_img || ""})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "200px 200px",
                  backgroundPosition: "0 0",
                  animation: "shadowPattern 20s linear infinite",
                  pointerEvents: "none",
                  filter: "blur(8px) grayscale(100%)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.02,
                  backgroundImage: `url(/${data?.def_img || ""})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "300px 300px",
                  backgroundPosition: "100px 100px",
                  animation: "shadowPattern 30s linear infinite reverse",
                  pointerEvents: "none",
                  filter: "blur(12px) grayscale(100%)",
                  zIndex: 0,
                }}
              />

              {/* Decorative elements */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
                  animation: "float 20s ease-in-out infinite",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "5%",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 182, 193, 0.1) 0%, transparent 70%)",
                  animation: "float 25s ease-in-out infinite reverse",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                className="container-sm"
                style={{ position: "relative", zIndex: 1 }}
              >
                <div
                  className="row d-flex align-items-between justify-content-between"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "30px",
                    padding: "40px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div className="col-lg-5 col-md-12 mb-4">
                    {data && (
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            padding: "30px",
                            background:
                              "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                            borderRadius: "25px",
                            marginBottom: "20px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          {/* Spotlight effect for focus */}
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "400px",
                              height: "400px",
                              borderRadius: "50%",
                              background:
                                "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
                              filter: "blur(40px)",
                              zIndex: 1,
                              pointerEvents: "none",
                            }}
                          />
                          <div
                            className="product-image d-flex justify-content-center align-items-center"
                            style={{
                              minHeight: "350px",
                              position: "relative",
                              zIndex: 2,
                            }}
                          >
                            <div
                              id="product-image-container"
                              style={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "visible",
                                boxShadow:
                                  "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 8px rgba(102, 126, 234, 0.1), inset 0 0 50px rgba(102, 126, 234, 0.1)",
                                background: "rgba(255, 255, 255, 0.5)",
                                padding: "20px",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                const ring =
                                  e.currentTarget.querySelector(".focus-ring");
                                if (ring) ring.style.opacity = "1";
                              }}
                              onMouseLeave={(e) => {
                                const ring =
                                  e.currentTarget.querySelector(".focus-ring");
                                if (ring) ring.style.opacity = "0";
                              }}
                            >
                              <img
                                src={`/${showImage ? showImage : data.def_img}`}
                                alt={data.name}
                                style={{
                                  maxHeight: "350px",
                                  width: "auto",
                                  transition:
                                    "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                  borderRadius: "15px",
                                  filter:
                                    "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                                  objectFit: "contain",
                                  position: "relative",
                                  zIndex: 2,
                                  cursor: "zoom-in",
                                }}
                                className="img-fluid"
                                onClick={openFullScreen}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.15) rotate(2deg)";
                                  e.currentTarget.style.filter =
                                    "drop-shadow(0 20px 40px rgba(102, 126, 234, 0.5)) brightness(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1) rotate(0deg)";
                                  e.currentTarget.style.filter =
                                    "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) brightness(1)";
                                }}
                              />
                              {/* Focus ring effect */}
                              <div
                                className="focus-ring"
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  width: "calc(100% + 20px)",
                                  height: "calc(100% + 20px)",
                                  borderRadius: "20px",
                                  border: "3px solid rgba(102, 126, 234, 0.5)",
                                  pointerEvents: "none",
                                  opacity: 0,
                                  transition: "opacity 0.3s ease",
                                  zIndex: 3,
                                  boxShadow:
                                    "0 0 30px rgba(102, 126, 234, 0.4)",
                                }}
                              />
                            </div>
                          </div>

                          <div className="smallpic d-flex gap-3 justify-content-center mt-4">
                            <img
                              src={`/${data.def_img}`}
                              alt={data.name}
                              className="img-fluid"
                              onClick={() => {
                                setShowImage(data.def_img);
                                openFullScreen();
                              }}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "12px",
                                cursor: "zoom-in",
                                border:
                                  showImage === data.def_img || !showImage
                                    ? "3px solid #667eea"
                                    : "3px solid transparent",
                                transition: "all 0.3s ease",
                                boxShadow:
                                  showImage === data.def_img || !showImage
                                    ? "0 5px 15px rgba(102, 126, 234, 0.4)"
                                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                                e.currentTarget.style.borderColor = "#667eea";
                              }}
                              onMouseLeave={(e) => {
                                if (showImage !== data.def_img && showImage) {
                                  e.currentTarget.style.borderColor =
                                    "transparent";
                                }
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />

                            <img
                              src={`/${data.sec_img}`}
                              alt={data.name}
                              className="img-fluid"
                              onClick={() => {
                                setShowImage(data.sec_img);
                                openFullScreen();
                              }}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "12px",
                                cursor: "zoom-in",
                                border:
                                  showImage === data.sec_img
                                    ? "3px solid #667eea"
                                    : "3px solid transparent",
                                transition: "all 0.3s ease",
                                boxShadow:
                                  showImage === data.sec_img
                                    ? "0 5px 15px rgba(102, 126, 234, 0.4)"
                                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                                e.currentTarget.style.borderColor = "#667eea";
                              }}
                              onMouseLeave={(e) => {
                                if (showImage !== data.sec_img) {
                                  e.currentTarget.style.borderColor =
                                    "transparent";
                                }
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-around">
                    {data && (
                      <>
                        <div style={{ marginBottom: "30px" }}>
                          <h1
                            style={{
                              fontSize: "2.5rem",
                              fontWeight: "700",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              marginBottom: "15px",
                            }}
                          >
                            {data.name}
                          </h1>
                          <h2
                            style={{
                              fontSize: "1.5rem",
                              color: "#555",
                              fontWeight: "400",
                              lineHeight: "1.6",
                            }}
                          >
                            {data.product_title}
                          </h2>
                        </div>
                        <div
                          className="d-flex gap-3 align-items-center"
                          style={{
                            marginBottom: "30px",
                            padding: "20px",
                            background:
                              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                            borderRadius: "15px",
                          }}
                        >
                          <p
                            className="fs-4 mb-0"
                            style={{ fontWeight: "600", color: "#333" }}
                          >
                            Price:
                          </p>
                          <p
                            className={`mb-0 ${
                              data.isOffer === true
                                ? "text-decoration-line-through"
                                : "fs-3 text-danger fw-bold"
                            }`}
                            style={{
                              fontSize:
                                data.isOffer === true ? "1.5rem" : "2rem",
                              color: data.isOffer === true ? "#999" : "#e74c3c",
                            }}
                          >
                            ${data.org_price}
                          </p>
                          {data.isOffer === "true" && (
                            <p
                              className="mb-0 fw-bold"
                              style={{
                                fontSize: "2rem",
                                color: "#27ae60",
                                background:
                                  "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              ${data.new_price}
                            </p>
                          )}
                        </div>
                        <div
                          className="d-flex flex-wrap align-items-center gap-3"
                          style={{ marginTop: "30px" }}
                        >
                          <div>
                            <button
                              onClick={() =>
                                handleAddToCart(
                                  data,
                                  "Add to Cart Button that clicked"
                                )
                              }
                              style={{
                                background: "#27ae60",
                                border: "3px solid #fff",
                                borderRadius: "25px",
                                padding: "12px 30px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "1.1rem",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#fff";
                                e.currentTarget.style.color = "#27ae60";
                                e.currentTarget.style.transform =
                                  "scale(1.05) translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#27ae60";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.transform =
                                  "scale(1) translateY(0)";
                              }}
                            >
                              Add To Cart
                            </button>
                            <span
                              className="badge"
                              style={{
                                marginLeft: "10px",
                                background: "#667eea",
                                color: "#fff",
                                padding: "8px 15px",
                                borderRadius: "20px",
                                fontSize: "1rem",
                                fontWeight: "600",
                                border: "2px solid #fff",
                              }}
                            >
                              10
                            </span>
                          </div>
                          <div>
                            <Link
                              onClick={() =>
                                handleEdit(data, "Edit Button that clicked")
                              }
                              className={`btn ${
                                userType === "admin" ? "" : "disabled"
                              }`}
                              style={{
                                background:
                                  userType === "admin" ? "#f39c12" : "#ccc",
                                border: "3px solid #fff",
                                borderRadius: "25px",
                                padding: "12px 30px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "1rem",
                                cursor:
                                  userType === "admin"
                                    ? "pointer"
                                    : "not-allowed",
                                transition: "all 0.3s ease",
                                textDecoration: "none",
                              }}
                              onMouseEnter={(e) => {
                                if (userType === "admin") {
                                  e.currentTarget.style.background = "#fff";
                                  e.currentTarget.style.color = "#f39c12";
                                  e.currentTarget.style.transform =
                                    "scale(1.05) translateY(-2px)";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (userType === "admin") {
                                  e.currentTarget.style.background = "#f39c12";
                                  e.currentTarget.style.color = "#fff";
                                  e.currentTarget.style.transform =
                                    "scale(1) translateY(0)";
                                }
                              }}
                            >
                              Edit Product
                            </Link>
                          </div>
                          <div>
                            <button
                              className={`btn ${
                                userType === "admin" ? "" : "disabled"
                              }`}
                              onClick={() => {
                                DeleteProduct(data.id);
                              }}
                              style={{
                                background:
                                  userType === "admin" ? "#e74c3c" : "#ccc",
                                border: "3px solid #fff",
                                borderRadius: "25px",
                                padding: "12px 30px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "1rem",
                                cursor:
                                  userType === "admin"
                                    ? "pointer"
                                    : "not-allowed",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                if (userType === "admin") {
                                  e.currentTarget.style.background = "#fff";
                                  e.currentTarget.style.color = "#e74c3c";
                                  e.currentTarget.style.transform =
                                    "scale(1.05) translateY(-2px)";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (userType === "admin") {
                                  e.currentTarget.style.background = "#e74c3c";
                                  e.currentTarget.style.color = "#fff";
                                  e.currentTarget.style.transform =
                                    "scale(1) translateY(0)";
                                }
                              }}
                            >
                              Delete Product
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="description-wrapper py-5"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              }}
            >
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h4
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "25px",
                      }}
                    >
                      Description
                    </h4>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        padding: "30px",
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: "1.8",
                          color: "#555",
                          margin: 0,
                        }}
                      >
                        {data && data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section
              className="reviews-wrapper py-5"
              style={{
                background: "linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)",
              }}
            >
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h3
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "30px",
                      }}
                    >
                      Reviews
                    </h3>
                    <div className="review-inner-wrapper">
                      <div
                        className="review-head d-flex justify-content-between align-items-center"
                        style={{
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(20px)",
                          padding: "25px",
                          borderRadius: "20px",
                          marginBottom: "30px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <div>
                          <h4
                            className="mb-2"
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "600",
                              color: "#333",
                            }}
                          >
                            Customer Reviews
                          </h4>
                          <div className="d-flex align-items-center gap-3">
                            <ReactStars
                              count={5}
                              size={24}
                              value={4}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p
                              className="mb-0"
                              style={{ fontSize: "1rem", color: "#666" }}
                            >
                              Based on 2 Reviews
                            </p>
                          </div>
                        </div>

                        {orderdProduct && (
                          <div>
                            <button
                              type="button"
                              style={{
                                background: "none",
                                border: "none",
                                color: "#667eea",
                                textDecoration: "none",
                                fontWeight: "600",
                                fontSize: "1.1rem",
                                borderBottom: "2px solid #667eea",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                                padding: 0,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#764ba2";
                                e.currentTarget.style.borderBottomColor =
                                  "#764ba2";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#667eea";
                                e.currentTarget.style.borderBottomColor =
                                  "#667eea";
                              }}
                            >
                              Write a review
                            </button>
                          </div>
                        )}
                      </div>

                      <div
                        className="review-form py-4"
                        style={{
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(20px)",
                          padding: "30px",
                          borderRadius: "20px",
                          marginBottom: "30px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            color: "#333",
                            marginBottom: "20px",
                          }}
                        >
                          Write a Review
                        </h4>
                        <form action="" className="d-flex flex-column gap-3">
                          <div>
                            <ReactStars
                              count={5}
                              size={28}
                              value={5}
                              edit={true}
                              activeColor="#ffd700"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              style={{
                                padding: "12px 20px",
                                borderRadius: "12px",
                                border: "2px solid #e0e0e0",
                                fontSize: "1rem",
                                transition: "all 0.3s ease",
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#667eea";
                                e.currentTarget.style.boxShadow =
                                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = "#e0e0e0";
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            />
                          </div>

                          <div>
                            <textarea
                              name=""
                              id=""
                              className="w-100 form-control"
                              cols="30"
                              rows="4"
                              placeholder="Comments"
                              style={{
                                padding: "12px 20px",
                                borderRadius: "12px",
                                border: "2px solid #e0e0e0",
                                fontSize: "1rem",
                                transition: "all 0.3s ease",
                                resize: "vertical",
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#667eea";
                                e.currentTarget.style.boxShadow =
                                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = "#e0e0e0";
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            ></textarea>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="button border-0"
                              style={{
                                background: "#667eea",
                                border: "3px solid #fff",
                                color: "#fff",
                                padding: "12px 30px",
                                borderRadius: "25px",
                                fontWeight: "600",
                                fontSize: "1rem",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#fff";
                                e.currentTarget.style.color = "#667eea";
                                e.currentTarget.style.transform =
                                  "scale(1.05) translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#667eea";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.transform =
                                  "scale(1) translateY(0)";
                              }}
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="reviews mt-4">
                        {[
                          { name: "user name", rating: 4 },
                          { name: "user name", rating: 5 },
                          { name: "user name", rating: 3 },
                        ].map((review, index) => (
                          <div
                            key={index}
                            className="review mb-4"
                            style={{
                              background: "rgba(255, 255, 255, 0.9)",
                              backdropFilter: "blur(20px)",
                              padding: "25px",
                              borderRadius: "20px",
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-5px)";
                              e.currentTarget.style.boxShadow =
                                "0 15px 40px rgba(0, 0, 0, 0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow =
                                "0 10px 30px rgba(0, 0, 0, 0.1)";
                            }}
                          >
                            <div className="d-flex gap-3 align-items-center mb-3">
                              <h4
                                className="mb-0"
                                style={{
                                  fontSize: "1.2rem",
                                  fontWeight: "600",
                                  color: "#333",
                                }}
                              >
                                {review.name}
                              </h4>
                              <ReactStars
                                count={5}
                                size={20}
                                value={review.rating}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                            <p
                              className="mt-3 mb-0"
                              style={{
                                fontSize: "1rem",
                                lineHeight: "1.7",
                                color: "#666",
                              }}
                            >
                              Lorem ipsum dolor sit amet consecteturipsum dolor
                              sit amet consectetur adipisicing elit.
                              Voluptatibus, delectus minima! Animi quaerat s g
                              elit. Voluptatibus, delectus minima! Animi quaerat
                              sed illo?
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="popular-wrapper py-5"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              }}
            >
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h3
                      className="section-heading"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "30px",
                        textAlign: "center",
                      }}
                    >
                      Our Popular Products
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <ProductCard />
                </div>
              </div>
            </section>

            {/* Full Screen Image Zoom Modal */}
            {isFullScreen && data && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  zIndex: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  animation: "fadeIn 0.3s ease",
                }}
                onClick={closeFullScreen}
              >
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                  @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                  }
                `}</style>

                {/* Close Button */}
                <button
                  onClick={closeFullScreen}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "#667eea",
                    border: "3px solid #fff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                    fontSize: "28px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    zIndex: 10000,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  ×
                </button>

                {/* Zoom Controls */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    background: "#fff",
                    padding: "15px 25px",
                    borderRadius: "30px",
                    border: "3px solid #667eea",
                    zIndex: 10000,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    style={{
                      background: zoomLevel <= 0.5 ? "#fff" : "#667eea",
                      border: "3px solid #667eea",
                      borderRadius: "50%",
                      width: "45px",
                      height: "45px",
                      color: zoomLevel <= 0.5 ? "#667eea" : "#fff",
                      fontSize: "24px",
                      fontWeight: "bold",
                      cursor: zoomLevel <= 0.5 ? "not-allowed" : "pointer",
                      opacity: zoomLevel <= 0.5 ? 0.5 : 1,
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (zoomLevel > 0.5) {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.color = "#667eea";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (zoomLevel > 0.5) {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "700",
                      minWidth: "70px",
                      textAlign: "center",
                      background: "#667eea",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      border: "2px solid #667eea",
                    }}
                  >
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    style={{
                      background: zoomLevel >= 3 ? "#fff" : "#667eea",
                      border: "3px solid #667eea",
                      borderRadius: "50%",
                      width: "45px",
                      height: "45px",
                      color: zoomLevel >= 3 ? "#667eea" : "#fff",
                      fontSize: "24px",
                      fontWeight: "bold",
                      cursor: zoomLevel >= 3 ? "not-allowed" : "pointer",
                      opacity: zoomLevel >= 3 ? 0.5 : 1,
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (zoomLevel < 3) {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.color = "#667eea";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (zoomLevel < 3) {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={handleResetZoom}
                    style={{
                      background: "#fff",
                      border: "3px solid #667eea",
                      borderRadius: "25px",
                      padding: "10px 25px",
                      color: "#667eea",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      marginLeft: "10px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#667eea";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#667eea";
                    }}
                  >
                    Reset
                  </button>
                </div>

                {/* Image Container */}
                <div
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "zoomIn 0.3s ease",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={`/${showImage ? showImage : data.def_img}`}
                    alt={data.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "90vh",
                      objectFit: "contain",
                      transform: `scale(${zoomLevel})`,
                      transition: "transform 0.3s ease",
                      filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5))",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                {/* Image Navigation (if multiple images) */}
                {data.sec_img && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "100px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "10px",
                      zIndex: 10000,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowImage(data.def_img)}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "10px",
                        border:
                          showImage === data.def_img || !showImage
                            ? "3px solid #667eea"
                            : "3px solid #fff",
                        overflow: "hidden",
                        cursor: "pointer",
                        background:
                          showImage === data.def_img || !showImage
                            ? "#fff"
                            : "#667eea",
                        transition: "all 0.3s ease",
                        padding: "3px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#667eea";
                        e.currentTarget.style.background = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        if (showImage !== data.def_img && showImage) {
                          e.currentTarget.style.borderColor = "#fff";
                          e.currentTarget.style.background = "#667eea";
                        }
                      }}
                    >
                      <img
                        src={`/${data.def_img}`}
                        alt="Thumbnail 1"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "7px",
                        }}
                      />
                    </button>
                    <button
                      onClick={() => setShowImage(data.sec_img)}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "10px",
                        border:
                          showImage === data.sec_img
                            ? "3px solid #667eea"
                            : "3px solid #fff",
                        overflow: "hidden",
                        cursor: "pointer",
                        background:
                          showImage === data.sec_img ? "#fff" : "#667eea",
                        transition: "all 0.3s ease",
                        padding: "3px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#667eea";
                        e.currentTarget.style.background = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        if (showImage !== data.sec_img) {
                          e.currentTarget.style.borderColor = "#fff";
                          e.currentTarget.style.background = "#667eea";
                        }
                      }}
                    >
                      <img
                        src={`/${data.sec_img}`}
                        alt="Thumbnail 2"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "7px",
                        }}
                      />
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )
      )}
    </>
  );
};

export default SingleProduct;
