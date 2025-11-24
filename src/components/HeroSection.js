import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import BigBanner from "./BigBanner";
import SmallHandiCrafts from "./SmallHandiCrafts";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thanksShow, setThanksShow] = useState(false);
  const [noMessage, setNoMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: products } = useGetAllProductsQuery();

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
    localStorage.setItem("myData", true);
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

  // Get unique categories from products
  const categories = products
    ? [...new Set(products.map((product) => product.category).filter(Boolean))]
    : [];

  return (
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
        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <label htmlFor="categoryFilter" className="mb-0 fw-bold">
                Filter by Category:
              </label>
              <select
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
                style={{ maxWidth: "300px" }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <BigBanner category={selectedCategory} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <SmallHandiCrafts category={selectedCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
