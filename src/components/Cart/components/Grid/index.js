import React, {useEffect, useState} from "react";
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
  ContainerList,
} from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import PaymentCard from "../PaymentCard";
import api from "../../../../services/api"

const Grid = (props) => {
  const [ItemsList, setItemsList] = useState([]);
  const [PriceTotal, setPriceTotal] = useState(0);

  const calcPriceTotal = (ListItems) => { 
    let price = 0 
    for (const ItemList of ListItems) {
      price = price + (Number(ItemList.Price)*Number(ItemList.Quantity))
    }
    setPriceTotal(price); 
  }

  const getItemsCart = async () => {
    const response = await api.get(`/Cart`);

    setItemsList([response.data][0]);
    calcPriceTotal([response.data][0])

    return response.data;
  };

  
  //console.log(PriceTotal);
  
  useEffect( () => {
    getItemsCart()
  }, []);

  const addItem = () => {
    console.log("addItem");
  };

  const subtractItem = () => {
    console.log("subtractItem");
  };

  return (
    <>
      <ContainerList>
        <List>
        {ItemsList.map((Item, index) => {
          
            return (
              <>
                <Items>
                  <Img src={Item.Imagen} alt="Img" />
                  <CotainerInfo>
                    <Title>{Item.name}</Title>
                    <Price>R${Item.Price}</Price>
                    <Quantity>
                      <Button  onClick={subtractItem}>
                        <RemoveIcon  fontSize="small" />
                      </Button>
                      <Count>{Item.Quantity}</Count>
                      <Button onClick={addItem}>
                        <AddIcon fontSize="small" />
                      </Button>
                    </Quantity>
                    <Remove {...props}>
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
              </>
            )
          })
        }

        </List>
        <PaymentCard Price={PriceTotal}/>
        
      </ContainerList>
    </>
  );
};

export default Grid;
