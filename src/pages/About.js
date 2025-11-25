import React from 'react'
import { useTranslation } from 'react-i18next'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Meta title={t("about_us")} />
      <BreadCrumb title={t("about_us")} />
      <div className="about-wrapper home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row">
            <div className="col-12">
              <h2>{t("about_us")}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
