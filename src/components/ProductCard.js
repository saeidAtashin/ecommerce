import React, { useState, useCallback, useMemo } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../toolkit/features/productApi";
import { addToCart } from "../toolkit/features/cartSlice";
import "./ProductCard.css";

// Loading Skeleton Component
const ProductCardSkeleton = ({ grid }) => {
  const gridClass =
    grid === 12 ? "gr-12" : grid === 6 ? "gr-6" : grid === 4 ? "gr-4" : "gr-3";

  const cardHeightClass =
    grid === 12
      ? "height-force-small d-flex align-items-center justify-content-around"
      : grid === 3
      ? "height-force-big d-block"
      : "d-block";

  return (
    <div
      className={gridClass}
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div
        className={`product-card product-card-skeleton ${cardHeightClass}`}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line skeleton-brand"></div>
          <div className="skeleton-line skeleton-text"></div>
          <div className="skeleton-line skeleton-price"></div>
        </div>
      </div>
    </div>
  );
};

// Single Product Card Component
const SingleProductCard = ({
  item,
  index,
  grid,
  userType,
  onDetailClick,
  onAddToCart,
  onEditClick,
  onDeleteClick,
  location,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const truncateString = useCallback(
    (str, maxLength) => {
      if (!str) return "";
      // Adjust maxLength based on grid size
      let adjustedLength = maxLength;
      if (grid === 12) {
        adjustedLength = Math.floor(maxLength * 0.7); // Shorter for list view
      } else if (grid === 6) {
        adjustedLength = Math.floor(maxLength * 0.85);
      } else if (grid === 3) {
        adjustedLength = maxLength; // Full length for large cards
      }

      if (str.length > adjustedLength) {
        return str.substring(0, adjustedLength) + "...";
      }
      return str;
    },
    [grid]
  );

  const handleAddToCartClick = useCallback(
    (e) => {
      e.stopPropagation();
      setIsAddingToCart(true);
      onAddToCart(item);
      setTimeout(() => setIsAddingToCart(false), 500);
    },
    [item, onAddToCart]
  );

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const gridClass = useMemo(() => {
    if (location.pathname === "/product") {
      return `gr-${grid}`;
    }
    return "col-3";
  }, [location.pathname, grid]);

  const cardHeightClass = useMemo(() => {
    if (grid === 12) {
      return "height-force-small d-flex flex-row align-items-center";
    } else if (grid === 3) {
      return "height-force-big d-block";
    }
    return "d-block";
  }, [grid]);

  return (
    <div
      className={gridClass}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        display: "flex",
        height: "100%",
      }}
    >
      <div
        className={`product-card-modern position-relative ${cardHeightClass}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="article"
        aria-label={`Product: ${item.product_title || item.name}`}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Wishlist Icon */}
        <div className="wishlist-icon-modern position-absolute">
          <Link
            to="/Wishlists"
            className="wishlist-link"
            onClick={(e) => e.stopPropagation()}
            aria-label="Add to wishlist"
          >
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>

        {/* Badge for offers */}
        {item.isOffer && (
          <div className="product-badge position-absolute">
            <span className="badge-text">Sale</span>
          </div>
        )}

        {/* Product Image */}
        <div
          className={`product-image-modern d-flex ${
            grid === 12 ? "product-image-list-view" : ""
          }`}
          onClick={() => onDetailClick(item.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onDetailClick(item.id);
            }
          }}
          aria-label={`View ${item.product_title || item.name}`}
        >
          {!imageLoaded && !imageError && (
            <div className="image-placeholder">
              <div className="spinner"></div>
            </div>
          )}
          {imageError ? (
            <div className="image-error">
              <span>No Image</span>
            </div>
          ) : (
            <>
              <img
                src={item.def_img}
                alt={item.name}
                className={`img-fluid product-image-primary ${
                  imageLoaded ? "loaded" : ""
                } ${isHovered ? "hide" : "show"}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
              {item.sec_img && (
                <img
                  src={item.sec_img}
                  alt={item.name}
                  className={`img-fluid product-image-secondary ${
                    imageLoaded ? "loaded" : ""
                  } ${isHovered ? "show" : "hide"}`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                />
              )}
            </>
          )}
        </div>

        {/* Product Details */}
        <div
          className={`product-details-modern ${
            grid === 12 ? "product-details-list-view" : ""
          }`}
        >
          <h5 className="product-brand">{truncateString(item.name, 30)}</h5>
          <h6 className="product-brand-name">
            {truncateString(item.brand, 25)}
          </h6>
          <h5
            className="product-title-modern"
            onClick={() => onDetailClick(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onDetailClick(item.id);
              }
            }}
          >
            {truncateString(
              item.product_title,
              grid === 12 ? 50 : grid === 6 ? 45 : 40
            )}
          </h5>

          <div className="product-rating">
            <ReactStars
              classNames="ReactStars"
              count={5}
              value={item.avrage_stars || 0}
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>

          <p
            className={`product-description ${
              grid === 12 ? "d-block" : "d-none"
            }`}
          >
            {truncateString(item.description, 150)}
          </p>

          <div className="product-footer">
            <div className="product-price-section">
              <p
                className={`product-price ${
                  item.isOffer ? "price-strikethrough" : ""
                }`}
              >
                ${item.org_price}
              </p>
              {item.isOffer && (
                <p className="product-price-sale">${item.new_price}</p>
              )}
            </div>
            <button
              className={`btn-buy-now ${isAddingToCart ? "adding" : ""}`}
              onClick={handleAddToCartClick}
              disabled={isAddingToCart}
              aria-label={`Add ${item.product_title || item.name} to cart`}
            >
              <span className="btn-text">
                {isAddingToCart ? "Adding..." : "Buy Now"}
              </span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div
          className={`action-bar-modern position-absolute ${
            isHovered ? "visible" : ""
          }`}
        >
          <div className="d-flex flex-column gap-15">
            <Link
              to="#"
              className="action-btn"
              onClick={(e) => e.preventDefault()}
              aria-label="Compare product"
              title="Compare"
            >
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link
              to={`/product/${item.id}`}
              className="action-btn"
              onClick={(e) => e.stopPropagation()}
              aria-label="View product details"
              title="View"
            >
              <img src="images/view.svg" alt="view" />
            </Link>
            <button
              className="action-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCartClick(e);
              }}
              aria-label="Add to cart"
              title="Add to cart"
            >
              <img src="images/add-cart.svg" alt="add to cart" />
            </button>
            {userType === "admin" && (
              <>
                <button
                  className="action-btn action-btn-edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditClick(item.id);
                  }}
                  aria-label="Edit product"
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#008010"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
                <button
                  className="action-btn action-btn-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(item.id);
                  }}
                  aria-label="Delete product"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ProductCard Component
