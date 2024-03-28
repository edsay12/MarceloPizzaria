import { Form, FormGroup, InputWithLabel } from "../../../components/ui/Form";

function FormItem() {
  return (
    <Form action="" className="flex flex-col gap-6">
      <FormGroup className="flex gap-5 w-full flex-grow ">
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="Eduardo"
          labelTitle="Nome"
          type="text"
        />
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="Luiz"
          labelTitle="Sobrenome"
          type="text"
        />
      </FormGroup>
      <FormGroup className="flex gap-5 w-full flex-grow ">
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="(81)98888-8888"
          labelTitle="Telefone"
          type="text"
        />
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="58212-029"
          labelTitle="Cep"
          type="text"
        />
      </FormGroup>

      <InputWithLabel
        className="flex flex-col gap-3 w-full "
        placeholder="Rua rio Catalão"
        labelTitle="Endereço"
        type="text"
      />

      <FormGroup className="flex gap-5 w-full flex-grow ">
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="Paratibe"
          labelTitle="Bairro"
          type="text"
        />
        <InputWithLabel
          className="flex flex-col gap-3 w-full "
          placeholder="Paulista"
          labelTitle="Cidade"
          type="text"
        />
      </FormGroup>
    </Form>
  );
}

export default FormItem;
