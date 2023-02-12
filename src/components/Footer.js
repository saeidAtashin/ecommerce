import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4"> Contact Us </h4>
              <div>
                <address className="text-white fs-5">
                  Hno : Somewhere in the <br /> World
                </address>
                <a
                  href="tel:+98 9368165125"
                  className="mt-3 d-block mb-3 text-white "
                >
                  +98 9368165125
                </a>
                <a
                  href="mailto: saeid.kase.atashin@gmail.com"
                  className="mt-3 d-block mb-3 text-white"
                >
                  saeid.kase.atashin@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a className="text-white" href="https://api.whatsapp.com/send?phone=9368165125">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a className="text-white" href="https://api.whatsapp.com/send?phone=9368165125">
                    <BsGithub  className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href="https://api.whatsapp.com/send?phone=9368165125">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a className="text-white" href="https://api.whatsapp.com/send?phone=9368165125">
                    <BsWhatsapp className="text-white fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Term & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watchs</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Saeid Atashin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
