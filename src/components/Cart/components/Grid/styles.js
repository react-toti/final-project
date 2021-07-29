import styled from "styled-components";

export const List = styled.div`
    width: 65%;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 10px;
    margin: auto 35px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
` 
export const Items = styled.div`
    height: 210px;
    display:flex;
    align-items: center;
    margin: 5px;

` 
export const Img = styled.img`
    width: 260px;
    margin: 20px 10px;  
` 

export const Title = styled.h2`
     display: inline-block;
     padding: 10px;
` 
export const Description = styled.p`
 
` 
export const Price = styled.span`
    position: absolute;
    right: 10px;
    top: 20px;
    font-weight:600;
`    
export const Quantity = styled.p`
    display: flex;
    padding: 5px;
    margin-top: 20px;
` 
export const Remove = styled.button`
    border: 2px solid ${(theme) => theme.secondaryDark};
    margin: 30px 5px;
    border-radius: 5px;
    //background-color: ${(theme) => theme.secondaryDark};
    background-color: #624b37;
    display:flex;
    color: #ffffff;
    padding: 5px;
    font-size: 18px;

` 
export const CotainerInfo = styled.div`
    position: relative;
    display: flex;
    height: 85%;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
` 

export const Button = styled.button`
    padding: 8px;
    border-radius: 50%;
    border: none;
    background-color: ${({theme}) => theme.primaryLight};
    margin-top: -6px;
`

export const Count = styled.h3`
    font-size: 22px;
    margin: 0px 10px;
`

export const ContainerList = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
` 
export const Checkout = styled.div`
    width: 25%;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 10px;
    margin: auto 35px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0px;
    right: 0px;
` 
export const Total = styled.span`
    
`
export const Pagar = styled.button`
    
`
