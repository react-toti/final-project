import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import api from "../../services/api";
import * as S from "./styles"


function Home(){
    const [data, setData] = useState();
    const fetchApi = async () => {
        const response = await api.get("/articles");
        setData(response.data);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    return(
        <S.Main>
       <ul> 
        {!data ? <S.Loadding><p>Loadding...</p></S.Loadding> : 
        data.map((data, index) => {
            return(
                        <S.Container href="http://localhost:3000/materia" key={data.id}>
                    <S.ContainerImg>
                    <img src={data.image1} alt="foto de algo"/>
                    </S.ContainerImg>
                    <S.ContainerText>
                    <h1>{data.title}</h1>
                    <h2>{data.subTitle}</h2>
                    </S.ContainerText>
                </S.Container>
                    
        )})
        }</ul>
        <Aside/>
        </S.Main>
    );
}
export default Home;


