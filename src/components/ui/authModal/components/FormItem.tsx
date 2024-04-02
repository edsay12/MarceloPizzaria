import { FormEvent, useContext, useState } from "react";
import { Form, InputWithLabel } from "../../Form";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/store/UserSlice";
import { AuthModalContext, AuthModalContextType } from "../../../../contexts/authModalContext";


function FormItem() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {closeModal} = useContext(AuthModalContext) as AuthModalContextType
  const dispatch = useDispatch();


  function handdleSubmit(e: FormEvent<HTMLFormElement>) {
   console.log("asdas") 
    e.preventDefault();
    const userCredentials = {
      email,
      senha,
    };
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        setEmail("")
        setSenha("")
      }
      closeModal()
    })
 
  }

  return (
    <Form
      action=""
      onSubmit={(e) => handdleSubmit(e)}
      method="POST"
      className="flex flex-col gap-6"
    >
      <InputWithLabel
        labelTitle="Email"
        placeholder="edvan@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithLabel
        labelTitle="Senha"
        placeholder="******"
        onChange={(e) => setSenha(e.target.value)}
      />

      <Button variant="contained" className="mt-5 bg-yellow-500 w-full" type="submit">
        Entrar
      </Button>
    </Form>
  );
}

export default FormItem;
