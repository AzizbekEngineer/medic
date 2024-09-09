import React, { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Layout from "./components/layout";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index path={"/"} element={<Home />} />
          <Route path={"catalog"} element={<Catalog />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
