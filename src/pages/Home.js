import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import BrandHeroSection from "../components/BrandHeroSection";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={"AtashinShop."} />
      <HeroSection />
      <section className="home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between ">
                  <img
                    src="/images/service.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>{t("free_shipping")}</h6>
                    <p className="mb-0 displaynone">{t("from_orders_over")}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-03.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>{t("support_24_7")}</h6>
                    <p className="mb-0 displaynone">{t("shop_with_expert")}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-04.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>{t("daily_offers")}</h6>
                    <p className="mb-0 displaynone">{t("save_up_to")}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-05.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>{t("secure_payments")}</h6>
                    <p className="mb-0 displaynone">{t("protected_payments")}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-sm-column2 justify-content-between">
                  <img
                    src="/images/service-02.png"
                    className="m-3 services-width"
                    alt="services"
                  />
                  <div>
                    <h6>{t("affordable_prices")}</h6>
                    <p className="mb-0 displaynone">
                      {t("factory_price")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-1 py-5 categorie22">
        <div className="container-sm">
          <div className="row">
            <div className="col-sm-12">
              <Brands />
            </div>
          </div>
        </div>
      </section>

      <BrandHeroSection />

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row d-flex featured-collection-wrap-center">
            <div className="col-12">
              <h3 className="section-heading mb-2 text-center">
                {t("featured_collection")}
              </h3>
            </div>
            <div className="col-lg-3 col-sm-12 mb-5 famous-card-t">
              <div className="position-relative first-famous-card">
                <img
                  src="images/famous01.webp"
                  alt="famouses"
                  className="my-0 img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>{t("big_screen")}</h5>
                  <h6>{t("smart_watch_series")}</h6>
                  <p>{t("from_price")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card  other-famous-card position-relative">
                <img
                  src="images/sam.png"
                  alt="samsunges"
                  className=" img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">{t("smartphone_samsung")}</h5>
                  <h6 className="text-dark">{t("now_in_green")}</h6>
                  <p className="text-dark">
                    {t("samsung_price")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card other-famous-card position-relative">
                <img src="images/jbl.webp" alt="jbl" className=" img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">{t("home_speakers")}</h5>
                  <h6 className="text-dark">{t("room_filling_sound")}</h6>
                  <p className="text-dark">
                    {t("speaker_price")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 mb-5 ">
              <div className="famous-card other-famous-card position-relative">
                <img
                  src="images/laptop01.png"
                  alt="laptop01"
                  className=" img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">{t("studio_display")}</h5>
                  <h6 className="text-dark">{t("nits_brightness")}</h6>
                  <p className="text-dark">{t("display_rating")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">{t("special_products")}</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="maque-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="maque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">{t("our_latest_blogs")}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-6 mb-2 d-flex">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
