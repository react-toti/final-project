import React from 'react';
import { FormContainer, ContainerButton} from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '../../components';
import { Container } from './styles';

import api from '../../services/api';

const SingnUp = props => {
  
  //getProduct();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmarPassword: '',
  };

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto')
      .max(50, 'Muito longo')
      .required('Nome obrigatório')
      .matches(/^[aA-zZ\s]+$/, "no mames wey, solo letras"),
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
    confirmarPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Senhas devem ser iguais',
    ),
  });


  const onSubmit = async (values, resetForm, props) => {
    const response = await api.post("/Users",{
      name: values.name,
      email: values.email,
      password: values.password,
    });
    console.log(response);
    if (response.status === 201) {
      //console.log()
      resetForm({ values: '' });
      window.location.href = window.location.origin+'/home';
      //props.history.push('/home');
    }
    
  };

  

  return (
    <Container>
        <h1>SingnUp</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={(values, { resetForm }, props) => onSubmit(values, resetForm, props)}
        >
          <FormContainer>
              <Input
              name='name'
              type='text'
              placeholder="Nome"
              />
              <Input
              name='email'
              type='email'
              placeholder="Email"
              />
              <Input
              name='password'
              type='password'
              placeholder="Senha"
              />
              <Input
              name='confirmarPassword'
              type='password'
              placeholder="Confirmar Password"
              />
              <ContainerButton>
                <Button Button type='submit' >Cadastrar</Button>
              </ContainerButton>
              
          </FormContainer>
        </Formik>
    </Container>
  );
};

export default SingnUp;


