import React, { useEffect, useState } from "react";
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

  const [orderdProduct, setOrderdProduct] = useState(true);
  const [showImage, setShowImage] = useState("");
  const navigate = useNavigate();

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
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        data && (
          <>
            <Meta title={data.name} />

            <BreadCrumb brand={data.brand} title={data.name} />

            <div className="main-product-wrapper py-5 home-wrapper-2">
              <div className="container-sm">
                <div className="row bg-white d-flex align-items-between justify-content-between">
                  <div className="col-3">
                    {data && (
                      <>
                        <div className="d-flex flex-column align-items-start justify-content-center">
                          <div className="d-flex flex-column align-items-center justify-content-center">
                            <h1>{data.name}</h1>

                            <div className="product-image d-flex">
                              <img
                                src={`/${showImage ? showImage : data.def_img}`}
                                alt={data.name}
                                style={{ scale: "0.8", height: "275px" }}
                                className="img-fluid"
                              />
                            </div>

                            <div className="smallpic d-flex gap-10 justify-content-center">
                              <img
                                src={`/${data.def_img}`}
                                alt={data.name}
                                className="img-fluid smallpicborder"
                                onClick={() => setShowImage(data.def_img)}
                              />

                              <img
                                src={`/${data.sec_img}`}
                                alt={data.name}
                                className="img-fluid smallpicborder"
                                onClick={() => setShowImage(data.sec_img)}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex flex-column  justify-content-around ">
                    {data && (
                      <>
                        <div>
                          <h2>{data.product_title}</h2>
                        </div>
                        <div className="d-flex gap-30">
                          <div className="d-flex align-items-center gap-10">
                            <p className="fs-2 ">Price :</p>
                            <p
                              className={`price-in-single ${
                                data.isOffer === true
                                  ? "text-decoration-line-through"
                                  : "fs-2 text-danger"
                              }`}
                            >
                              ${data.org_price}
                            </p>
                            {data.isOffer === "true" && (
                              <p className="text-danger fw-bold fs-2">
                                ${data.new_price}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="">
                            <button
                              onClick={() =>
                                handleAddToCart(
                                  data,
                                  "Add to Cart Button that clicked"
                                )
                              }
                              className="btn btn-info add-to-card"
                            >
                              Add To Card
                            </button>
                            <span className="number-added-to-card badge bg-dark text-whit fs-6">
                              10
                            </span>
                          </div>
                          <div>
                            <Link
                              // to={`/editproduct/${id}`}
                              onClick={() =>
                                handleEdit(data, "Edit Button that clicked")
                              }
                              className={`btn add-to-card  ${
                                userType === "admin"
                                  ? "btn-warning"
                                  : "btn-outline-secondary disabled"
                              }`}
                            >
                              Edit Product
                            </Link>
                          </div>
                          <div>
                            <button
                              className={`btn add-to-card  ${
                                userType === "admin"
                                  ? "btn-danger"
                                  : "btn-outline-secondary disabled"
                              }`}
                              data-container="body"
                              data-toggle="popover"
                              data-placement="top"
                              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                              onClick={() => {
                                DeleteProduct(data.id);
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
            {/* <div className="description-wrapper py-5 home-wrapper-2">
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h4>Description</h4>
                    <div className="bg-white p-3">
                      <p>{data && data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <section className="reviews-wrapper home-wrapper-2">
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h3>Reviews</h3>
                    <div className="review-inner-wrapper">
                      <div className="review-head d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="mb-2">Customer Reviews</h4>
                          <div className="d-flex align-items-center  gap-10">
                            <ReactStars
                              count={5}
                              size={24}
                              value={4}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="mb-0">Based on 2 Reviews</p>
                          </div>
                        </div>

                        {orderdProduct && (
                          <div>
                            <a
                              className="text-dark text-decoration-underline"
                              href=""
                            >
                              Write a review
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="review-form py-4">
                        <h4>Write a Review</h4>
                        <form action="" className="d-flex flex-column gap-15">
                          <div>
                            <ReactStars
                              count={5}
                              size={24}
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
                            ></textarea>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button className="button border-0">
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="reviews mt-4">
                        <div className="review">
                          <div className="d-flex gap-10 align-items-center">
                            <h4 className="mb-0">user name</h4>
                            <ReactStars
                              count={5}
                              size={24}
                              value={4}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consecteturipsum dolor
                            sit amet consectetur adipisicing elit. Voluptatibus,
                            delectus minima! Animi quaerat s g elit.
                            Voluptatibus, delectus minima! Animi quaerat sed
                            illo?
                          </p>
                        </div>
                        <div className="review">
                          <div className="d-flex gap-10 align-items-center">
                            <h4 className="mb-0">user name</h4>
                            <ReactStars
                              count={5}
                              size={24}
                              value={5}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consecteturipsum dolor
                            sit amet consectetur adipisicing elit. Voluptatibus,
                            delectus minima! Animi quaerat s g elit.
                            Voluptatibus, delectus minima! Animi quaerat sed
                            illo?
                          </p>
                        </div>
                        <div className="review">
                          <div className="d-flex gap-10 align-items-center">
                            <h4 className="mb-0">user name</h4>
                            <ReactStars
                              count={5}
                              size={24}
                              value={3}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consecteturipsum dolor
                            sit amet consectetur adipisicing elit. Voluptatibus,
                            delectus minima! Animi quaerat s g elit.
                            Voluptatibus, delectus minima! Animi quaerat sed
                            illo?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* <section className="popular-wrapper py-5 home-wrapper-2">
              <div className="container-sm">
                <div className="row">
                  <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                  </div>
                </div>
                <div className="row">
                  <ProductCard />
                </div>
              </div>
            </section> */}
          </>
        )
      )}
    </>
  );
};

export default SingleProduct;
