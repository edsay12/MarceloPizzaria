import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function User() {
    const navigate = useNavigate()
    function handdleClick(){
        localStorage.removeItem("user")
        navigate("/")

    }
  return (
    <>
      <div className="flex flex-col gap-20 justify-center items-center">
        <p>
        Sou uma linda pagina de usuario


        </p>
        <Button variant="contained" className="bg-yellow-500" onClick={handdleClick}>Deslogar</Button>
      </div>
    </>
  );
}

export default User;
