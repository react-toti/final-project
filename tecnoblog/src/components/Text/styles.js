import styled from 'styled-components';

export const Title1 = styled.h1`
  font-size: 5.063rem;
  color: ${({ color, theme }) => theme[color] || theme.fontGrey};
  font-weight: 400;
`;

export const Title2 = styled.h2`
  font-size: 2.25rem;
  color: ${({ color, theme }) => theme[color] || theme.fontGrey};
`;

export const Text1 = styled.p`
  font-size: 1.5rem;
  color: ${({ color, theme }) => theme[color] || theme.fontGrey};
`;

export const Text2 = styled.p`
  font-size: 1rem;
  color: ${({ color, theme }) => theme[color] || theme.fontGrey};
`;

export const Text3 = styled.small`
  font-size: 14px;
  color: ${({ color, theme }) => theme[color] || theme.fontGrey};
`;
