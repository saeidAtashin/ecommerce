import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { increment, makeRequest, numIncrement } from "../toolkit/reducer";
import { useDispatch, useSelector } from "react-redux";
// import EditProduct from "../admin/EditProduct";

const SingleProduct = () => {
  const [orderdProduct, setOrderdProduct] = useState(true);
  const { id } = useParams();
  const [prodData, setProdData] = useState({});
  const [showImage, setShowImage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const buyCount = useSelector((state) => state.counter.value)

  const DeleteProduct = (id) => {
    if (window.confirm("delete_product")) {
      fetch("http://localhost:8000/products/" + id, {
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


  useEffect(() => {
    fetch("http://localhost:8000/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProdData(resp);
        setShowImage(resp.def_img);
        console.log(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const EditProduct = (id) => {
    navigate("/editproduct/" + id);
  };

  return (
    <>
      <Meta title={prodData.name} />

      <BreadCrumb brand={prodData.brand} title={prodData.name} />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row bg-white d-flex align-items-between justify-content-between">
            <div className="col-3">
              {prodData && (
                <>
                  <div className="d-flex flex-column align-items-start justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <h1>{prodData.name}</h1>

                      <div className="product-image d-flex">
                        <img
                          src={`/${showImage}`}
                          alt={prodData.name}
                          style={{ scale: "0.8", height: "275px" }}
                          className="img-fluid"
                        />
                      </div>

                      <div className="smallpic d-flex gap-10 justify-content-center">
                        <img
                          src={`/${prodData.def_img}`}
                          alt={prodData.name}
                          className="img-fluid smallpicborder"
                          onClick={() => setShowImage(prodData.def_img)}
                        />

                        <img
                          src={`/${prodData.sec_img}`}
                          alt={prodData.name}
                          className="img-fluid smallpicborder"
                          onClick={() => setShowImage(prodData.sec_img)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="col-6 d-flex flex-column  justify-content-around ">
              {prodData && (
                <>
                  <div>
                    <h2>{prodData.product_title}</h2>
                  </div>
                  <div className="d-flex gap-30">
                    <div className="d-flex align-items-center gap-10">
                      <p className="fs-2 ">Price :</p>
                      <p
                        className={`price-in-single ${
                          prodData.isOffer == "true"
                            ? "text-decoration-line-through"
                            : "fs-2 text-danger"
                        }`}
                      >
                        ${prodData.org_price}
                      </p>
                      {prodData.isOffer === "true" && (
                        <p className="text-danger fw-bold fs-2">
                          ${prodData.new_price}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                      <button className="btn btn-info add-to-card" onClick={() => dispatch(makeRequest())}>
                        Add To Card
                      </button>
                      <span className="number-added-to-card badge bg-dark text-whit fs-6">
                      {buyCount}
                      </span>
                    </div>
                    <div>
                      <Link
                        to={`/editproduct/${id}`}
                        className="btn btn-warning add-to-card text-dark"
                        onClick={() => dispatch(increment())}
                      >
                        Edit Product
                      </Link>
                    </div>
                    <div>
                      <button className="btn btn-danger add-to-card" 
                       onClick={() => {
                        DeleteProduct(prodData.id);
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
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>{prodData && prodData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
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
                      <button className="button border-0">Submit Review</button>
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
                      Lorem ipsum dolor sit amet consecteturipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus, delectus
                      minima! Animi quaerat s g elit. Voluptatibus, delectus
                      minima! Animi quaerat sed illo?
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
                      Lorem ipsum dolor sit amet consecteturipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus, delectus
                      minima! Animi quaerat s g elit. Voluptatibus, delectus
                      minima! Animi quaerat sed illo?
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
                      Lorem ipsum dolor sit amet consecteturipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus, delectus
                      minima! Animi quaerat s g elit. Voluptatibus, delectus
                      minima! Animi quaerat sed illo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;