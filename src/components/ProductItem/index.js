import React, { useState } from "react";
import {
  Container,
  Description,
  Paragraphy,
  Price,
  Quantity,
  Button,
  Title,
  DescriptionText,
  AddCart
} from "./styles";
import api from "../../services/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";

const ProductItem = ({ data }) => {
  const [product, setProduct] = useState("");
  const [ID, setID] = useState(1);

  const getProduct = async () => {
    const response = await api.get(`/Product/${ID}`);
    setProduct(response.data);
    setID(ID + 1);
    return response.data;
  };

  console.log({ product });

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    width: "40%",
  };
  return (
    <>
      <h2>Product page</h2>
      <Container>
        <div style={styles}>
          <Carousel>
            <div>
              <img src={product.Imagen} alt={product.name} />
              <p className="legend">
                {product.name} - {product.Price}
              </p>
            </div>
            <div>
              <img src={product.Imagen2} alt={product.name} />
              <p className="legend">
                {product.name} - {product.Price}
              </p>
            </div>
            <div>
              <img src={product.Imagen3} alt={product.name} />
              <p className="legend">
                {product.name} - {product.Price}
              </p>
            </div>
            <div>
              <img src={product.Imagen4} alt={product.name} />
              <p className="legend">
                {product.name} - {product.Price}
              </p>
            </div>
            <div>
              <img src={product.Imagen5} alt={product.name} />
              <p className="legend">
                {product.name} - {product.Price}
              </p>
            </div>
          </Carousel>
        </div>
        <Description>
          <Title>{product.name}</Title>
          <DescriptionText>
            <p>{product.Description}</p>
          </DescriptionText>

          <Price>
            <h3>{product.Price}</h3>
          </Price>

          <Quantity>
            <Button>-</Button>
            <h3>0</h3>
            <Button>+</Button>
          </Quantity>
          <AddCart>Add to Cart</AddCart>

        </Description>
      </Container>
    </>
  );
};

export default ProductItem;
