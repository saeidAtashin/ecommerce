import React from "react";

function Pagination({
  totalProduct,
  productPerPage,
  setCurrentPage,
  currentPage,
}) {
  let prods = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    prods.push(i);
  }

  return (
    <div className="d-flex gap-10">
      {prods.map((page, index) => {
        return (
          <div key={index}>
            <button
              className={` btn btn-info px-3 mt-3 ${
                page === currentPage ? 'active' : 'att'} `}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
