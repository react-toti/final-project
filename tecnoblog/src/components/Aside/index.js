import * as S from './styles.js';

function Aside (){
    return(
        <S.AsideContainer>
        <S.AsideContent>
            <img src="https://totidiversidade.com.br/assets/img/icon_logo_toti.202d2564.svg" height='200' width='230'/>
            <S.AsideHeader>Dani Google</S.AsideHeader>
        </S.AsideContent>
        <S.AsideContent>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='200' width='230' />
            <S.AsideHeader>Dani Google</S.AsideHeader>
        </S.AsideContent>
        </S.AsideContainer>
    )   
};

export default Aside;