import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Barnav = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    background-color: #ff1744;
    align-items: center;
    top: 0;
    position: relative;

` 
export const H1 = styled.h1`
    color: ${() => theme.textSecondary};
    font-weight: 600;
    position: absolute;
    left: 20px;
    top: 0px;
    height: 60px;
    line-height: 60px;
` 

export const Cart = styled.button`
    margin: 10px;
    width: 40px;
    height: 40px;
    border: 0px;
    background-color: transparent;
    ::first-child {
        font-size: 20px;
        color: ${() => theme.default};
    }
`
export const Account = styled.button`
    margin: 10px;
    width: 40px;
    height: 40px;
    border: 0px;
    background-color: transparent;
    ::first-child {
        font-size: 20px;
        color: ${() => theme.default};
    }
`
export const A = styled.a`
    margin: 10px 20px;
    text-decoration: none;
    color: ${()=> theme.textSecondary};
`
export const I = styled.i`
    font-size: 20px;
    color: ${() => theme.default};
`
export const NumberSpan = styled.p`

    display: ${({NumberCart})=> {
        switch(NumberCart){
          case '0':
            return 'none';
          default:
            return 'block';
        }
    }};
    font-size: 14px;
    color: ${() => theme.default};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${() => theme.textSecondary};
    border: white 1px;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 100px;
    content: NumberCart;

`