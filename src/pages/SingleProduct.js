import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const [orderdProduct, setOrderdProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} /> <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ipsum aperiam consequatur, harum unde ratione nulla explicabo
                  et quam corruptai eius quas. Praesentium rerum cupiditate
                  tempora, perferendis aperiam molestiae, culpa fuga,
                  exercitationem quasi reiciendis recusandae. Voluptatum quam
                  maxime eos suscipit quibusdam ad blanditiis dolores, dolor
                  nemo a quisquam recusandae quo consectetur, ullam nostrum
                  cupiditate sint ipsam esse qui iste. Culpa voluptatem facere
                  illo veniam veritatis eligendi odio impedit animi quidem, enim
                  voluptates non harum cum dignissimos obcaecati ratione. Eum
                  voluptatibus inventore deserunt doloribus voluptatum explicabo
                  ullam nobis dolorem, facere eos doloremque quam distinctio
                  accusantium maiores corrupti enim saepe fugiat illo.
                </p>
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
                    <divc className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </divc>
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
