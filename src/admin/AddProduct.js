import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [product_title, setproduct_title] = useState("");
  const [org_price, setorg_price] = useState("");
  const [new_price, setnew_price] = useState("");
  const [isOffer, setisOffer] = useState(false);
  const [isActive, setisActive] = useState(true);
  const [description, setDescription] = useState("");

  // Products list state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("form");

  const navigate = useNavigate();

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://apitest-lovat.vercel.app/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const prosuctdetials = {
      id,
      name,
      brand,
      product_title,
      org_price,
      new_price,
      isOffer,
      isActive,
      description,
    };

    fetch("https://apitest-lovat.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prosuctdetials),
    })
      .then((res) => {
        alert("Product saved successfully!");
        fetchProducts(); // Refresh the products list
        // Reset form
        setId("");
        setName("");
        setBrand("");
        setproduct_title("");
        setorg_price("");
        setnew_price("");
        setisOffer(false);
        setDescription("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`https://apitest-lovat.vercel.app/products/${productId}`, {
          method: "DELETE",
        });
        fetchProducts();
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  // Icons as SVG components
  const PlusIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );

  const TableIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );

  const PackageIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );

  const UploadIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const SendIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  );

  const EditIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );

  const TrashIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );

  const BoxIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
      />
    </svg>
  );

  const activeProducts = products.filter((p) => p.isActive).length;
  const offerProducts = products.filter((p) => p.isOffer).length;

  return (
    <div>
      <Meta title={"Add Product"} />
      <BreadCrumb title="Product Management" />

      <div className="admin-page-container">
        <div className="admin-wrapper">
          {/* Header Section */}
          <div className="admin-header">
            <div>
              <h1 className="admin-title">
                Product <span>Dashboard</span>
              </h1>
              <p className="admin-subtitle">
                Manage your product inventory with ease
              </p>
            </div>

            <div className="tab-navigation">
              <button
                className={`tab-btn ${activeTab === "form" ? "active" : ""}`}
                onClick={() => setActiveTab("form")}
              >
                <PlusIcon /> Add Product
              </button>
              <button
                className={`tab-btn ${activeTab === "table" ? "active" : ""}`}
                onClick={() => setActiveTab("table")}
              >
                <TableIcon /> View All ({products.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "both" ? "active" : ""}`}
                onClick={() => setActiveTab("both")}
              >
                <PackageIcon /> Split View
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div
            className={`admin-grid ${activeTab === "both" ? "show-table" : ""}`}
          >
            {/* Add Product Form */}
            {(activeTab === "form" || activeTab === "both") && (
              <div className="admin-card">
                <div className="card-header">
                  <div className="card-header-icon">
                    <PlusIcon />
                  </div>
                  <h3>Add New Product</h3>
                </div>

                <div className="card-body">
                  <form onSubmit={handlesubmit}>
                    <div className="form-grid">
                      {/* Name */}
                      <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter product name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      {/* Brand */}
                      <div className="form-group">
                        <label className="form-label">Brand</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter brand name"
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                        />
                      </div>

                      {/* Product Title */}
                      <div className="form-group full-width">
                        <label className="form-label">Product Title</label>
                        <textarea
                          className="form-textarea"
                          placeholder="Enter a detailed product title"
                          value={product_title}
                          onChange={(e) => setproduct_title(e.target.value)}
                        />
                      </div>

                      {/* Description */}
                      <div className="form-group full-width">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-textarea"
                          placeholder="Describe your product..."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      {/* Is Offer */}
                      <div className="form-group">
                        <label className="form-label">Is On Offer?</label>
                        <div className="radio-group">
                          <div
                            className="radio-option"
                            onClick={() => setisOffer(true)}
                          >
                            <div
                              className={`radio-custom ${
                                isOffer ? "active" : ""
                              }`}
                            ></div>
                            <span>Yes</span>
                          </div>
                          <div
                            className="radio-option"
                            onClick={() => setisOffer(false)}
                          >
                            <div
                              className={`radio-custom ${
                                !isOffer ? "active" : ""
                              }`}
                            ></div>
                            <span>No</span>
                          </div>
                        </div>
                      </div>

                      {/* Is Active */}
                      <div className="form-group">
                        <label className="form-label">Status</label>
                        <div className="toggle-group">
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={isActive}
                              onChange={(e) => setisActive(e.target.checked)}
                            />
                            <span className="toggle-slider"></span>
                          </label>
                          <span className="toggle-label">
                            {isActive ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </div>

                      {/* Original Price */}
                      <div className="form-group">
                        <label className="form-label">Original Price ($)</label>
                        <input
                          type="number"
                          className="form-input"
                          placeholder="0.00"
                          value={org_price}
                          onChange={(e) => setorg_price(e.target.value)}
                        />
                      </div>

                      {/* New Price (only if offer) */}
                      {isOffer && (
                        <div className="form-group">
                          <label className="form-label">Sale Price ($)</label>
                          <input
                            type="number"
                            className="form-input"
                            placeholder="0.00"
                            value={new_price}
                            onChange={(e) => setnew_price(e.target.value)}
                          />
                        </div>
                      )}

                      {/* File Upload */}
                      <div className="form-group full-width">
                        <label className="form-label">Product Image</label>
                        <label className="file-upload">
                          <div className="file-upload-icon">
                            <UploadIcon />
                          </div>
                          <p className="file-upload-text">
                            <strong>Click to upload</strong> or drag and drop
                            <br />
                            PNG, JPG or WEBP (max. 5MB)
                          </p>
                          <input type="file" accept="image/*" />
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                      <SendIcon />
                      Add Product
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Products Table */}
            {(activeTab === "table" || activeTab === "both") && (
              <div className="admin-card">
                <div className="card-header">
                  <div className="card-header-icon">
                    <BoxIcon />
                  </div>
                  <h3>All Products</h3>
                </div>

                <div className="table-container">
                  {loading ? (
                    <div className="loading-state">
                      <div className="loading-spinner"></div>
                      <p>Loading products...</p>
                    </div>
                  ) : products.length === 0 ? (
                    <div className="empty-state">
                      <div className="empty-state-icon">
                        <PackageIcon />
                      </div>
                      <p>No products found. Add your first product!</p>
                    </div>
                  ) : (
                    <table className="product-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Brand</th>
                          <th>Price</th>
                          <th>Offer</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <div className="product-name-cell">
                                <div className="product-avatar">
                                  {product.name?.charAt(0)?.toUpperCase() ||
                                    "P"}
                                </div>
                                <span className="product-name">
                                  {product.name || "Unnamed"}
                                </span>
                              </div>
                            </td>
                            <td>{product.brand || "-"}</td>
                            <td>
                              {product.isOffer && product.new_price ? (
                                <>
                                  <span className="price-tag discount">
                                    ${product.org_price}
                                  </span>
                                  <span className="price-tag">
                                    ${product.new_price}
                                  </span>
                                </>
                              ) : (
                                <span className="price-tag">
                                  ${product.org_price || "0"}
                                </span>
                              )}
                            </td>
                            <td>
                              <span
                                className={`offer-badge ${
                                  product.isOffer ? "yes" : "no"
                                }`}
                              >
                                {product.isOffer ? "Yes" : "No"}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`status-badge ${
                                  product.isActive
                                    ? "status-active"
                                    : "status-inactive"
                                }`}
                              >
                                {product.isActive ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td>
                              <div className="action-btns">
                                <button
                                  className="action-btn edit"
                                  onClick={() => handleEdit(product.id)}
                                  title="Edit product"
                                >
                                  <EditIcon />
                                </button>
                                <button
                                  className="action-btn delete"
                                  onClick={() => handleDelete(product.id)}
                                  title="Delete product"
                                >
                                  <TrashIcon />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Stats Footer */}
                {products.length > 0 && (
                  <div className="stats-row">
                    <div className="stat-item">
                      Total:{" "}
                      <span className="stat-value">{products.length}</span>
                    </div>
                    <div className="stat-item">
                      Active:{" "}
                      <span className="stat-value">{activeProducts}</span>
                    </div>
                    <div className="stat-item">
                      On Offer:{" "}
                      <span className="stat-value">{offerProducts}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
