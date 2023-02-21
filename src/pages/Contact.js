import React, { useEffect, useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import mapboxgl from "mapbox-gl";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const Contact = () => {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // initialize map
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmluaWdvbCIsImEiOiJjbGU0ZXFwZWgwMmF4M29tbjJlYW12cGx2In0.yYBYMJXEc95cuX16UdHGlA";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [51.356634, 35.684183],
      textField: "name:en",
      zoom: 12,
    });

    // create marker
    const marker = new mapboxgl.Marker({
      element: document.createElement("img"),
      anchor: "bottom",
      img: "images/location.webp",
    })
      .setLngLat([51.356634, 35.684183])
      .addTo(map);

    // set marker image
    const img = marker.getElement();
    img.src =
      "images/location.webp";
    // get marker element

    const element = marker.getElement();

    // set marker size
    element.style.width = "60px";
    element.style.height = "60px";
    // save marker to ref for later use
    markerRef.current = marker;

    // clean up on unmount
    return () => {
      marker.remove();
      map.remove();
    };
  }, []);

  return (
    <>
      <Meta title={"Contact Us"} /> <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div
                ref={mapContainer}
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno : Somewhere in the World
                        </address>
                      </li>
                      <li  className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+98 9368165125" > +98 9368165125 </a>
                      </li>
                      <li  className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:saeid.kase.atashin@gmail.com">
                        saeid.kase.atashin@gmail.com
                        </a>
                      </li>
                      <li  className="mb-3 d-flex gap-15 align-items-center">
                        <BsInfoCircle className="fs-5" />
                        <p className="mb-0"> Mondey - friday  10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
