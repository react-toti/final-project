import React from 'react';
import ModalCart from '../../components/Cart/components/ModalCart';
import Grid from '../../components/Cart/components/Grid';


const Cart = (props) => {
  return (
    <>
        <h1>Cart</h1>
        <ModalCart/>
        <Grid></Grid>
    </>
  );
};

export default Cart;