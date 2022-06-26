import styled from 'styled-components';

export const Container = styled.button`
  font-size: 24px;
  color: #fff;
  padding: 20px 18px;
  border: none;
  border-radius: 10px;
  background-color: #2187FC;
  text-align: center;
  width: 100%;

  max-width: ${({ size }) => (size === 'medium' ? '470px' : '270px')};
`;
