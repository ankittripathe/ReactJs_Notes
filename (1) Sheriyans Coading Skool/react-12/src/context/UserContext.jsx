import React from "react";
import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const userData = {
    username: 'Ankit Tripathi',
    age: 25,
    city:'Gorakhpur'
  }

  return (
    <div>
      <DataContext.Provider value={userData}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
