import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // add product form state
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  // edit product model state
  const [showEditProductModel, setShowEditProductModel] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showAddProductForm,
        setShowAddProductForm,
        showEditProductModel,
        setShowEditProductModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
