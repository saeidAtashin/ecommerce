import React, { useEffect } from "react";
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
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
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
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        padding: "40px 20px",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
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
          .cart-item-animated {
            animation: fadeInUp 0.5s ease forwards;
          }
        `}
      </style>

      {/* Decorative floating elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.08)",
          filter: "blur(30px)",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "700",
            marginBottom: "3rem",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            animation: "fadeInUp 0.8s ease",
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
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "30px",
              padding: "60px 40px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              animation: "fadeInUp 0.8s ease",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                color: "#fff",
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
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                padding: "15px 30px",
                borderRadius: "25px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.2)";
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
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr 1fr",
                gap: "1rem",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                marginBottom: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                animation: "fadeInUp 0.6s ease",
              }}
            >
              <h3
                style={{
                  color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
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
                  className="cart-item-animated"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr 1fr 1fr",
                    gap: "1rem",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "25px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0, 0, 0, 0.15)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img
                      src={cartItem.def_img}
                      alt={cartItem.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "15px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                          marginBottom: "8px",
                        }}
                      >
                        {cartItem.name}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontSize: "0.9rem",
                          marginBottom: "12px",
                        }}
                      >
                        {cartItem.brand}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        style={{
                          background: "rgba(231, 76, 60, 0.2)",
                          border: "2px solid rgba(231, 76, 60, 0.5)",
                          color: "#fff",
                          padding: "8px 20px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(231, 76, 60, 0.4)";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(231, 76, 60, 0.2)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    $
                    {cartItem.isOffer ? cartItem.new_price : cartItem.org_price}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "15px",
                      background: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "15px",
                      padding: "10px",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <button
                      onClick={() => handleRemoveQuantity(cartItem)}
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        color: "#fff",
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
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.3)";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      -
                    </button>
                    <div
                      style={{
                        color: "#fff",
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
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        color: "#fff",
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
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.3)";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.3rem",
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
                  background: "rgba(231, 76, 60, 0.2)",
                  border: "2px solid rgba(231, 76, 60, 0.5)",
                  color: "#fff",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  animation: "fadeInUp 0.8s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(231, 76, 60, 0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(231, 76, 60, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(231, 76, 60, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.2)";
                }}
              >
                Clear Cart
              </button>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "25px",
                  padding: "30px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  minWidth: "300px",
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
                    borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.3rem",
                      fontWeight: "500",
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                    }}
                  >
                    ${cart.cartTotalAmount}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
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
                    background: "rgba(255, 255, 255, 0.25)",
                    border: "2px solid rgba(255, 255, 255, 0.4)",
                    color: "#fff",
                    padding: "15px 30px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    marginBottom: "20px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.35)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0, 0, 0, 0.2)";
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
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
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
    </div>
  );
};

export default Cart;
