import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../products/Products";

const ProductData = () => {
  const { data } = useGetProductsQuery();

  return (
    <div>
      <Products data={data?.payload} />
    </div>
  );
};

export default ProductData;
