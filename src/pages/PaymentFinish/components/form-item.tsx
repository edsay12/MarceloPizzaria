function FormItem() {
  return (
    <form action="" className="flex flex-col gap-6">
      <div className="flex gap-5 w-full flex-grow ">
        <label htmlFor="" className="flex flex-col gap-3 w-full">
          Nome
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="Eduardo"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-3  w-full">
          Sobrenome
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="Luiz"
          />
        </label>
      </div>
      <div className="flex gap-5 w-full flex-grow ">
        <label htmlFor="" className="flex flex-col gap-3 w-full">
          Telefone
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="(81)98888-8888"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-3  w-full">
          Cep
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="58212-029"
          />
        </label>
      </div>
      <label htmlFor="" className="flex flex-col gap-3  w-full">
        Endereço
        <input
          type="text"
          className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
          placeholder="Rua rio Catalão"
        />
      </label>

      <div className="flex gap-5 w-full flex-grow ">
        <label htmlFor="" className="flex flex-col gap-3 w-full">
          Bairro
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="Paratibe"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-3  w-full">
          Cidade
          <input
            type="text"
            className="w-full p-2 shadow-lg outline-none rounded-lg border-none"
            placeholder="Paulista"
          />
        </label>
      </div>
    </form>
  );
}

export default FormItem;
