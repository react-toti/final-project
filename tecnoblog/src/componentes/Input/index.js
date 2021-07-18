import React from 'react';

import { Container, ErrorMessage } from './styles';

const Input = ({ placeholder, ...props }) => (
  <Container>
    <input placeholder={placeholder} {...props} />
    <ErrorMessage />
  </Container>
);

export default Input;
