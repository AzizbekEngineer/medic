import React, { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout";
import Warranty from "./pages/warranty/Warranty";
import Category from "./pages/category/Category";
import Contact from "./pages/contact/Contact";
import Deliver from "./pages/deliver/Deliver";
import Article from "./pages/article/Article";
import Feedback from "./pages/feedback/Feedback";
import About from "./pages/about/About";
import Detail from "./pages/detail/Detail";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index path={"/"} element={<Home />} />
          <Route path={"/category"} element={<Category />} />
          <Route path={"/warranty"} element={<Warranty />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/deliver"} element={<Deliver />} />
          <Route path={"/article"} element={<Article />} />
          <Route path={"/feedback"} element={<Feedback />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/product/:id"} element={<Detail />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
