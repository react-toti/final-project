import styled from "styled-components";

export const Barnav = styled.div`
    display: fixed;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    top: 0;

` 

export const Cart = styled.button`
    margin: 10px;
    width: 40px;
    height: 40px;
    border: 0px;
    background-color: transparent;
    ::first-child {
        font-size: 20px;
        color: #4B4F56;
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
        color: #4B4F56;
    }
`
export const A = styled.a`
    margin: 10px 20px;
    text-decoration: none;
    color: ${({theme})=> theme.default};
`
export const I = styled.i`
    font-size: 20px;
    color: #4B4F56;
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
    color: #FFF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.error};
    border: white 1px;
    align-items: center;
    position: fixed;
    top: 34px;
    right: 95px;
    content: NumberCart;

`