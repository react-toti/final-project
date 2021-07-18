import React from 'react';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { Text3 } from '../../components/Text/styles';
import api from '../../services/api';
import * as S from './styles.js';
import Button from '../../components/Button';
import Input from '../../components/Input';


const CMA = props =>{    
     const initialValues = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          };
        
    const scheme = Yup.object().shape({
             titulo: Yup.string()
             .min(2, 'Muito curto')
             .max(50, 'Muito longo')
             .required('Nome obrigatório'),
             email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
             password: Yup.string()
             .required('Senha obrigatória')
             .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
             confirmPassword: Yup.string().oneOf(
             [Yup.ref('password'), null],
             'Senhas devem ser iguais',
             ),
         });
    const onSubmit = async (values, resetForm) => {
            const response = await api.post('/users', { values });
            if (response.status === 201) {
                resetForm({ values: '' });
                props.history.push('/home');
            }
        };
            
        
    return(
        <S.CMAContainer> 
         <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          <form>
            <Input id="titulo" name="name" type="text" placeholder="Titulo da materia" />
            <Input name="subtitulo" type="text" placeholder="Subtitulo da materia" />
            <Input name="img" type="text" placeholder="Url primera imagen" />
            <Input
              name="segundaImg"
              type="text"
              placeholder="Url de la segunda imagen"
            />
            <Button type="submit">Publicar</Button>
            <Text3 color="blue">ya veremos que podra ser.</Text3>
          </form>
        </Formik>
        </S.CMAContainer>
    )
}

export default CMA;

// const initialValues = {
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };

//   const scheme = Yup.object().shape({
//     name: Yup.string()
//       .min(2, 'Muito curto')
//       .max(50, 'Muito longo')
//       .required('Nome obrigatório'),
//     email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
//     password: Yup.string()
//       .required('Senha obrigatória')
//       .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
//     confirmPassword: Yup.string().oneOf(
//       [Yup.ref('password'), null],
//       'Senhas devem ser iguais',
//     ),
//   });

//   const onSubmit = async (values, resetForm) => {
//     const response = await api.post('/users', { values });
//     if (response.status === 201) {
//       resetForm({ values: '' });
//       props.history.push('/dashboard');
//     }
//   };

//   return (
//     <>
//       <Container>
//         {/* <PhrasesContainer>
//         <img src={connectedWorld} alt="Mundo conectado" />
//       </PhrasesContainer> */}
//         <Formik
//           initialValues={initialValues}
//           validationSchema={scheme}
//           onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
//         >
//           <FormContainer>
//             <Input id="name" name="name" type="text" placeholder="Nome" />
//             <Input name="email" type="email" placeholder="Email" />
//             <Input name="password" type="password" placeholder="Senha" />
//             <Input
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirmação de senha"
//             />
//             <Button type="submit">Cadastrar</Button>
//             <Text3 color="blue">Já tenho conta. Entrar.</Text3>
//           </FormContainer>
//         </Formik>
//       </Container>
//     </>
//   );
// };