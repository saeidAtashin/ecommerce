import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer
        className="py-5"
        style={{
          background: "#667eea",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-50px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="footer-top-data d-flex gap-3 align-items-center flex-wrap">
                <img
                  src="/images/newsletter.png"
                  alt="newsletter"
                  style={{
                    width: "60px",
                    height: "60px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <h2
                  className="mb-0 text-white"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {t("sign_up_newsletter")}
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder={t("your_email")}
                  aria-label={t("your_email")}
                  aria-describedby="basic-addon2"
                  style={{
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "25px 0 0 25px",
                    paddingLeft: "25px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  }}
                />
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                  style={{
                    background: "#fff",
                    border: "2px solid #fff",
                    borderRadius: "0 25px 25px 0",
                    color: "#667eea",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {t("subscribe")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="py-5"
        style={{
          background: "#764ba2",
          position: "relative",
        }}
      >
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "25px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                {t("contact_us_title")}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                  }}
                />
              </h4>
              <div>
                <address
                  className="text-white mb-3"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    fontStyle: "normal",
                    marginBottom: "20px",
                  }}
                >
                  {t("address")}
                </address>
                <a
                  href="tel:+98 9368165125"
                  className="d-block mb-3 text-white text-decoration-none"
                  style={{
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  +98 9368165125
                </a>
                <a
                  href="mailto: saeid.kase.atashin@gmail.com"
                  className="d-block mb-4 text-white text-decoration-none"
                  style={{
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  saeid.kase.atashin@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-3">
                  {[
                    { icon: BsLinkedin, href: "https://api.whatsapp.com/send?phone=9368165125", color: "#0077b5" },
                    { icon: BsGithub, href: "https://api.whatsapp.com/send?phone=9368165125", color: "#333" },
                    { icon: BsInstagram, href: "https://api.whatsapp.com/send?phone=9368165125", color: "#E4405F" },
                    { icon: BsWhatsapp, href: "https://api.whatsapp.com/send?phone=9368165125", color: "#25D366" },
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "20px",
                          transition: "all 0.3s ease",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.color = social.color;
                          e.currentTarget.style.transform = "scale(1.15) translateY(-5px)";
                          e.currentTarget.style.borderColor = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.transform = "scale(1) translateY(0)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                        }}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "25px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                {t("information")}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                  }}
                />
              </h4>
              <div className="footer-links d-flex flex-column gap-2">
                {[
                  { to: "/privacy-policy", label: t("privacy_policy") },
                  { to: "/refund-policy", label: t("refund_policy") },
                  { to: "/shipping-policy", label: t("shipping_policy") },
                  { to: "/term-conditions", label: t("term_conditions") },
                  { to: "/blogs", label: t("blogs") },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white text-decoration-none"
                    style={{
                      fontSize: "15px",
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      paddingLeft: "20px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(10px)";
                      e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.5)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "25px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                {t("account")}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                  }}
                />
              </h4>
              <div className="footer-links d-flex flex-column gap-2">
                {[
                  { to: "/about", label: t("about_us") },
                  { to: "/faq", label: t("faq") },
                  { to: "/contact", label: t("contact") },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white text-decoration-none"
                    style={{
                      fontSize: "15px",
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      paddingLeft: "20px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(10px)";
                      e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.5)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "25px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                {t("quick_links")}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                  }}
                />
              </h4>
              <div className="footer-links d-flex flex-column gap-2">
                {[
                  { to: "/laptops", label: t("laptops") },
                  { to: "/headphones", label: t("headphones") },
                  { to: "/tablets", label: t("tablets") },
                  { to: "/watches", label: t("watches") },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white text-decoration-none"
                    style={{
                      fontSize: "15px",
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      paddingLeft: "20px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(10px)";
                      e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.5)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="py-4"
        style={{
          background: "#5a3d7a",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-0 text-white"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
              >
                &copy; {new Date().getFullYear()}; {t("powered_by")}{" "}
                <span
                  style={{
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Saeid Atashin
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
