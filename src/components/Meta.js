import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const Meta = (props) => {
  const { title } = props;
  const { t } = useTranslation();

  return (
    
           <Helmet>
                <meta charSet="utf-8" />
                <title>{t("title", {title})}</title>
            </Helmet>
    
  )
}

export default Meta
