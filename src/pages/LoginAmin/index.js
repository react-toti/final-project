import React from 'react';
import { SingnInAdmin,  } from '../../components';

import { Container, ContainerSingInAdmin} from './styles';


const LoginAdmin = (...props) => {
 
  return (
    <>
      <Container>
        <ContainerSingInAdmin>
            <SingnInAdmin/>
        </ContainerSingInAdmin>
      </Container>
    </>
  );
};

export default LoginAdmin;
