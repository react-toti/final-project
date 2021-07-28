import React, {useState} from 'react';
import { Barnav, A, Cart, NumberSpan, Account } from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Header = ({props}) => {
  const [NumberCart] = useState('99');

  //setNumberCart('1')

  //window.location.href = window.location.origin+'/car';

  return (
    <>
        <Barnav>
          <A {...props} href='/'>Home</A>
          <A  {...props} href='/'>Fale Conosco</A>
          <Cart {...props}><ShoppingCartIcon color="#fff" fontSize="20px"></ShoppingCartIcon><NumberSpan NumberCart={NumberCart} >{NumberCart}</NumberSpan></Cart>
          <Account {...props}><AccountCircleIcon></AccountCircleIcon></Account>
        </Barnav>
    </>
  );
};

export default Header;


