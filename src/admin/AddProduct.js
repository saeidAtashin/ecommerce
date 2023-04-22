import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [product_title, setproduct_title] = useState("");
  const [org_price, setorg_price] = useState("");
  const [new_price, setnew_price] = useState("");
  const [isOffer, setisOffer] = useState("");
  const [isActive, setisActive] = useState(true);
  // const [isOffer, setIsOffer] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log({id,name,brand , product_title, org_price, new_price,isOffer,isActive,isOffer,description})
    const prosuctdetials = {
      id,
      name,
      brand,
      product_title,
      org_price,
      new_price,
      isOffer,
      isActive,
      isOffer,
      description,
    };

    fetch("https://apitest-lovat.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prosuctdetials),
    })
      .then((res) => {
        alert("saved");
        navigate("/product");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Meta title={"Add Product"} /> <BreadCrumb title="Add Product" />
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapperadd wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">Add Product Form</h2>

              <form method="POST" onSubmit={handlesubmit}>
                <div className="rowadd row-space">
                  <div className="col-2add">
                    <div className="input-group">
                      <label className="label">Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input--style-4"
                        type="text"
                        name="Name"
                      />
                    </div>
                  </div>
                  <div className="col-2add">
                    <div className="input-group">
                      <label className="label">Brand</label>
                      <input
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="input--style-4"
                        type="text"
                        name="brand"
                      />
                    </div>
                  </div>
                </div>
                <div className="rowadd row-space">
                  <div className="col-2add">
                    <div className="input-group">
                      <label className="label">Product Title</label>

                      <textarea
                        value={product_title}
                        onChange={(e) => setproduct_title(e.target.value)}
                        className="input--style-4 w-100"
                        name="product_title"
                      />
                    </div>
                  </div>

                  <div className="col-2add">
                    <div className="input-group">
                      <label className="label">Description</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input--style-4 w-100"
                        name="description"
                      />
                    </div>
                  </div>

                  <div className="col-2add">
                    <div className="input-group d-flex flex-column">
                      <label className="label">Is In Offer?</label>
                      <div className="p-t-10">
                        <label
                          className="radio-container m-r-45"
                          onClick={() => {
                            setisOffer(true);
                          }}
                        >
                          Yes
                          <input
                            type="radio"
                            name="isOffer"
                            value={isOffer}
                            onChange={(e) => setisOffer(e.target.value)}
                          />
                          <span className="checkmark"></span>
                        </label>

                        <label
                          className="radio-container"
                          onClick={() => {
                            setisOffer(false);
                          }}
                        >
                          No
                          <input type="radio" name="isOffer" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-2add">
                    <div
                      className="input-group d-flex flex-column align-items-start"
                      onClick={() => {
                        setisActive(!isActive);
                      }}
                    >
                      <label className="label">Active Now?</label>
                      <div className="p-t-10">
                        <input
                          type="checkbox"
                          value={isActive}
                          onChange={(e) => setisActive(e.target.checked)}
                          checked={isActive}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rowadd row-space">
                  <div className="d-flex gap-30 w-100">
                    <div className="col-2add">
                      <div className="input-group">
                        <label className="label">Orginal Price</label>
                        <input
                          value={org_price}
                          onChange={(e) => setorg_price(e.target.value)}
                          className="input--style-4"
                          type="price"
                          name="org_price"
                        />
                      </div>
                    </div>
                    {isOffer && (
                      <div className="col-2add">
                        <div className="input-group">
                          <label className="label">New Price</label>
                          <input
                            value={new_price}
                            onChange={(e) => setnew_price(e.target.value)}
                            className="input--style-4"
                            type="price"
                            name="org_price"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-group">
                  <div className="rs-select2 js-select-simple select--no-search">
                    <input type="file" />
                  </div>
                </div>
                <div className="p-t-15">
                  <button className="btn btn--radius-2 btn--blue" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
