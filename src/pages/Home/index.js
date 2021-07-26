import React, { useState } from "react";
import api from "../../services/api";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await api.get(`/Product/}`);
    setProduct(response.data);
    return response.data;
  };

  const rederHome = () => {
    return (
      <div>
        <button onClick={getProduct}></button>
        <article>
          <img src={product.Imagen} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.Price}</p>
        </article>
      </div>
    );
  };

  return (
    <>
      <h1>Home</h1>
      <article>
      {rederHome}
      </article>

    </>
  );
};

export default Home;
