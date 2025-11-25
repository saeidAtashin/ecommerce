import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BlogCard = () => {
  const { t } = useTranslation();

  return (
   
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="blog" className='img-fluid w-100' />
            </div>
            <div className="blog-content">
                <p className='date'>
                  {t("blog_date")}
                </p>
                <h5 className='title'>
                  {t("blog_title")}
                </h5>
                <p className="desc">
                  {t("blog_desc")}
                </p>
                <Link to="/blog/:id" className="button" >{t("read_more")}</Link>
            </div>
        </div>
      
  
  )
}

export default BlogCard
