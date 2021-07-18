import styled from 'styled-components';

export const Container = styled.button`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, variant }) => {
    console.log(variant);
    switch (variant) {
      case 'default':
        return theme.blue;
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
  text-align: center;
  width: 100%;

  max-width: ${({ size }) => (size === 'medium' ? '470px' : '270px')};
`;
