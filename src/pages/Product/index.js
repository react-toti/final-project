import React from "react";
import {useParams} from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";

const Product = () => {

  let params = useParams();
  const getProduct = async () => {
    const response = await api.get("/Product/5");
    return response.data;
  };

  return (
    <>
      <ProductItem data={getProduct} id={params.id} />
    </>
  );
};

export default Product;
 