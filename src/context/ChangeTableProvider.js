import React, { createContext, useContext, useState } from "react";
import ChangeTable from "../components/ChangeTable";

const ChangeTableContext = createContext();

export const useChangeTable = () => {
  const context = useContext(ChangeTableContext);
  if (!context) {
    throw new Error("useChangeTable must be used within a ChangeTableProvider");
  }
  return context;
};

export const ChangeTableProvider = ({ children }) => {
  const [changeLog, setChangeLog] = useState([]);

  const logChange = (componentName, propName, prevValue, nextValue) => {
    setChangeLog([
      ...changeLog,
      { componentName, propName, prevValue, nextValue },
    ]);
  };

  return (
    <ChangeTableContext.Provider value={{ logChange }}>
      {children}
      <ChangeTable changeLog={changeLog} />
    </ChangeTableContext.Provider>
  );
};
