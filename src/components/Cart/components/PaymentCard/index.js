import React from "react";
import { Checkout, Total } from "../Grid/styles";
import ModalCart from "../ModalCart";

const PaymentCard = () => {
  return (
    <Checkout>
      <Total>Total R$1000.00</Total>
      <ModalCart />
    </Checkout>
  );
};

export default PaymentCard;
