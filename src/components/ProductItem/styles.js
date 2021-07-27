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
width: 600px;
height: 455px;
background-color: #f6f7fb;
color: #000000;
`
export const Quantity = styled.div`
display: flex;
flex-direction: row;
margin-left: 10%;
margin-top: 5px;
`
export const Price = styled.div`
display: flex;
flex-direction: row-reverse;
margin-right: 10%;
font-size: 1.2em;
`
export const Button = styled.button`
padding: 8px;
border-radius: 50%;
border: none;
background-color: ${({theme}) => theme.primaryLight};
margin-top: -6px;
`
export const Title = styled.h2`
font-size: 3em;
text-align: center;
font-weight: bold;
color:${({theme})=> theme.secondaryDark};
`
export const DescriptionText = styled.div`
width: 60%;
margin: 12% auto;
text-align: center;
color:${({theme})=> theme.default};
font-size: 20px;
`
export const AddCart = styled.button`
display: flex;
flex-direction: row;
align-items: center;
margin: 5% auto;
margin-left: 40%;
padding: 20px;
border: 5px solid ${({theme}) => theme.secondaryLight};;
border-radius: 8px;
background-color: transparent;
`
export const Count = styled.h3`
font-size: 22px;
margin: 0px 10px;
`
export const TotalPrice = styled.h4`
color: ${({theme}) => theme.primary};
margin-left: 300px;
`