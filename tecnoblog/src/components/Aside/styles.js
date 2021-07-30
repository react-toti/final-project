import styled from "styled-components";

export const AsideContainer = styled.div`
  position: sticky;
  top: 0;
  margin: 250px 18px;
  height: 800px;
  width: 250px;
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const AsideContent = styled.div`
  flex: 1;
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const AsideHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
  color: #000;
`;
