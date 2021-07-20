import styled from 'styled-components';

export const Container = styled.button`
  font-size: ${({ size }) => {
    return (size === 'medio' ? '14px' : '24px')}};
  border: none;
  color: #fff;
  padding: ${({ size }) => {
    return (size === 'medio' ? '10.08px' : '20px 18px')}};
  border-radius: 8px;
  background-color: ${({theme})=> theme.blue};
  text-align:center;

  background-color: ${({theme, variant})=>{
    switch(variant){
      case 'secondary':
        return theme.pink;
      case 'deactivated':
        return theme.lightGrey;
      case 'error':
        return theme.error;
      default:
        return theme.blue;
    }
  }};
  width: 100%;

  max-width: ${({ size }) => {
    switch(size){
      case 'small':
        return '270px';
      case 'medio':
        return '203px';
      default:
        return '470px';
    }
  }};

  height: ${({ size }) => {
    return (size === 'medio' ? '35px' : 'auto')}};
`;
