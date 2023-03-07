import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from 'react-icons/hi'
const SingleBlogs = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/blogs" className="d-flex align-items-center gap-10"> <HiOutlineArrowLeft className="fs-4" /> Go to Blogs</Link>
                    <h3>A beautiful sunday morningrenaissance</h3>
                    <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus ratione optio. Voluptatum eaque unde distinctio. Rerum neque voluptate saepe assumenda quasi distinctio voluptatum eveniet ipsa, aperiam, at nostrum eius cupiditate modi facere magni culpa? Officiis veniam iusto hic perspiciatis fugit quidem? Maxime voluptate architecto autem, quisquam delectus alias sit ducimus minima magnam soluta expedita illo, modi a, quos voluptatem iste. Perferendis non ad laboriosam tempora aperiam dolorum nemo mollitia officiis dolore veniam eos cupiditate nulla, necessitatibus doloremque asperiores culpa odit amet. Inventore enim dolor laborum aliquid consequuntur dolorum. Dignissimos ipsam, dolores rerum earum laborum voluptatibus dolorum possimus illo id.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogs;
