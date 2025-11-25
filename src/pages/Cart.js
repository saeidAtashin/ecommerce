import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseCart,
  getTotals,
  increaseCart,
  removeFromCart,
} from "../toolkit/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showFloatingCheckout, setShowFloatingCheckout] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const checkoutRef = useRef(null);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Check if checkout button is visible
  useEffect(() => {
    const handleScroll = () => {
      if (checkoutRef.current && cart.cartItems.length > 0) {
        const rect = checkoutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show floating button only when:
        // 1. Checkout section is below the viewport (we haven't reached it yet)
        // 2. Checkout section is not visible in viewport
        // Hide when we've scrolled past it (top of checkout is above viewport top)
        const isCheckoutInViewport = rect.top < windowHeight && rect.bottom > 0;
        const hasScrolledPast = rect.top < 0; // Checkout section is above viewport
        
        const shouldShow = !isCheckoutInViewport && !hasScrolledPast;
        
        if (shouldShow !== showFloatingCheckout) {
          if (shouldShow) {
            // Button is appearing - use enter animation
            setShowFloatingCheckout(true);
            setAnimationClass("floating-checkout-enter");
            // After enter animation completes, switch to float animation
            setTimeout(() => {
              setAnimationClass("floating-checkout-float");
            }, 400); // Match scaleIn animation duration
          } else {
            // Button is disappearing - use exit animation
            setAnimationClass("floating-checkout-exit");
            setTimeout(() => {
              setShowFloatingCheckout(false);
              setAnimationClass("");
            }, 300); // Match scaleOut animation duration
          }
        } else if (shouldShow && animationClass === "") {
          // If button should be shown but no animation class, apply float
          setAnimationClass("floating-checkout-float");
        }
      } else {
        if (showFloatingCheckout) {
          setAnimationClass("floating-checkout-exit");
          setTimeout(() => {
            setShowFloatingCheckout(false);
            setAnimationClass("");
          }, 300);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cart.cartItems.length, showFloatingCheckout]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleRemoveQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleAddQuantity = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#f5f5f5",
        padding: "clamp(20px, 4vw, 40px) clamp(10px, 2vw, 20px)",
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(20px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0) scale(1);
            }
          }
          @keyframes scaleOut {
            from {
              opacity: 1;
              transform: translateX(-50%) translateY(0) scale(1);
            }
            to {
              opacity: 0;
              transform: translateX(-50%) translateY(20px) scale(0.8);
            }
          }
          @keyframes floatButton {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-8px);
            }
          }
          .floating-checkout-enter {
            animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                       floatButton 3s ease-in-out infinite 0.4s;
          }
          .floating-checkout-float {
            animation: floatButton 3s ease-in-out infinite;
          }
          .floating-checkout-exit {
            animation: scaleOut 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
          }
          .cart-item-animated {
            animation: fadeInUp 0.5s ease forwards;
          }
          @media (max-width: 768px) {
            .cart-header-grid {
              display: none !important;
            }
            .cart-item-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            .cart-item-product {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
            .cart-item-image {
              width: 100% !important;
              height: auto !important;
              max-height: 250px !important;
            }
            .cart-item-details {
              width: 100% !important;
            }
            .cart-item-price,
            .cart-item-quantity,
            .cart-item-total {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              padding: 10px 0 !important;
              border-top: 1px solid #e0e0e0 !important;
            }
            .cart-item-price::before {
              content: "Price: ";
              font-weight: 600;
            }
            .cart-item-quantity::before {
              content: "Quantity: ";
              font-weight: 600;
            }
            .cart-item-total::before {
              content: "Total: ";
              font-weight: 600;
            }
            .cart-summary-container {
              flex-direction: column !important;
            }
            .cart-summary-checkout {
              width: 100% !important;
              margin-top: 1.5rem !important;
            }
          }
          @media (max-width: 576px) {
            .cart-container {
              padding: 20px 10px !important;
            }
            .cart-item-padding {
              padding: 15px !important;
            }
          }
        `}
      </style>

      <div
        className="container-sm cart-container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1a1a1a",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "700",
            marginBottom: "3rem",
            animation: "fadeInUp 0.8s ease",
            letterSpacing: "-1px",
          }}
        >
          Shopping Cart
        </h2>
        {cart.cartItems.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              background: "#fff",
              borderRadius: "20px",
              padding: "60px 40px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              animation: "fadeInUp 0.8s ease",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                color: "#333",
                marginBottom: "2rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Your Cart is currently empty
            </p>
            <img
              src="images/empty-box.gif"
              alt="Empty cart"
              style={{
                maxWidth: "200px",
                marginBottom: "2rem",
                animation: "float 3s ease-in-out infinite",
              }}
            />
            <Link
              to="/product"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#667eea",
                padding: "15px 30px",
                borderRadius: "25px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#764ba2";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#667eea";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        ) : (
          <div>
            <div
              className="cart-header-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr 1fr",
                gap: "1rem",
                padding: "20px",
                background: "#fff",
                borderRadius: "15px",
                marginBottom: "1.5rem",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                animation: "fadeInUp 0.6s ease",
              }}
            >
              <h3
                style={{
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Product
              </h3>
              <h3
                style={{
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Price
              </h3>
              <h3
                style={{
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Quantity
              </h3>
              <h3
                style={{
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: "right",
                }}
              >
                Total
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {cart.cartItems?.map((cartItem, index) => (
                <div
                  key={cartItem.id}
                  className="cart-item-animated cart-item-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr 1fr 1fr",
                    gap: "1rem",
                    alignItems: "center",
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "clamp(15px, 3vw, 25px)",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.borderColor = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                >
                  <div
                    className="cart-item-product"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(10px, 2vw, 20px)",
                    }}
                  >
                    <img
                      src={cartItem.def_img}
                      alt={cartItem.name}
                      className="cart-item-image"
                      style={{
                        width: "clamp(80px, 15vw, 120px)",
                        height: "clamp(80px, 15vw, 120px)",
                        objectFit: "cover",
                        borderRadius: "15px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                        transition: "transform 0.3s ease",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div className="cart-item-details" style={{ flex: 1 }}>
                      <h3
                        style={{
                          color: "#333",
                          fontWeight: "600",
                          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                          marginBottom: "8px",
                        }}
                      >
                        {cartItem.name}
                      </h3>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                          marginBottom: "12px",
                        }}
                      >
                        {cartItem.brand}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        style={{
                          background: "transparent",
                          border: "2px solid #e74c3c",
                          color: "#e74c3c",
                          padding: "8px 20px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#e74c3c";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#e74c3c";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div
                    className="cart-item-price"
                    style={{
                      color: "#333",
                      fontWeight: "600",
                      fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                    }}
                  >
                    $
                    {cartItem.isOffer ? cartItem.new_price : cartItem.org_price}
                  </div>
                  <div
                    className="cart-item-quantity"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "15px",
                      background: "#f8f8f8",
                      borderRadius: "15px",
                      padding: "10px",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <button
                      onClick={() => handleRemoveQuantity(cartItem)}
                      style={{
                        background: "#fff",
                        border: "1px solid #e0e0e0",
                        color: "#333",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.borderColor = "#667eea";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.borderColor = "#e0e0e0";
                        e.currentTarget.style.color = "#333";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      -
                    </button>
                    <div
                      style={{
                        color: "#333",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        minWidth: "30px",
                        textAlign: "center",
                      }}
                    >
                      {cartItem.cartQuantity}
                    </div>
                    <button
                      onClick={() => handleAddQuantity(cartItem)}
                      style={{
                        background: "#fff",
                        border: "1px solid #e0e0e0",
                        color: "#333",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.borderColor = "#667eea";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.borderColor = "#e0e0e0";
                        e.currentTarget.style.color = "#333";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div
                    className="cart-item-total"
                    style={{
                      color: "#333",
                      fontWeight: "700",
                      fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                      textAlign: "right",
                    }}
                  >
                    $
                    {(cartItem.isOffer
                      ? cartItem.new_price
                      : cartItem.org_price) * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="cart-summary-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => handleClearCart()}
                style={{
                  background: "transparent",
                  border: "2px solid #e74c3c",
                  color: "#e74c3c",
                  padding: "clamp(12px, 2.5vw, 15px) clamp(20px, 4vw, 30px)",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px rgba(231, 76, 60, 0.2)",
                  animation: "fadeInUp 0.8s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e74c3c";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(231, 76, 60, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#e74c3c";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(231, 76, 60, 0.2)";
                }}
              >
                Clear Cart
              </button>
              <div
                ref={checkoutRef}
                className="cart-summary-checkout"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  minWidth: "300px",
                  width: "100%",
                  maxWidth: "100%",
                  animation: "fadeInUp 0.8s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                    paddingBottom: "15px",
                    borderBottom: "2px solid #f0f0f0",
                  }}
                >
                  <span
                    style={{
                      color: "#333",
                      fontSize: "1.3rem",
                      fontWeight: "500",
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    style={{
                      color: "#667eea",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                    }}
                  >
                    ${cart.cartTotalAmount}
                  </span>
                </div>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Taxes and shipping calculated at checkout
                </p>
                <button
                  className="btn btn-info checkout-width"
                  style={{
                    width: "100%",
                    background: "#667eea",
                    border: "none",
                    color: "#fff",
                    padding: "15px 30px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    marginBottom: "20px",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#764ba2";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  Check Out
                </button>
                <Link
                  to="/product"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    color: "#667eea",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(-5px)";
                    e.currentTarget.style.color = "#764ba2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#667eea";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Checkout Button */}
      {showFloatingCheckout && (
        <div
          className={animationClass}
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            width: "100%",
            maxWidth: "500px",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "20px 30px",
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
              border: "2px solid #667eea",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              width: "100%",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  color: "#666",
                  fontSize: "0.85rem",
                  marginBottom: "5px",
                  fontWeight: "500",
                }}
              >
                Total Amount
              </div>
              <div
                style={{
                  color: "#667eea",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                ${cart.cartTotalAmount}
              </div>
            </div>
            <button
              onClick={() => {
                checkoutRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                color: "#fff",
                padding: "15px 35px",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 25px rgba(102, 126, 234, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(102, 126, 234, 0.4)";
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
