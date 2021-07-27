import React, { useState } from "react";
import {
  Container,
  Description,
  Price,
  Quantity,
  Button,
  Title,
  DescriptionText,
  AddCart,
  Count,
  TotalPrice,
} from "./styles";
import api from "../../services/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ProductItem = () => {
  const [product, setProduct] = useState("");
  const [ID, setID] = useState(1);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const getProduct = async () => {
    const response = await api.get(`/Product/${ID}`);
    setProduct(response.data);
    setID(ID + 1);
    return response.data;
  };

  const price = product.Price;

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    width: "40%",
  };

  const addItem = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
    console.log(totalPrice);
  };

  const subtractItem = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const total = price * count;

  useEffect(() => {
    setTotalPrice(total);
  }, [total]);

  return (
    <>
      <Container>
        <div style={styles}>
          <Carousel>
            <div>
              <img src={product.Imagen} alt={product.name} />
            </div>
            <div>
              <img src={product.Imagen2} alt={product.name} />
            </div>
            <div>
              <img src={product.Imagen3} alt={product.name} />
            </div>
            <div>
              <img src={product.Imagen4} alt={product.name} />
            </div>
            <div>
              <img src={product.Imagen5} alt={product.name} />
            </div>
          </Carousel>
        </div>
        <Description>
          <Title>{product.name}</Title>
          <DescriptionText>
            <p>{product.Description}</p>
          </DescriptionText>

          <Price>
            <h3>R${product.Price}</h3>
          </Price>

          <Quantity>
            <Button onClick={subtractItem}>
              <RemoveIcon fontSize="small" />
            </Button>
            <Count>{count}</Count>
            <Button onClick={addItem}>
              <AddIcon fontSize="small" />
            </Button>
            <TotalPrice>
              R${total.toFixed(2)}
            </TotalPrice>
          </Quantity>
          <AddCart>
            Add to Cart
            <AddShoppingCartIcon
              color="secondary"
              style={{ marginLeft: "5px" }}
            />
          </AddCart>
        </Description>
      </Container>
    </>
  );
};

export default ProductItem;
