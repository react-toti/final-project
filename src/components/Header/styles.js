import styled from "styled-components";

export const Barnav = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    background-color: #ff1744;
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
    color: #fff;
    //color: ${({theme})=> theme.default};
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
    color: ${({theme}) => theme.default};
    //color: #FFF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c1a68e;
    //background-color: ${({theme}) => theme.error};
    border: white 1px;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 100px;
    content: NumberCart;

`