import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../toolkit/features/cartSlice";
const lang = [
  {
    code: "fa",
    name: "فارسی",
    country_code: "ir",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Header = ({ username }) => {
  const dispatch = useDispatch();

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = lang.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // const buyCount = useSelector((state) => state.counter.value);
  // const filter = useSelector((state) => state.productFilter.filter);

  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartTotalQuantity, dispatch]);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <>
      <header className="header-top-strip py-3 ">
        <div className="container-sm">
          <div className="row align-items-center justify-content-center">
            <div className="col-3 ">
              <p className="text-white mb-0">{t("free_sipping")}</p>
            </div>
            <div className="dropdown col-2 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-link btn-outline-secondary dropdown-toggle p-0 px-1 fancy-border"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="24"
                  fill="white"
                  className="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </button>
              <ul className="dropdown-menu">
                {lang.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                      disabled={code === currentLanguageCode}
                    >
                      <span
                        className={`fi fi-${country_code} mx-2`}
                        style={{
                          opacity: code === currentLanguageCode ? 0.4 : 1,
                        }}
                      ></span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="admin/addproduct"
              className="text-white mb-0 col-3 d-flex align-items-center justify-content-center btn btn-outline-secondary"
            >
              <p className="mb-0">ADMIN</p>
            </Link>
            <div className="col-3">
              <p className="text-end text-white mb-0">
                {t("phone_number")} :
                <a className="text-white" href="tel: +98 9368165125">
                  09368165125
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 ">
        <div className="container-sm ">
          <div className=" navbar navbar-expand-xl d-flex row align-items-center justify-content-center border-00">
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarFirst"
              className="navbar-toggler text-white border-0 "
              aria-controls="navbarFirst"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              Menu
            </button>
            <div className="col-2 collapse navbar-collapse" id="navbarFirst">
              <h4>
                <Link className="text-white" to="/">
                  Atashin Shop.
                </Link>
              </h4>
            </div>
            <div
              className="col-5 collapse navbar-collapse mb-0000 "
              id="navbarFirst"
            >
              <div className="input-group mb-0000 widthquery">
                <input
                  type="text"

                  
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div
              className="col-5 collapse navbar-collapse align-items-center "
              id="navbarFirst"
            >
              <div className="header-upper-links d-flex  align-items-center justify-content-between flex-xl-row flex-sm-column align-items-sm-start gap-sm-2 mt-sm-2">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Wishlists"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      {username ? (
                        <Link
                          className="text-white"
                          onClick={() => {
                            sessionStorage.clear();
                            username = username;
                            window.location.reload();
                          }}
                        >
                          Log Out <br /> {username}
                        </Link>
                      ) : (
                        <Link className="text-white" to="/login">
                          Log In <br /> My Account
                        </Link>
                      )}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark text-whit fs-6">
                        {/* {buyCount} */}
                      </span>
                      <p className="mb-0">{cartTotalQuantity}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-botton py-3">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop Categories
                    </button>
                    <ul
                      className="dropdown-menu p-0"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <Link to="/">Home</Link>
                    <Link to="/product">Our Store</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
