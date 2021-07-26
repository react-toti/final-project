import React from 'react';
<<<<<<< HEAD
import ProductItem from '../../components/ProductItem';
import api from '../../services/api';


// import { Container} from './styles';

const Product = ({id}) => {
  const getProduct = async () =>{
    const response = await api.get('/Product/1', {
    });
    // console.log(response.data);
    return response.data
  };

  return (
    <>
         <ProductItem data={getProduct}/>
=======


const Product = () => {
  return (
    <>
        <h1>Product</h1>
      
>>>>>>> d5d7eae30a851cf04f0054e5e0cf77365b8af5b1
    </>
  );
};

export default Product;