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

  // Get additional products (excluding featured product) - limit to 4 for 2x2 grid
  const additionalProducts = brandProducts
    .filter((item) => item.id !== featuredProduct.id)
    .slice(0, 4);

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
            {additionalProducts.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows:
                    additionalProducts.length === 1
                      ? "1fr"
                      : additionalProducts.length === 3
                      ? "auto auto"
                      : "repeat(2, 1fr)",
                  gap: "15px",
                  height: "100%",
                  minHeight: "500px",
                }}
              >
                {additionalProducts.map((product, index) => {
                  // Determine if item should span full width
                  const isFullWidth =
                    additionalProducts.length === 1 ||
                    (additionalProducts.length === 3 && index === 0);

                  // Artistic rotation angles for each position
                  const rotations = [-2, 2, 1.5, -1.5];
                  const rotation = rotations[index] || 0;

                  // Different gradient overlays for artistic effect
                  const gradients = [
                    "linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%)",
                    "linear-gradient(135deg, rgba(30, 144, 255, 0.1) 0%, rgba(0, 191, 255, 0.1) 100%)",
                    "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)",
                    "linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(75, 0, 130, 0.1) 100%)",
                  ];
                  const gradient = gradients[index] || gradients[0];

                  return (
                    <div
                      key={product.id}
                      className="position-relative"
                      onClick={() => openProduct(product.id)}
                      style={{
                        cursor: "pointer",
                        transform: `rotate(${rotation}deg)`,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        overflow: "hidden",
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        background: gradient,
                        padding: "8px",
                        gridColumn: isFullWidth ? "span 2" : "span 1",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = `rotate(0deg) scale(1.05)`;
                        e.currentTarget.style.zIndex = "10";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0, 0, 0, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
                        e.currentTarget.style.zIndex = "1";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px rgba(0, 0, 0, 0.3)";
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          minHeight: isFullWidth ? "300px" : "240px",
                          borderRadius: "15px",
                          overflow: "hidden",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      >
                        <img
                          src={product.def_img}
                          className="img-fluid"
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                        {/* Artistic overlay gradient */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: gradient,
                            opacity: 0.3,
                            pointerEvents: "none",
                          }}
                        />

                        {/* Content overlay */}
                        <div
                          className="position-absolute"
                          style={{
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
                            padding: "20px 15px 15px",
                            borderRadius: "0 0 15px 15px",
                            transform: "translateY(0)",
                            transition: "transform 0.4s ease",
                          }}
                        >
                          <h5
                            style={{
                              color: "#fff",
                              textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                              textAlign: "center",
                              fontSize: isFullWidth ? "22px" : "16px",
                              fontWeight: "700",
                              marginBottom: "5px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {product.name}
                          </h5>
                          <h4
                            style={{
                              color: "#ffd700",
                              textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                              textAlign: "center",
                              fontSize: isFullWidth ? "16px" : "12px",
                              fontWeight: "600",
                              marginBottom: "8px",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            {product.brand}
                          </h4>
                          <p
                            style={{
                              color: "#fff",
                              textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                              textAlign: "center",
                              fontSize: isFullWidth ? "16px" : "13px",
                              marginBottom: "10px",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                textDecoration: "line-through",
                                opacity: 0.7,
                              }}
                            >
                              ${product.org_price}
                            </span>{" "}
                            <span
                              style={{
                                color: "#ffd700",
                                fontWeight: "700",
                                fontSize: isFullWidth ? "20px" : "16px",
                                marginLeft: "8px",
                              }}
                            >
                              ${product.new_price}
                            </span>
                          </p>
                          <Link
                            className="button buttonsmall"
                            style={{
                              position: "relative",
                              display: "block",
                              margin: "0 auto",
                              width: "fit-content",
                              fontSize: isFullWidth ? "13px" : "11px",
                              padding: isFullWidth ? "10px 25px" : "8px 20px",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              border: "none",
                              borderRadius: "25px",
                              color: "#fff",
                              fontWeight: "600",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.1)";
                              e.currentTarget.style.boxShadow =
                                "0 6px 20px rgba(102, 126, 234, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.boxShadow =
                                "0 4px 15px rgba(102, 126, 234, 0.4)";
                            }}
                          >
                            More Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "500px" }}
              >
                <p style={{ color: "#666", fontSize: "18px" }}>
                  No additional products for this brand
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeroSection;
