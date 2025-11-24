import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const EditProduct = () => {
  const { id } = useParams();

  const [prodData, setProdData] = useState({});

  useEffect(() => {
    fetch("https://apitest-lovat.vercel.app/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setName(resp.name);
        setBrand(resp.brand);
        setproduct_title(resp.product_title);
        setorg_price(resp.org_price);
        setnew_price(resp.new_price);
        setisOffer(resp.isOffer);
        setisActive(resp.isActive);
        setDescription(resp.description);
        setCategory(resp.category || "");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [product_title, setproduct_title] = useState("");
  const [org_price, setorg_price] = useState("");
  const [new_price, setnew_price] = useState("");
  const [isOffer, setisOffer] = useState("");
  const [isActive, setisActive] = useState(true);
  // const [isOffer, setIsOffer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

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
      description,
      category,
    };

    fetch("https://apitest-lovat.vercel.app/products/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prosuctdetials),
    })
      .then((res) => {
        alert("saved");
        navigate("/product");
        window.location.reload();

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        <Meta title={`Edit ${name}`} /> <BreadCrumb title={`Edit ${name}`} />
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div className="wrapperadd wrapper--w680">
            <div className="card card-4">
              <div className="card-body">
                <h2 className="title">
                  Edit <span className="text-danger">{name}</span> Form
                </h2>

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
                    <div className="col-2add">
                      <div className="input-group">
                        <label className="label">Category</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="input--style-4"
                          name="category"
                        >
                          <option value="">Select Category</option>
                          <option value="electronics">Electronics</option>
                          <option value="handicrafts">Handicrafts</option>
                          <option value="clothing">Clothing</option>
                          <option value="home">Home & Living</option>
                          <option value="sports">Sports</option>
                          <option value="books">Books</option>
                          <option value="toys">Toys</option>
                          <option value="other">Other</option>
                        </select>
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
                              checked={isOffer}
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
                            <input
                              type="radio"
                              name="isOffer"
                              checked={!isOffer}
                            />
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

                  <div className="p-t-15">
                    <button
                      className="btn btn--radius-2 btn--blue"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
