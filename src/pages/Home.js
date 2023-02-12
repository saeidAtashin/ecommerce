import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="../images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo. </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="../images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>best sales</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="../images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $99.00 <br /> or $41.62/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="../images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>best sales</h4>
                    <h5>ipad s13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="../images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad s13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">from all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Afrodable Prices</h6>
                    <p className="mb-0">Get Factoru Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Cameras" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Watches" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Music & Gaming" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Cameras" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Watches" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="ms-2">
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Music & Gaming" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="maque-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="maque-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
             
            <div className="mx-4 w-25">
              <img src="images/brand-01.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-02.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-03.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-04.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-05.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-06.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-07.png" alt="brands" />
             </div>
             <div className="mx-4 w-25">
              <img src="images/brand-08.png" alt="brands" />
             </div>
             
            </Marquee>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
