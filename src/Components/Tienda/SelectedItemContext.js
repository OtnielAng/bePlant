import React, { createContext, useContext, useState } from 'react';

const SelectedItemContext = createContext();

export function useSelectedItem() {
  return useContext(SelectedItemContext);
}

export function SelectedItemProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
}
export default useSelectedItem