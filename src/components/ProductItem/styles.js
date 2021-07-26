import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 100px;
`;

export const ImgProduct = styled.img`
width: 600px;
height: 500px;
background-color: #ffffff;
`
export const Carrusel = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;
margin-top: 30px;
`

export const ImgProduct2 = styled.img`
width: 100px;
height: 100px;
margin: 5px;
background-color: #ffffff;
`
export const Description = styled.div`
/* display: flex; */
/* flex-direction: column; */
/* justify-content: center; */
/* align-items: center; */
width: 600px;
height: 455px;
background-color: #f6f7fb;
color: #000000;
/* border: 1px solid; */
`

export const Paragraphy = styled.p`
color: #000;
margin: 30px 100px ;
`
export const Quantity = styled.div`
display: flex;
flex-direction: row;
margin-left: 10%;
`
export const Price = styled.div`
display: flex;
flex-direction: row-reverse;
margin-right: 10%;
font-size: 1.5em;
`
export const Button = styled.button`
padding: 8px 13px;
border-radius: 50%;
border: none;
background-color: peachpuff;
margin-top: -5px;
`
export const Title = styled.h2`
font-size: 3em;
text-align: center;
font-weight: bold;
`
export const DescriptionText = styled.div`
width: 60%;
margin: 12% auto;
text-align: center;
`
export const AddCart = styled.button`
display: flex;
flex-direction: row;
margin: 5% auto;
margin-left: 40%;
padding: 20px;
border: none;
border-radius: 10%;
background-color:peachpuff;
`