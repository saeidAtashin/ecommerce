import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={t("blogs")} /> <BreadCrumb title={t("blogs")} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Find By Categories </h3>
                <div>
                  <ul className="ps-0">
                    <li> Watch </li> <li> Tv </li> <li> Camera </li>
                    <li> Laptop </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
              <div className="col-6 mb-4">
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
