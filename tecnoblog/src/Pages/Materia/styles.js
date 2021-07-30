import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  color: #000;
`;

export const SubTitle = styled.h2`
  font-size: 1.5em;
  font-weight: semi-bold;
  text-align: center;
  color: #000;
`;

export const Content = styled.div`
  grid-area: content;
  position: relative;
  left: 320px;
  text-align: justify;
  max-width: 850px;
  align-items: center;
  padding: 250px 50px;
`;

export const Imgcontainer = styled.div`
  background-color: #0090f0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
    img{
      border-radius: 8px;
      width: 960px; 
      height: 640px;
      
    }
`;

export const ImgcontainerPeq = styled(Imgcontainer)`
     img{
       width: 750px;
       height: 500px;
     }
`;

export const Text = styled.p`
  font-size: 1.2em;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-areas:
    "content . . . . aside"; 
    
`;
