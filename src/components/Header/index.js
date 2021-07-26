import React, {useState} from 'react';
import { Barnav, A, Cart, I, NumberSpan, Account } from './styles'

const Header = ({props}) => {
  const [NumberCart] = useState('99');

  //setNumberCart('1')

  //window.location.href = window.location.origin+'/car';

  return (
    <>
        <Barnav>
          <A {...props} href='/'>Home</A>
          <A  {...props} href='/'>Fale Conosco</A>
          <Cart {...props}><I className='fas'>&#xf07a;</I><NumberSpan NumberCart={NumberCart} >{NumberCart}</NumberSpan></Cart>
          <Account {...props}><I className='fas fa-user-alt'></I></Account>
        </Barnav>
    </>
  );
};

export default Header;


