import React from "react";
import {
  List,
  Items,
  Img,
  Title,
  Price,
  Quantity,
  Remove,
  CotainerInfo,
  Button,
  Count,
  // Checkout,
  // Total,
  // Pagar,
  ContainerList,
} from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import PaymentCard from "../PaymentCard";

const Grid = (props) => {
  const addItem = () => {
    console.log("addItem");
  };

  const subtractItem = () => {
    console.log("subtractItem");
  };

  return (
    <>
      <h1>Grid</h1>
      <ContainerList>
        <List>
          <Items>
            <Img src="https://picsum.photos/536/354" alt="Img" />
            <CotainerInfo>
              <Title>Handcrafted Fresh Tuna</Title>
              <Price>R$106.00</Price>
              <Quantity>
                <Button onClick={subtractItem}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Count>1</Count>
                <Button onClick={addItem}>
                  <AddIcon fontSize="small" />
                </Button>
              </Quantity>
              <Remove>
                Excluir
                <RemoveShoppingCartIcon
                  fontSize="14px"
                  color="textSecondary"
                  style={{ marginLeft: "5px" }}
                />
              </Remove>
            </CotainerInfo>
          </Items>
          <hr></hr>

          <Items>
            <Img src="https://picsum.photos/536/354" alt="Img" />
            <CotainerInfo>
              <Title>Handcrafted Fresh Tuna</Title>
              <Price>R$106.00</Price>
              <Quantity>
                <Button onClick={subtractItem}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Count>1</Count>
                <Button onClick={addItem}>
                  <AddIcon fontSize="small" />
                </Button>
              </Quantity>
              <Remove>
                Excluir
                <RemoveShoppingCartIcon
                  fontSize="14px"
                  color="textSecondary"
                  style={{ marginLeft: "5px" }}
                />
              </Remove>
            </CotainerInfo>
          </Items>
          <hr></hr>

          <Items>
            <Img src="https://picsum.photos/536/354" alt="Img" />
            <CotainerInfo>
              <Title>Handcrafted Fresh Tuna</Title>
              <Price>R$106.00</Price>
              <Quantity>
                <Button onClick={subtractItem}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Count>1</Count>
                <Button onClick={addItem}>
                  <AddIcon fontSize="small" />
                </Button>
              </Quantity>
              <Remove>
                Excluir
                <RemoveShoppingCartIcon
                  fontSize="14px"
                  color="textSecondary"
                  style={{ marginLeft: "5px" }}
                />
              </Remove>
            </CotainerInfo>
          </Items>
          <hr></hr>

          <Items>
            <Img src="https://picsum.photos/536/354" alt="Img" />
            <CotainerInfo>
              <Title>Handcrafted Fresh Tuna</Title>
              <Price>R$106.00</Price>
              <Quantity>
                <Button onClick={subtractItem}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Count>1</Count>
                <Button onClick={addItem}>
                  <AddIcon fontSize="small" />
                </Button>
              </Quantity>
              <Remove>
                Excluir
                <RemoveShoppingCartIcon
                  fontSize="14px"
                  color="textSecondary"
                  style={{ marginLeft: "5px" }}
                />
              </Remove>
            </CotainerInfo>
          </Items>
          <hr></hr>
        </List>
        <PaymentCard />
        {/* <Checkout>
            <Total>Total R$1000.00</Total>
            <ModalCart/>
          </Checkout> */}
      </ContainerList>
    </>
  );
};

export default Grid;
