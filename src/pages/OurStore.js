import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import { useTranslation } from "react-i18next";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const OurStore = ({ userType }) => {
  const [grid, setGrid] = useState(4);
  const { t } = useTranslation();
  const [productPerPage, setProductPerPage] = useState(9);

  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    fetch("https://apitest-lovat.vercel.app/products/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProdData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 1560) {
      setGrid(4);
    }
    if (windowSize.width < 1406) {
      setGrid(6);
    }
    if (windowSize.width < 1205) {
      setGrid(12);
    }
  }, [windowSize]);

  return (
    <>
      <Link
        to="admin/addproduct"
        className="text-dark mb-0 container-sm col-3 d-flex align-items-center justify-content-center btn btn-warning d-none d-none-off"
      >
        <p className="mb-0">ADMIN</p>
      </Link>
      <Meta title={t("our_store")} />
      <BreadCrumb title={t("our_store")} />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className={`${windowSize.width < 1560 ?"d-none" :   "col-3"}`}>





              <div
                className={`filter-card mb-3 ${
                  windowSize.width < 1560 ? "d-none" : ""
                }`}
              >
                <h3 className="filter-title"> Shop By Categories </h3>
                <div>
                  <ul className="ps-0">
                    <li> Watch </li>
                    <li> Tv </li>
                    <li> Camera </li>
                    <li> Laptop </li>
                  </ul>
                </div>
              </div>

              <div
                className={`filter-card mb-3 ${
                  windowSize.width < 1560 ? "d-none" : ""
                }`}
              >
                <h3 className="filter-title"> Filter by </h3>
                <div>
                  <h5 className="sub-title"> Availablity </h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock {1}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock {0}
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title"> Price </h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        // style={{height: "50px"}}
                        type="email"
                        className="form-control text-input-center"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput"> From </label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1"> To </label>
                    </div>
                  </div>
                  <h5 className="sub-title"> Colors </h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title"> Size </h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S {2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M {2}
                      </label>
                    </div>
                  </div>
                </div>
              </div>


              <div
                className={`filter-card mb-3 ${
                  windowSize.width < 1560 ? "d-none" : ""
                }`}
              >
                <h3 className="filter-title"> Product Tags </h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Lsptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`filter-card mb-3 ${
                  windowSize.width < 1560 ? "d-none" : ""
                }`}
              >
                <h3 className="filter-title"> Random Product </h3>
                <div>
                  <div className="random-products mb-0 d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                        <ReactStars
                          classNames="ReactStars"
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </h5>
                      <p> $ 300 </p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50 ">
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50 ">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                        <ReactStars
                          classNames="ReactStars"
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </h5>
                      <p> $ 300 </p>
                    </div>
                  </div>
                </div>
              </div>

              </div>


            <div className={` ${windowSize.width < 1560 ? "col-12" : "col-9"}`}>
              <div className="filter-sort-grid MB-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" defaultValue="selected">
                        {" "}
                        Best Selling{" "}
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>

                      <option value="price-ascending">Price, low-high</option>
                      <option value="price-descending">Price, high-low</option>

                      <option value="created-ascending">Date, old-new</option>
                      <option value="created-descending">Date, new-old</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10 ">
                    <p className="totalproducts mb-0">
                      {prodData.length} Products
                    </p>
                    <div
                      className={`d-flex gap-10 align-items-center grid  ${
                        windowSize.width < 1205 ? "d-none" : ""
                      }`}
                    >
                      <img
                        onClick={
                          windowSize.width > 1560
                            ? () => {
                                setGrid(3);
                                setProductPerPage(8);
                              }
                            : null
                        }
                        src="images/gr4.svg"
                        alt=""
                        className={`f-block img-fluid ${
                          windowSize.width < 1560 ? "opacity-disable" : ""
                        }`}
                      />
                      <img
                        onClick={
                          windowSize.width > 1560
                            ? () => {
                                setGrid(4);
                                setProductPerPage(9);
                              }
                            : null
                        }
                        src="images/gr3.svg"
                        alt=""
                        className={`f-block img-fluid ${
                          windowSize.width < 1406 ? "opacity-disable" : ""
                        }`}
                      />
                      <img
                        onClick={
                          windowSize.width > 1560
                            ? () => {
                                setGrid(6);
                                setProductPerPage(6);
                              }
                            : null
                        }
                        src="images/gr2.svg"
                        alt=""
                        className={`f-block img-fluid ${
                          windowSize.width < 1205 ? "opacity-disable " : ""
                        }`}
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                          setProductPerPage(5);
                        }}
                        src="images/gr.svg"
                        alt=""
                        className="f-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list py-4 ">
                <div className="d-flex gap-10 flex-wrap flex-fill align-items-center w-100 justify-content-center ">
                  <ProductCard
                    grid={grid}
                    productPerPage={productPerPage}
                    userType={userType}
                  />
                </div>
              {/* </div> */}
            </div>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default OurStore;
