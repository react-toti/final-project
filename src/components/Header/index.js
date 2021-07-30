import React, {useState, useEffect} from 'react';
import { Barnav, A, Cart, NumberSpan, Account, H1 } from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import api from "../../services/api";
import {theme} from "../../styles/theme"
import {Link} from 'react-router-dom'

const Header = ({props}) => {
  const [NumberCart, setNumberCart] = useState('0');
  const getNumberItemsCart = async () => {
    const response = await api.get(`/Cart`);
    setNumberCart(response.data.length);
    return response.data;
  };
  useEffect(() => {
    getNumberItemsCart()
  }, []);
  

  return (
    <>
        <Barnav>
          <Link to= '/home'>
            <H1>My Shop</H1>
          </Link>
          <A {...props} href='/'>Home</A>
          <A  {...props} href='/'>Fale Conosco</A>
          <Link to= '/cart'>
            <Cart {...props}>
              <ShoppingCartIcon style={{ color: theme.textSecondary }} fontSize="20px"></ShoppingCartIcon>
              <NumberSpan NumberCart={NumberCart} >{NumberCart}</NumberSpan>
            </Cart>
          </Link>
          <Link to= '/login'>
            <Account {...props}>
              <AccountCircleIcon style={{ color: theme.textSecondary }} ></AccountCircleIcon>
            </Account>
          </Link>
        </Barnav>
    </>
  );
};

export default Header;


