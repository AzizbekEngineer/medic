import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Product from "../product/Product";

const Products = ({ data }) => {
  return (
    <div className="product containerMax">
      <div className="product__cards">
        {data?.map((el) => (
          <Product el={el} key={el._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
