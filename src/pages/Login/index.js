import React, { useState } from 'react';
import { SingnIn, SingnUp } from '../../components';
//import { setNumberCart } 

import { Container, ContainerSingIn, ContainerSingUp, ContainerButton, Img, Setimg} from './styles';


const Login = (...props) => {

  const [imgPosition, setImg] = useState('0%');
  const [colorBtnEntrar, setcolorBtnEntrar] = useState('error');
  const [colorBtnCadastro, setcolorBtnCadastro] = useState('default');

  const entrar = () => {
    setImg("0%");
    //setNumberCart('1')
    setcolorBtnEntrar("error")
    setcolorBtnCadastro("default")
    //console.log(imgPosition);
  };
  const criarConta = () => {
    setImg("50%");
    setcolorBtnEntrar("default")
    setcolorBtnCadastro("error")
    //console.log(imgPosition);
  };

  
  return (
    <>
        <ContainerButton>
            <Setimg {...props} colorbtn={colorBtnEntrar} onClick={(event) => entrar()}>
                Entrar
            </Setimg>
            <Setimg {...props} colorbtn={colorBtnCadastro} onClick={(event) => criarConta()}>
                Criar conta
            </Setimg>
        </ContainerButton>
      <Container>
        <Img {...props} right={imgPosition}  src="http://placeimg.com/640/480/food"/>

        <ContainerSingIn>
            <SingnIn/>
        </ContainerSingIn>
        
        <ContainerSingUp>
          <SingnUp/>
        </ContainerSingUp>
      </Container>
    </>
  );
};

export default Login;
