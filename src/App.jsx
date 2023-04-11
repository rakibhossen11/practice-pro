import React, { createContext, useContext } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Home from "./components/Home";

export const ProductContext = createContext([])

const App = () => {
  const products = useLoaderData();

  return (
    <div>
      <ProductContext.Provider value={products}>
        <Header />
        <Outlet />
      </ProductContext.Provider>
    </div>
  );
};

export default App;
