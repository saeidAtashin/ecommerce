import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { Link, useNavigate } from "react-router-dom";

const SmallHandiCrafts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const [numberOfShow, setNumberOfShow] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 990 || window.innerWidth > 1560) {
        setNumberOfShow(4);
      } else if (window.innerWidth > 990 && window.innerWidth < 1560) {
        setNumberOfShow(1);
      }
    };

    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredData = data
    ?.filter((item) => item.isBanner)
    .slice(0, numberOfShow);

  if (filteredData?.length === 0) {
    return <p>No banners available.</p>;
  }




  const Openhandicraft = (id) => {
    console.log("object");
    navigate("/product/" + (id));

  };

  return (
    <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
    
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred...</p>
      ) : (
        filteredData.map((bannerData, index) => {
          // Different rotation angles for artistic effect
          const rotations = [-1.5, 1.5, -1, 1];
          const rotation = rotations[index % rotations.length] || 0;

          return (
            <div
              className="small-banner position-relative mt-2"
              key={bannerData.id}
              onClick={(id) => Openhandicraft(bannerData.id)}
              style={{
                cursor: "pointer",
                transform: `rotate(${rotation}deg)`,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.08) translateY(-5px)`;
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(102, 126, 234, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1) translateY(0)`;
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
              }}
            >
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px" }}>
                <img
                  src={bannerData.def_img}
                  className="img-fluid rounded-3 img-flip"
                  alt={bannerData.name}
                  style={{
                    transition: "transform 0.5s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div 
                  className="small-banner-content"
                  style={{
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h5>{bannerData.name}</h5>
                  <h4>{bannerData.brand}</h4>
                  <p>
                    From {bannerData.org_price}
                    <br />
                    to<span className="to-price"> {bannerData.new_price} $ </span>.
                  </p>
                  <Link 
                    className="button buttonsmall chane-gbuttom-place change-buttom-opacity"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SmallHandiCrafts;
