
import { Form, InputWithLabel } from "../../Form";
import { Button } from "@mui/material";

function FormItemCadastro() {
  return (
    <Form action="" method="POST" className="flex flex-col gap-6">
      <InputWithLabel labelTitle="Email" placeholder="edvan@gmail.com" />
      <InputWithLabel labelTitle="Senha" placeholder="******" />
      <InputWithLabel labelTitle="Telefone" placeholder="(81)0000-0000" />

      <Button variant="contained" className="mt-5 bg-yellow-500 w-full">
        Entrar
      </Button>
    </Form>
  );
}

export default FormItemCadastro;
