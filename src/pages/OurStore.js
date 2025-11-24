import React, { useEffect, useState, useCallback } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";
import HOCSearch from "../components/HOCSearch";
import FilterSidebar from "../components/store/FilterSidebar";
import StoreHeader from "../components/store/StoreHeader";
import useWindowSize from "../hooks/useWindowSize";

const OurStore = ({ userType, data, id }) => {
  const [grid, setGrid] = useState(4);
  const { t } = useTranslation();
  const [productPerPage, setProductPerPage] = useState(9);
  const [selectedValue, setSelectedValue] = useState("best-selling");
  const filterItem = "brand";
  const windowSize = useWindowSize();

  // Auto-adjust grid based on window size
  useEffect(() => {
    if (windowSize.width < 1205) {
      setGrid(12);
      setProductPerPage(5);
    } else if (windowSize.width < 1406) {
      setGrid(6);
      setProductPerPage(6);
    } else if (windowSize.width < 1560) {
      setGrid(4);
      setProductPerPage(9);
    } else {
      setGrid(4);
      setProductPerPage(9);
    }
  }, [windowSize.width]);

  // Handle sort change
  const handleSortChange = useCallback((value) => {
    setSelectedValue(value);
  }, []);

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters) => {
    // Filter logic can be implemented here
    console.log("Filters changed:", newFilters);
  }, []);

  // Handle grid change
  const handleGridChange = useCallback((newGrid, newPerPage) => {
    setGrid(newGrid);
    if (newPerPage) {
      setProductPerPage(newPerPage);
    }
  }, []);

  // Handle product per page change
  const handleProductPerPageChange = useCallback((newPerPage) => {
    setProductPerPage(newPerPage);
  }, []);

  const isMobile = windowSize.width < 1560;

  return (
    <>
      <Meta title={t("our_store")} />
      <BreadCrumb title={t("our_store")} />
      <div className="store-wrapper-modern home-wrapper-2 py-5">
        <div className="container-sm">
          <div className="row g-4">
            {/* Filter Sidebar */}
            {!isMobile && (
              <div className="col-lg-3 col-md-4">
                <FilterSidebar
                  data={data}
                  filterItem={filterItem}
                  onFilterChange={handleFilterChange}
                  isMobile={false}
                />
              </div>
            )}

            {/* Main Content */}
            <div className={isMobile ? "col-12" : "col-lg-9 col-md-8"}>
              {/* Mobile Filter Toggle */}
              {isMobile && (
                <FilterSidebar
                  data={data}
                  filterItem={filterItem}
                  onFilterChange={handleFilterChange}
                  isMobile={true}
                />
              )}

              {/* Store Header */}
              <StoreHeader
                totalProducts={data?.length || 0}
                selectedValue={selectedValue}
                onSortChange={handleSortChange}
                grid={grid}
                onGridChange={handleGridChange}
                productPerPage={productPerPage}
                onProductPerPageChange={handleProductPerPageChange}
                windowSize={windowSize}
              />

              {/* Product List */}
              <div className="product-list-modern py-4">
                <div className="row g-4">
                  <ProductCard
                    grid={grid}
                    productPerPage={productPerPage}
                    userType={userType}
                    onSelectedValueChange={handleSortChange}
                    id={id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NewOurStore = HOCSearch(OurStore, "users");

export default NewOurStore;
