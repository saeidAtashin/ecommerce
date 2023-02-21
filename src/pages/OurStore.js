import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";


const OurStore = () => {
  const  [grid, setGrid]  = useState(4);

  return (
    <>
      <Meta title={"Our Store"} /> <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By Categories </h3>
                <div>
                  <ul className="ps-0">
                    <li> Watch </li> <li> Tv </li> <li> Camera </li>
                    <li> Laptop </li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
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
                      <label htmlfor="floatingInput"> From </label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlfor="floatingInput1"> To </label>
                    </div>
                  </div>
                  <h5 className="sub-title"> Colors </h5>
                  <div>
                   <Color/>
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
              <div className="filter-card mb-3">
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
              <div className="filter-card">
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
            <div className="col-9">
              <div className="filter-sort-grid MB-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Feaured</option>
                      <option value="best-selling" selected="selected">
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

                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        alt=""
                        className="f-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        alt=""
                        className="f-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        alt=""
                        className="f-block img-fluid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
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
                <div className="d-flex gap-10 flex-wrap flex-fill align-items-center w-100">
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
