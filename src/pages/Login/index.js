import React from 'react';
import { SingnIn, SingnUp } from '../../components';

import { Container} from './styles';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Container>
          <img/>
        <SingnIn/>
        <SingnUp/>
      </Container>
    </>
  );
};

export default Login;
