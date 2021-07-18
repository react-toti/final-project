import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text3 } from '../../componentes/Text/styles';
import api from '../../services/api';
import * as S from './styles.js';


const CMA = props =>{    
     const initialValues = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          };
        
    const scheme = Yup.object().shape({
            name: Yup.string()
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
            const response = await api.post('/', { values });
            if (response.status === 201) {
                resetForm({ values: '' });
                props.history.push('/');
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
            <input id="name" name="name" type="text" placeholder="Nome" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Senha" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmação de senha"
            />
            <button type="submit">Cadastrar</button>
            <Text3 color="blue">Já tenho conta. Entrar.</Text3>
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