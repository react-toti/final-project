import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer} from './styles';

import { Input, Button } from '../../components';

const SingnIn = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleForm = () => {};
  return (
    <>
        <h1>SingnUp</h1>
        <FormContainer onSubmit={() => handleForm()}>
            <Input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Email"
            />
            <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            />
            <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            />
            <Input
            value={confirmarPassword}
            onChange={e => setConfirmarPassword(e.target.value)}
            placeholder="Confirmar Password"
            />
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


