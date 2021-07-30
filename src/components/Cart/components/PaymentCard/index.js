import React from "react";
import { Checkout, Total, P } from "./styles";
import ModalCart from "../ModalCart";

const PaymentCard = ({Price}) => {
  return (
    <Checkout>
      <Total><P>Total</P> <P>R${Price}</P></Total>
      <ModalCart />
    </Checkout>
  );
};

export default PaymentCard;
