import React from "react";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";

const Product = ({ id }) => {
  const getProduct = async () => {
    const response = await api.get("/Product/1", {});
    return response.data;
  };

  return (
    <>
      <ProductItem data={getProduct} />
    </>
  );
};

export default Product;
