import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 28px;
  color: #fff;
  text-decoration: none;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #5a9bf0;

  > li > a {
    color: #fff;
    &:hover {
      text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.9);
    }
  }
`;
