import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-areas: 
   "container aside";
    padding: 50px;
  ` 

export const Container = styled.a`
  grid-area: container;
  display: flex;
  margin: 50px 18px 0px 18px;
  padding: 25px;
  height: 170px;
  border-radius: 18px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  text-align: left;
  color: #000;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  img{
      width: 250px;
      height: 125px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #fafafa;
  text-align: left;

  h1{
      font-size: 30px;
      margin-bottom: 5px;
      text-decoration: none;
      text-align: left;
      a {
          
      }
      
  }
  h2{
      font-size: 20px;
      color: #2f2f2f;
  }
`;