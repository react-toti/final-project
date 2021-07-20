import React from 'react';

import { Container, ErrorMessage } from './styles';

const variants = ['default', 'filled', 'error', 'selected' ]

const Input = ({placeholder, inputStyle,  ...props}) =>{
  const checkInputStyle = variants.includes(inputStyle) 
  ? inputStyle 
  : variants[0];
  
  return(
  <Container variant={checkInputStyle}>
    <input placeholder={placeholder}  {...props}/>
    <ErrorMessage/>
  </Container>
)};

export default Input;