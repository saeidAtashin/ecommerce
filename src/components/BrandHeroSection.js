import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { Link, useNavigate } from "react-router-dom";

const BrandHeroSection = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.length > 0) {
      // Get unique brands from products
      const brands = [
        ...new Map(data.map((item) => [item.brand, item])).values(),
      ];
      setUniqueBrands(brands);
      // Set the first brand as default
      if (brands.length > 0 && !selectedBrand) {
        setSelectedBrand(brands[0].brand);
      }
    }
  }, [data, selectedBrand]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  // Filter products by selected brand
  const brandProducts = data.filter((item) => item.brand === selectedBrand);

  // Get featured product for the brand (first product or one marked as featured)
  const featuredProduct =
    brandProducts.find((item) => item.isBigBanner) || brandProducts[0];

  if (!featuredProduct) {
    return <p>No products found for this brand.</p>;
  }

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const openProduct = (id) => {
    navigate("/product/" + id);
  };

  return (
    <section className="home-wrapper-1 py-5">
      <div className="container-sm">
        <div className="row">
          <div className="col-12 mb-4">
            <h3 className="section-heading mb-3">Shop by Brand</h3>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {uniqueBrands.map((brandItem) => (
                <button
                  key={brandItem.id}
                  className={`btn ${
                    selectedBrand === brandItem.brand
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleBrandChange(brandItem.brand)}
                >
                  {brandItem.brand}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              onClick={() => openProduct(featuredProduct.id)}
              className="cursor-pointer"
            >
              <div
                className="main-banner position-relative mt-3"
                style={{
                  background: "#00000020",
                  borderRadius: "0.5rem",
                  padding: "10px",
                }}
              >
                <img
                  src={featuredProduct.sec_img || featuredProduct.def_img}
                  className="img-fluid rounded-3 image-width"
                  alt={featuredProduct.name}
                />
                <div
                  className="main-banner-content position-absolute"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "20px",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    maxWidth: "80%",
                  }}
                >
                  <h6
                    style={{
                      color: "#fff",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Featured from {selectedBrand}
                  </h6>
                  <h4
                    style={{
                      color: "#fff",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {featuredProduct.brand}
                  </h4>
                  <h5
                    style={{
                      color: "#fff",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {featuredProduct.name}
                  </h5>
                  <p
                    className="dis-none-small"
                    style={{
                      color: "#fff",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {featuredProduct.product_title}
                  </p>
                  <Link
                    className="button buttonsmall change-buttom-place"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "15px",
                      left: "auto",
                      bottom: "auto",
                    }}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
              {brandProducts
                .filter((item) => item.id !== featuredProduct.id)
                .slice(0, 2)
                .map((product) => (
                  <div
                    className="small-banner position-relative mt-2"
                    key={product.id}
                    onClick={() => openProduct(product.id)}
                  >
                    <img
                      src={product.def_img}
                      className="img-fluid rounded-3 img-flip"
                      alt={product.name}
                    />
                    <div
                      className="small-banner-content"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        padding: "15px",
                        borderRadius: "10px",
                        backdropFilter: "blur(5px)",
                        maxWidth: "90%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <h5
                        style={{
                          color: "#fff",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          textAlign: "center",
                        }}
                      >
                        {product.name}
                      </h5>
                      <h4
                        style={{
                          color: "#fff",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          textAlign: "center",
                        }}
                      >
                        {product.brand}
                      </h4>
                      <p
                        style={{
                          color: "#fff",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          textAlign: "center",
                        }}
                      >
                        From {product.org_price}
                        <br />
                        to{" "}
                        <span
                          className="to-price"
                          style={{
                            color: "#ffd700",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          {" "}
                          {product.new_price} ${" "}
                        </span>
                        .
                      </p>
                      <Link
                        className="button buttonsmall chane-gbuttom-place change-buttom-opacity"
                        style={{
                          position: "relative",
                          display: "block",
                          marginTop: "15px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          left: "auto",
                          top: "auto",
                          width: "fit-content",
                        }}
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeroSection;
