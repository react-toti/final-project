import React from 'react';
import { useField } from 'formik';

import { Container, ErrorMessage } from './styles';

const Input = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <input placeholder={placeholder} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Input;