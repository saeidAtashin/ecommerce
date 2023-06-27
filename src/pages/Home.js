import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Modal from "../components/Modal";
import SmallHandiCrafts from "../components/SmallHandiCrafts";
import BigBanner from "../components/BigBanner";
import Brands from "../components/Brands";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thanksShow, setThanksShow] = useState(false);
  const [noMessage, setNoMessage] = useState(false);


  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "AccessKey g1Kk8mw70X2LoPjApu8v-kk4ez0fk5AqrjnE6jZC8DM="
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    pattern_code: "pzasny0splmcw4i",
    originator: "+985000125475",
    recipient: phoneNumber,
    values: {
      test: "",
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    localStorage.setItem("myData", true);

    if (e.target.value === !null) {
      setNoMessage(true);
    } else {
      setNoMessage(false);
    }
  };

  const handleButtonClick = () => {
    if (phoneNumber) {
      fetch("http://rest.ippanel.com/v1/messages/patterns/send", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      setThanksShow(true);
      setTimeout(() => {
        setPhoneNumber("");
        setThanksShow(false);
        handleCloseModal();
        setNoMessage(false);
      }, 2000);
    } else {
      setNoMessage(true);
      setThanksShow(true);

      setTimeout(() => {
        console.log(phoneNumber);

        setPhoneNumber("");
        setThanksShow(false);
        handleCloseModal();
        setNoMessage(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const myData = localStorage.getItem("myData");
    if (myData === "true") {
    } else {
      handleOpenModal();
    }
  }, []);

 
  return (
    <>
      <Meta title={"AtashinShop."} />
      <section className="home-wrapper-1 py-5">
        <div className="home-wrapper container-sm">
          <button onClick={handleOpenModal}>Recieve Message</button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="modal-container">
              {thanksShow === false ? (
                <>
                  <label className="modal-label" htmlFor="phoneNumber">
                    Welcome Message
                    <br />
                    <span className="modal-span">
                      Because of filtering,
                      <br />
                      it only works locally
                    </span>
                  </label>
                  <input
                    className="modal-input"
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                  <button onClick={handleButtonClick} className="buttonsmall ">
                    Submit
                  </button>
                </>
              ) : (
                <div
                  className={` ${
                    noMessage === false ? "thanks-message" : "no-message"
                  }`}
                ></div>
              )}
            </div>
          </Modal>
        </div>

        <div className="container-sm">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <BigBanner />
            </div>
            <div className="col-lg-6 col-sm-12">
              <SmallHandiCrafts />
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between ">
                  <img
                    src="/images/service.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 displaynone">from all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-03.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>Support 24/7 </h6>
                    <p className="mb-0 displaynone">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-04.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>Daily Offers</h6>
                    <p className="mb-0 displaynone">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-05.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0 displaynone">100% Protected Payments</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-02.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>Afrodable Prices</h6>
                    <p className="mb-0 displaynone">
                      Get Factoru Default Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-1 py-5 categorie22">
        <div className="container-sm">
          <div className="row">
            <div className="col-sm-12">
              <Brands />
            </div>
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row d-flex featured-collection-wrap-center">
            <div className="col-12">
              <h3 className="section-heading mb-2 text-center">Featured Collection</h3>
            </div>
            <div className="col-lg-3 col-sm-12 mb-5 famous-card-t">
              <div className="position-relative first-famous-card">
                <img
                  src="images/famous01.webp"
                  alt="famouses"
                  className="my-0 img-fluid"
                  // style={{scale:"0.7"}}
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $3900 or $16.92/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card  other-famous-card position-relative">
                <img
                  src="images/sam.png"
                  alt="samsunges"
                  className=" img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphone Samsung</h5>
                  <h6 className="text-dark">Now in Green </h6>
                  <p className="text-dark">
                    from $999.00 or $41.62/mo. for 24 Footnote*
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card other-famous-card position-relative">
                <img src="images/jbl.webp" alt="jbl" className=" img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">
                    from $999.00 or $41.62/mo. for 24{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card other-famous-card position-relative">
                <img
                  src="images/laptop01.png"
                  alt="laptop01"
                  className=" img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5k Rating display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
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

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
