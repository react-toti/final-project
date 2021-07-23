import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: absolute;
    width: 90%;
    height: 570px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 25px;
    overflow: hidden;
`;
export const ContainerSingIn = styled.div`
    width: 50%;
    height: 500px;
    text-align: -webkit-center;
    
`;
export const ContainerSingUp = styled.div`
    width: 50%;
    text-align: -webkit-center;

`;
export const ContainerButton = styled.div`
    display: block;
    width: 100%;
    margin: 30px auto;
    text-align: -webkit-center;
    justify-content: space-around;

`;
export const Img = styled.img`
    position: absolute;
    width: 50%;
    height: 100%;
    opacity: 1;
    overflow: hidden;   
    right: ${({ right }) => right};;
    transition: all 0.3s;
    object-fit: cover

`;