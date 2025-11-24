import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../toolkit/features/cartSlice";
const lang = [
  {
    code: "fa",
    name: "فارسی",
    country_code: "ir",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Header = ({ username }) => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = lang.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // const buyCount = useSelector((state) => state.counter.value);
  // const filter = useSelector((state) => state.productFilter.filter);

  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartTotalQuantity, dispatch]);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <>
      <style>
        {`
          .mobile-menu-sidebar {
            direction: rtl;
          }
          .mobile-menu-sidebar > * {
            direction: ltr;
          }
          .mobile-menu-sidebar::-webkit-scrollbar {
            width: 6px;
          }
          .mobile-menu-sidebar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .mobile-menu-sidebar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.4);
            border-radius: 10px;
          }
          .mobile-menu-sidebar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.6);
          }
          .mobile-menu-sidebar {
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
          }
          .rotate {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
        `}
      </style>
      <header
        className="header-top-strip py-2 py-md-3 d-none d-xl-block"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#667eea",
          borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
          zIndex: 100,
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50%",
            left: "10%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container-sm"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-3">
              <p
                className="text-white mb-0"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
              >
                {t("free_sipping")}
              </p>
            </div>
            <div className="dropdown col-2 d-none d-xl-flex align-items-center justify-content-center">
              <button
                className="btn btn-link dropdown-toggle p-0 px-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "20px",
                  color: "#fff",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  fill="white"
                  className="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </button>
              <ul
                className="dropdown-menu"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                }}
              >
                {lang.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                      disabled={code === currentLanguageCode}
                      style={{
                        borderRadius: "10px",
                        padding: "10px 15px",
                        transition: "all 0.3s ease",
                        background:
                          code === currentLanguageCode
                            ? "#667eea"
                            : "transparent",
                        color: code === currentLanguageCode ? "#fff" : "#333",
                        opacity: code === currentLanguageCode ? 1 : 0.8,
                      }}
                      onMouseEnter={(e) => {
                        if (code !== currentLanguageCode) {
                          e.currentTarget.style.background = "#f0f0f0";
                          e.currentTarget.style.opacity = "1";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (code !== currentLanguageCode) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.opacity = "0.8";
                        }
                      }}
                    >
                      <span
                        className={`fi fi-${country_code} mx-2`}
                        style={{
                          opacity: code === currentLanguageCode ? 1 : 0.8,
                        }}
                      ></span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="admin/addproduct"
              className="text-white mb-0 col-3 d-none d-xl-flex align-items-center justify-content-center"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                padding: "8px 20px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "13px",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <p className="mb-0">ADMIN</p>
            </Link>
            <div className="col-3">
              <p
                className="text-end text-white mb-0"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {t("phone_number")} :{" "}
                <a
                  className="text-white"
                  href="tel: +98 9368165125"
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  09368165125
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Floating Mobile Buttons */}
      <div
        className="d-xl-none"
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          right: "15px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "10px 15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            type="button"
            className="border-0 bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              background: "transparent",
              color: "#000",
              borderRadius: "12px",
              padding: "12px 14px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {isMobileMenuOpen ? (
              <HiX size={32} />
            ) : (
              <HiMenuAlt3 className="rotate" size={32} />
            )}
          </button>

          {/* Mobile Logo */}
          <Link
            className="text-decoration-none"
            to="/"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.2rem",
              fontWeight: "700",
              letterSpacing: "-1px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Atashin Shop.
          </Link>
        </div>

        {/* Mobile Cart Button */}
        <Link
          to="/cart"
          className="position-relative text-decoration-none"
          style={{
            background: "#667eea",
            color: "#fff",
            borderRadius: "12px",
            padding: "10px 12px",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#764ba2";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#667eea";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="/images/cart.svg"
            alt="cart"
            style={{
              width: "20px",
              height: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />
          {cartTotalQuantity > 0 && (
            <span
              className="badge"
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#e74c3c",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "700",
                border: "2px solid #fff",
              }}
            >
              {cartTotalQuantity}
            </span>
          )}
        </Link>
      </div>

      <header
        className="header-upper py-3 py-md-4 d-none d-xl-block"
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(102, 126, 234, 0.1)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.05)",
          zIndex: 100,
        }}
      >
        <div className="container-sm">
          <div className="navbar navbar-expand-xl d-flex row align-items-center justify-content-between">
            {/* Logo */}
            <div className="col-6 col-md-3 col-xl-2 d-flex align-items-center justify-content-center justify-content-md-start">
              <h4 style={{ margin: 0 }}>
                <Link
                  className="text-decoration-none"
                  to="/"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                    fontWeight: "700",
                    letterSpacing: "-1px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Atashin Shop.
                </Link>
              </h4>
            </div>

            {/* Search Bar - Desktop */}
            <div className="col-12 col-md-6 col-xl-5 d-none d-md-flex mb-3 mb-md-0">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                  style={{
                    border: "2px solid #e0e0e0",
                    borderRadius: "25px 0 0 25px",
                    paddingLeft: "20px",
                    fontSize: "14px",
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
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                  style={{
                    background: "#667eea",
                    border: "2px solid #667eea",
                    borderRadius: "0 25px 25px 0",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#764ba2";
                    e.currentTarget.style.borderColor = "#764ba2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.borderColor = "#667eea";
                  }}
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="col-12 col-xl-5 d-none d-xl-flex align-items-center justify-content-end">
              <div className="header-upper-links d-flex align-items-center justify-content-between gap-3">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-2 text-decoration-none"
                    style={{
                      color: "#333",
                      padding: "10px 15px",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(102, 126, 234, 0.1)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src="/images/compare.svg"
                      alt="compare"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          lineHeight: "1.3",
                        }}
                      >
                        Compare <br /> Products
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Wishlists"
                    className="d-flex img-small-collapse align-items-center gap-2 text-decoration-none"
                    style={{
                      color: "#333",
                      padding: "10px 15px",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(102, 126, 234, 0.1)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src="/images/wishlist.svg"
                      alt="wishlist"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          lineHeight: "1.3",
                        }}
                      >
                        Favourite <br /> Wishlist
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{
                      color: "#333",
                      padding: "10px 15px",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(102, 126, 234, 0.1)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src="/images/user.svg"
                      alt="user"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <div>
                      {username ? (
                        <Link
                          className="text-decoration-none"
                          onClick={() => {
                            sessionStorage.clear();
                            username = username;
                            window.location.reload();
                          }}
                          style={{
                            color: "#333",
                            fontSize: "12px",
                            fontWeight: "600",
                            lineHeight: "1.3",
                          }}
                        >
                          Log Out <br /> {username}
                        </Link>
                      ) : (
                        <Link
                          className="text-decoration-none"
                          to="/login"
                          style={{
                            color: "#333",
                            fontSize: "12px",
                            fontWeight: "600",
                            lineHeight: "1.3",
                          }}
                        >
                          Log In <br /> My Account
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-2 text-decoration-none position-relative"
                    style={{
                      color: "#333",
                      padding: "10px 15px",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(102, 126, 234, 0.1)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src="/images/cart.svg"
                      alt="cart"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <div className="d-flex flex-column">
                      <span
                        className="badge"
                        style={{
                          background: "#e74c3c",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: "700",
                          position: "absolute",
                          top: "5px",
                          left: "30px",
                          border: "2px solid #fff",
                        }}
                      >
                        {cartTotalQuantity}
                      </span>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          lineHeight: "1.3",
                        }}
                      >
                        Cart
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="d-xl-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          zIndex: 9998,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: "all 0.3s ease",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className="d-xl-none mobile-menu-sidebar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "85%",
          maxWidth: "350px",
          height: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          zIndex: 9999,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
          direction: "rtl",
        }}
      >
        {/* Mobile Menu Header */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4 style={{ margin: 0, color: "#fff", fontSize: "1.5rem" }}>Menu</h4>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              borderRadius: "8px",
              padding: "8px",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Mobile Search */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Product Here"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px 0 0 20px",
                padding: "12px 15px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: "14px",
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            />
            <span
              className="input-group-text"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "0 20px 20px 0",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <BsSearch size={20} />
            </span>
          </div>
        </div>

        {/* Mobile Language Selector */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Select Language
          </div>
          <div className="d-flex flex-column gap-2">
            {lang.map(({ code, name, country_code }) => (
              <button
                key={country_code}
                onClick={() => {
                  i18next.changeLanguage(code);
                  setIsMobileMenuOpen(false);
                }}
                disabled={code === currentLanguageCode}
                style={{
                  background:
                    code === currentLanguageCode
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(255, 255, 255, 0.1)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 15px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: code === currentLanguageCode ? "default" : "pointer",
                  opacity: code === currentLanguageCode ? 1 : 0.9,
                }}
                onMouseEnter={(e) => {
                  if (code !== currentLanguageCode) {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.opacity = "1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (code !== currentLanguageCode) {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.opacity = "0.9";
                  }
                }}
              >
                <span
                  className={`fi fi-${country_code}`}
                  style={{ fontSize: "20px" }}
                ></span>
                <span>{name}</span>
                {code === currentLanguageCode && (
                  <span style={{ marginLeft: "auto", fontSize: "12px" }}>
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Admin Button */}
        <div
          style={{
            padding: "0 20px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Link
            to="admin/addproduct"
            className="text-decoration-none d-block"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              padding: "12px 15px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: "center",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ADMIN PANEL
          </Link>
        </div>

        {/* Mobile Navigation Links */}
        <div style={{ padding: "20px 0" }}>
          <Link
            to="/compare-product"
            className="d-flex align-items-center gap-3 text-decoration-none"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: "#fff",
              padding: "15px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.paddingLeft = "25px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.paddingLeft = "20px";
            }}
          >
            <img
              src="/images/compare.svg"
              alt="compare"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              Compare Products
            </span>
          </Link>

          <Link
            to="/Wishlists"
            className="d-flex align-items-center gap-3 text-decoration-none"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: "#fff",
              padding: "15px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.paddingLeft = "25px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.paddingLeft = "20px";
            }}
          >
            <img
              src="/images/wishlist.svg"
              alt="wishlist"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              Favourite Wishlist
            </span>
          </Link>

          <div
            className="d-flex align-items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: "#fff",
              padding: "15px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src="/images/user.svg"
              alt="user"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <div>
              {username ? (
                <Link
                  className="text-decoration-none"
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.reload();
                  }}
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Log Out {username}
                </Link>
              ) : (
                <Link
                  className="text-decoration-none"
                  to="/login"
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Log In / My Account
                </Link>
              )}
            </div>
          </div>

          <Link
            to="/cart"
            className="d-flex align-items-center gap-3 text-decoration-none position-relative"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: "#fff",
              padding: "15px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.paddingLeft = "25px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.paddingLeft = "20px";
            }}
          >
            <img
              src="/images/cart.svg"
              alt="cart"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <span style={{ fontSize: "16px", fontWeight: "500" }}>Cart</span>
            <span
              className="badge"
              style={{
                background: "#e74c3c",
                color: "#fff",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
                marginLeft: "auto",
              }}
            >
              {cartTotalQuantity}
            </span>
          </Link>

          {/* Mobile Bottom Navigation Links */}
          <div
            style={{
              padding: "20px 0",
              borderTop: "2px solid rgba(255, 255, 255, 0.2)",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "0 20px 15px",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "14px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Navigation
            </div>
            {[
              { to: "/", label: "Home" },
              { to: "/product", label: "Our Store" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                className="text-decoration-none d-block"
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "#fff",
                  padding: "15px 20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.paddingLeft = "25px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.paddingLeft = "20px";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <header
        className="header-botton py-2 py-md-3 d-none d-md-block"
        style={{
          background: "#667eea",
          position: "relative",
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container-sm"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-3 gap-md-4 flex-wrap justify-content-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle d-flex align-items-center gap-2"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "#fff",
                        color: "#667eea",
                        border: "2px solid #fff",
                        borderRadius: "20px",
                        padding: "10px 20px",
                        fontWeight: "600",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.9)";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      Shop Categories
                    </button>
                    <ul
                      className="dropdown-menu p-2"
                      aria-labelledby="dropdownMenuButton1"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "none",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                        minWidth: "200px",
                      }}
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to=""
                          style={{
                            borderRadius: "10px",
                            padding: "10px 15px",
                            color: "#333",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#667eea";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#333";
                          }}
                        >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to=""
                          style={{
                            borderRadius: "10px",
                            padding: "10px 15px",
                            color: "#333",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#667eea";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#333";
                          }}
                        >
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to=""
                          style={{
                            borderRadius: "10px",
                            padding: "10px 15px",
                            color: "#333",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#667eea";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#333";
                          }}
                        >
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-4 flex-wrap">
                    {[
                      { to: "/", label: "Home" },
                      { to: "/product", label: "Our Store" },
                      { to: "/blogs", label: "Blogs" },
                      { to: "/contact", label: "Contact" },
                    ].map((link) => (
                      <Link
                        key={link.to}
                        className="text-decoration-none"
                        to={link.to}
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          padding: "8px 20px",
                          borderRadius: "20px",
                          transition: "all 0.3s ease",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.2)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
