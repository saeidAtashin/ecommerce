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
                <div className="main-banner-content position-absolute">
                  <h6>Featured from {selectedBrand}</h6>
                  <h4>{featuredProduct.brand}</h4>
                  <h5>{featuredProduct.name}</h5>
                  <p className="dis-none-small">
                    {featuredProduct.product_title}
                  </p>
                  <Link className="button buttonsmall change-buttom-place">
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
                    <div className="small-banner-content">
                      <h5>{product.name}</h5>
                      <h4>{product.brand}</h4>
                      <p>
                        From {product.org_price}
                        <br />
                        to{" "}
                        <span className="to-price">
                          {" "}
                          {product.new_price} ${" "}
                        </span>
                        .
                      </p>
                      <Link className="button buttonsmall chane-gbuttom-place change-buttom-opacity">
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
