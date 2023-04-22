import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const isInnerPage = "trie";

  const { brand, title } = props;

  const { t } = useTranslation();

  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-sm">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                {t("home")} &nbsp;
              </Link>
              {brand ? `/ ${t("brand", { brand })} ` : ""}/ &nbsp;{" "}
              {t("title", { title })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
