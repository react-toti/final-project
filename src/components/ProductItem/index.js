import React, { useState } from "react";
import { Container, Description, ImgProduct } from "./styles";

const ProductItem = () => {
  let [quantity, setQuantity] = useState(0);
  let [price, setPrice] = useState(120)
  let chulu = quantity;

  const sumar = () =>{
    chulu = quantity+1
    setQuantity(chulu);
    if(chulu >= 1){
      let total = chulu*120;
      setPrice(total)
    }
  }
  const restar = () =>{setQuantity(quantity-1)}

  return (
    <>
      <h2>Product page</h2>
      <Container>
        <ImgProduct>
          <h3>Product Item (insert image)</h3>
        </ImgProduct>
        <Description>
          <h3>Title Item</h3>
          <div>
          <p>Description</p>
          </div>
          <p>Price = {price}</p>
          <button onClick={restar}>-</button>
          {quantity}
          <button onClick={sumar}>+</button>
          <button >Add to Cart</button>
        </Description>
      </Container>
    </>
  );
};

export default ProductItem;
