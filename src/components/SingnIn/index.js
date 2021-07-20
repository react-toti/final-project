import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer} from './styles';

import { Input, Button } from '../../components';

const SingnIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (event) => {
    event.preventDefault()
    console.log(email, password);
  };
  return (
    <>
        <h1>SingnIn</h1>
        <FormContainer onSubmit={(event) => handleForm(event)}>
            <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            />
            <Input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            />
            <Button type='submit' >Entrar</Button>
            
            
            <Link to="/signup">
            <Button buttonSize="small" buttonStyle="secondary">
                {' '}
                Criar conta{' '}
            </Button>
            </Link>
        </FormContainer>
    </>
  );
};

export default SingnIn;


