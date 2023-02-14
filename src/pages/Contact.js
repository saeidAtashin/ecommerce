import React, { useEffect, useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import mapboxgl from "mapbox-gl";

const Contact = () => {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // initialize map
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmluaWdvbCIsImEiOiJjbGU0ZXFwZWgwMmF4M29tbjJlYW12cGx2In0.yYBYMJXEc95cuX16UdHGlA";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [51.356634, 35.684183],
      zoom: 12,
    });

    // create marker
    const marker = new mapboxgl.Marker({
      color: "red" ,
      element: document.createElement("img"),
      anchor: "bottom",
      img: "https://www.shareicon.net/data/512x512/2015/08/12/84141_down_512x512.png",
    })
      .setLngLat([51.356634, 35.684183])
      .addTo(map);

    // set marker image
    const img = marker.getElement();
    img.src = "https://www.shareicon.net/data/512x512/2015/08/12/84141_down_512x512.png";
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
                style={{ width: "90%", height: "60vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