const ProductCard = ({
  grid,
  productPerPage,
  userType,
  id,
  selectedValue = "best-selling",
}) => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  // Sort products based on selectedValue from parent
  const sortedProducts = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    const products = [...data];

    if (!selectedValue) return products;

    // Map display values to sort keys
    const sortMap = {
      "best-selling": "numberOfSell",
      featured: "isOffer",
      "title-ascending": "name",
      "title-descending": "-name",
      "price-ascending": "org_price",
      "price-descending": "-org_price",
      "created-ascending": "id",
      "created-descending": "-id",
    };

    const sortKey = sortMap[selectedValue] || selectedValue;
    const isDescending = sortKey.startsWith("-");
    const actualKey = isDescending ? sortKey.substring(1) : sortKey;

    return products.sort((a, b) => {
      let aVal = a[actualKey];
      let bVal = b[actualKey];

      // Handle special cases
      if (actualKey === "isOffer") {
        aVal = a.isOffer ? 1 : 0;
        bVal = b.isOffer ? 1 : 0;
      }

      // Handle numeric values
      if (typeof aVal === "number" && typeof bVal === "number") {
        return isDescending ? bVal - aVal : aVal - bVal;
      }

      // Handle string values
      if (typeof aVal === "string" && typeof bVal === "string") {
        return isDescending
          ? bVal.localeCompare(aVal)
          : aVal.localeCompare(bVal);
      }

      return 0;
    });
  }, [data, selectedValue]);

  // Pagination
  const paginatedProducts = useMemo(() => {
    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage;
    return sortedProducts.slice(firstProductIndex, lastProductIndex);
  }, [sortedProducts, currentPage, productPerPage]);

  const handleDetailClick = useCallback(
    (productId) => {
      navigate(`/product/${productId}`);
    },
    [navigate]
  );

  const handleAddToCart = useCallback(
    (item) => {
      dispatch(addToCart(item));
      navigate("/cart");
    },
    [dispatch, navigate]
  );

  const handleEditClick = useCallback(
    (productId) => {
      navigate(`/editproduct/${productId}`);
    },
    [navigate]
  );

  const handleDeleteClick = useCallback((productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`https://apitest-lovat.vercel.app/products/${productId}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("Product removed successfully");
            window.location.reload();
          } else {
            alert("Failed to remove product");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("An error occurred while deleting the product");
        });
    }
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <>
        {Array.from({ length: productPerPage }).map((_, index) => (
          <ProductCardSkeleton key={index} grid={grid} />
        ))}
      </>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="col-12">
        <div className="error-message">
          <div className="error-icon">⚠️</div>
          <h3>Oops! Something went wrong</h3>
          <p>We couldn't load the products. Please try again later.</p>
          <button
            className="btn-retry"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty State
  if (!paginatedProducts || paginatedProducts.length === 0) {
    return (
      <div className="col-12">
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h3>No products found</h3>
          <p>Try adjusting your filters or check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {paginatedProducts.map((item, index) => (
        <SingleProductCard
          key={item.id || index}
          item={item}
          index={index}
          grid={grid}
          userType={userType}
          onDetailClick={handleDetailClick}
          onAddToCart={handleAddToCart}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          location={location}
        />
      ))}
      <div className="col-12 d-flex align-items-center justify-content-center text-center mt-4">
        <Pagination
          totalProduct={sortedProducts.length}
          productPerPage={productPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductCard;
