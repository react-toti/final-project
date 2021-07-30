import { Nav } from "./styles";

function Submenu(){
    return(
        <Nav>
            <li> 
                <a href="http://localhost:3000">Home</a>
            </li>
            <li>
                <a href="http://localhost:3000/cma">CMA</a>
            </li>
            <li>
                <a href="#">Contactanos</a>
            </li>
        </Nav>
    )
}

export default Submenu;