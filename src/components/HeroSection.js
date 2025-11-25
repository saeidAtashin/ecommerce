import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import BigBanner from "./BigBanner";
import SmallHandiCrafts from "./SmallHandiCrafts";

const HeroSection = () => {
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

  useEffect(() => {
    const myData = localStorage.getItem("myData");
    if (myData === "true") {
    } else {
      handleOpenModal();
    }
  }, []);

  return (
    <section
      className="home-wrapper-1 py-5"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #f5f7fa 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      {/* Animated background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 182, 193, 0.15) 0%, transparent 70%)",
          animation: "float 20s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(173, 216, 230, 0.15) 0%, transparent 70%)",
          animation: "float 25s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>

      <div
        className="container-sm"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="row">
          <div
            className="col-lg-6 col-sm-12"
            style={{
              padding: "15px",
            }}
          >
            <div
              style={{
                position: "relative",
                transform: "perspective(1000px) rotateY(-2deg)",
                transition: "transform 0.4s ease",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(0deg) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(-2deg) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <BigBanner />
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12"
            style={{
              padding: "15px",
            }}
          >
            <div
              style={{
                position: "relative",
                transform: "perspective(1000px) rotateY(2deg)",
                transition: "transform 0.4s ease",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow:
                  "0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                minHeight: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(0deg) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(2deg) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <SmallHandiCrafts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
