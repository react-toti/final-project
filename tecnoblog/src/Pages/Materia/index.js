import * as S from './styles'

import Aside from '../../components/Aside'

function Materia(){
    return(
        <S.ContentContainer>
        <S.Content>
            <S.Title>MacBooks Pro com 14" e 16" chegam até novembro, aponta novo rumor</S.Title>
            <S.SubTitle>Novos notebooks já têm peças em produção e rumores apontando para novidades no design; anúncio pode até acontecer junto ao iPhone 13</S.SubTitle>
            <S.Imgcontainer>
                <img src="https://s2.glbimg.com/isTzRTpGzT8TMtz_ZRJnzpB77HU=/0x0:1360x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/z/7/H4UsgkQ1qbLCfp7YdBOA/7.png" />
            </S.Imgcontainer>
            <S.Text>
            A Apple vai lançar um novo MacBook Pro com versões de 14" e 16 polegadas até novembro de 2021. É o que aponta o jornalista Mark Gurman por meio de uma newsletter do Bloomberg. Com o novo rumor, fica aberta a possibilidade de um anúncio feito junto ao evento do iPhone 13, que deve acontecer em setembro. Mas, como a Apple não costuma misturar os lançamentos, é provável que os MacBooks cheguem em um evento próprio.

            No design, o top de linha da maçã deve vir mesmo com nova tela de mini LEDs, também presente no iPad Pro de 12,9 polegadas, anunciado em abril deste ano – algo que foi reforçado pelo analista de mercado Ming-Chi Kuo, que costuma adiantar diversos lançamentos da marca. Vale ressaltar que ainda não há nada confirmado pela Apple.
            A expectativa é por mudanças importantes no top de linha, incluindo a vinda de um novo processador Apple Silicon, a volta do Mag Safe e de interfaces como leitor de cartões microSD e HDMI, assim como a retirada da Touch Bar. A tela, com tecnologia de mini LEDs também é uma forte possibilidade, uma vez que fornecedoras de displays confirmaram a produção desses painéis recentemente ao DigiTimes.
            Sobre o chip que vai equipar o computador, alguns rumores apontam para a chegada do M1X, uma evolução do M1 atual, mas já se fala sobre um processador M2. Esse último é esperado para chegar com a próxima geração do MacBook Air. Ambos estão sendo fabricados desde abril de 2021, e ficariam disponíveis já para a nova versão do notebook premium.
            </S.Text>
             <S.ImgcontainerPeq>
                 <img src="https://s2.glbimg.com/NrYrSn-F7Q0vnbxXCT_XxqC3wo8=/0x0:695x393/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/w/BE3ZG1QOCIZhwR16j3GA/macbook-pro-2016.jpg" />
             </S.ImgcontainerPeq>
             <S.Text>
             A nova geração dos Apple Silicon poderiam suportar até 64 GB de RAM, de acordo com rumores mais recentes, uma evolução significativa em relação ao M1, que trabalha somente com até 16 GB. Há ainda a expectativa pela presença de oito núcleos de alto desempenho e mais dois focados em eficiência energética.

                Com informações de MacRumors (1 e 2), Geeky Gadgets
            </S.Text>
        </S.Content>
        <Aside />
        </S.ContentContainer>
    )
}


export default Materia;