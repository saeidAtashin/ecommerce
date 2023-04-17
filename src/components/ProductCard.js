import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import {addToCart} from '../toolkit/features/cartSlice'
const ProductCard = ({ grid, productPerPage, userType }) => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch()
  
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const DeleteProduct = (id) => {
    if (window.confirm("delete_product")) {
      fetch("http://localhost:8000/products/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("REMOVED");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const DetailProduct = (id) => {
    navigate("/product/" + id);
  };

  const EditProduct = (id) => {
    navigate("/editproduct/" + id);
  };

  const handleAddToCart = (item) => {
    console.log(item)
    dispatch(addToCart(item))
  }

  let location = useLocation();

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = data?.slice(firstProductIndex, lastProductIndex);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        currentProducts?.map((item, index) => (
          <div
            key={index}
            className={`col-3 ${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <div
              className={`product-card position-relative ${
                grid === 12
                  ? "d-flex align-items-center justify-content-around "
                  : "d-block"
              } `}
            >
              <div className="wishlist-icon position-absolute">
                <Link to="/Wishlists">
                  <img src="images/wish.svg" alt="wishlist" />
                </Link>
              </div>

              <div
                className="product-image d-flex"
                onClick={() => {
                  DetailProduct(item.id);
                }}
              >
                <img
                  src={item.def_img}
                  alt={item.name}
                  style={{ scale: "0.8", height: "275px" }}
                  className="img-fluid "
                />

                <img
                  src={item.sec_img}
                  alt={item.name}
                  style={{ scale: "0.8", height: "275px" }}
                  className="img-fluid"
                />
              </div>
              <div className="product-details ">
                <h5 className="brand">{item.name}</h5>
                <h6 className="brand">{item.brand}</h6>
                <h5
                  className="product-title"
                  onClick={() => {
                    DetailProduct(item.id);
                  }}
                >
                  {item.product_title}
                </h5>
                <ReactStars
                  classNames="ReactStars"
                  count={5}
                  value={item.avrage_stars}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente nostrum nesciunt, qui nihil impedt minima{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-05">
                    <p
                      className={`price mb-0 ${
                        item.isOffer === true
                          ? "text-decoration-line-through"
                          : "fs-5"
                      }`}
                    >
                      ${item.org_price}
                    </p>
                    {item.isOffer && (
                      <p className="text-danger mb-0 fw-bold fs-5">
                        ${item.new_price}
                      </p>
                    )}
                  </div>
                  <div className="d-flex align-items-center gap-10 ">
                    <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-info line-height-btn p-0 px-2 fs-6">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <Link>
                    <img src="images/prodcompare.svg" alt="procdompare" />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" />
                  </Link>
                  <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                  </Link>
                  {userType === "admin" && (
                    <>
                      <button
                        className="edit-hover"
                        onClick={() => {
                          EditProduct(item.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#008010"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </button>
                      <Link
                        onClick={() => {
                          DeleteProduct(item.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="d-flex alig-items-center justify-content-center text-center">
        <Pagination
          totalProduct={data?.length}
          productPerPage={productPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductCard;
