import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import { useState, useEffect } from "react";
import { Accordion, Card, CardHeader, CardBody } from "react-bootstrap";


const CompareProduct = () => {


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
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <>





        <div>
      <p>Window width: {windowSize.width}</p>
      <p>Window height: {windowSize.height}</p>
    </div>



    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Shop By Categories
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul className="ps-0">
              <li> Watch </li>
              <li> Tv </li>
              <li> Camera </li>
              <li> Laptop </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Filter by
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>



      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-3  d-flex gap-10 justify-content-between">
              <div className="compare-product-card flex-shrink-1 position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image ">
                  <img src="images/watch.jpg" alt="watch" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    {" "}
                    Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray{" "}
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5 className="mb-0">Brand:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Type:</h5>
                      <p className="mb-0"> Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">SKU:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Availability:</h5>
                      <p className="mb-0"> In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Color:</h5>
                      <Color className="mb-0" />
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Size:</h5>
                      <div className="mb-0 d-flex gap-10">
                        <p className="mb-0">S</p>
                        <p className="mb-0">M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3  d-flex gap-10 justify-content-between">
              <div className="compare-product-card flex-shrink-1 position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image ">
                  <img src="images/watch.jpg" alt="watch" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    {" "}
                    Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray{" "}
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5 className="mb-0">Brand:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Type:</h5>
                      <p className="mb-0"> Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">SKU:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Availability:</h5>
                      <p className="mb-0"> In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Color:</h5>
                      <Color className="mb-0" />
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Size:</h5>
                      <div className="mb-0 d-flex gap-10">
                        <p className="mb-0">S</p>
                        <p className="mb-0">M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3  d-flex gap-10 justify-content-between">
              <div className="compare-product-card flex-shrink-1 position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image ">
                  <img src="images/watch.jpg" alt="watch" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    {" "}
                    Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray{" "}
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5 className="mb-0">Brand:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Type:</h5>
                      <p className="mb-0"> Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">SKU:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Availability:</h5>
                      <p className="mb-0"> In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Color:</h5>
                      <Color className="mb-0" />
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Size:</h5>
                      <div className="mb-0 d-flex gap-10">
                        <p className="mb-0">S</p>
                        <p className="mb-0">M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3  d-flex gap-10 justify-content-between">
              <div className="compare-product-card flex-shrink-1 position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image ">
                  <img src="images/watch.jpg" alt="watch" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    {" "}
                    Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray{" "}
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-detail">
                      <h5 className="mb-0">Brand:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Type:</h5>
                      <p className="mb-0"> Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">SKU:</h5>
                      <p className="mb-0"> Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Availability:</h5>
                      <p className="mb-0"> In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Color:</h5>
                      <Color className="mb-0" />
                    </div>
                    <div className="product-detail">
                      <h5 className="mb-0">Size:</h5>
                      <div className="mb-0 d-flex gap-10">
                        <p className="mb-0">S</p>
                        <p className="mb-0">M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
