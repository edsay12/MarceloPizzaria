import { Button } from "@mui/material";
import {  useNavigate } from "react-router-dom";

function NoItensInCart() {
    const navigate = useNavigate();

    function redirectToSeachPage(){
        return navigate("/menu")
    }
    return ( <div className="flex flex-col items-center justify-center mt-20">

        <p>Parece que voce não adicionou itens ainda</p>
        <Button className="bg-yellow-500 mt-20" variant="contained" onClick={redirectToSeachPage}>Ir para o menu</Button>

    </div> );
}

export default NoItensInCart;