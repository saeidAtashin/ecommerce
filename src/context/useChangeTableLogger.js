// useChangeTableLogger.js

import { useChangeTable } from "../context/ChangeTableProvider";

export function useChangeTableLogger() {
  const changeTable = useChangeTable();

  const logAddToCart = (userType, productId, elementName) => {
    changeTable.logChange(
      userType ? "admin" : "not admin",
      `its ${elementName}`,
      { productId }
    );
  };

  return { logAddToCart };
}
