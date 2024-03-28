import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import FormItem from "./components/FormItem";

import FormItemCadastro from "./components/FormItemCadastro";

enum VarianType {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

function AuthModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [variant, setVariant] = useState<VarianType>(VarianType.LOGIN);
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        className={`${
          isModalOpen ? "top-0 left-0" : "-top-[1000px] left-0 s"
        } fixed transition-all duration-500  w-screen h-screen flex items-center justify-center z-20 p-5  `}
      >
        <div
          className={`relative max-w-[380px] max-h-[500px] h-full w-full z-50 bg-white p-10 rounded-lg flex flex-col items-center justify-center text-center shadow-2xl `}
        >
          <div
            className="absolute top-5 right-5 cursor-pointer z-10 "
            onClick={closeModal}
          >
            <CloseIcon />
          </div>

          {variant === VarianType.LOGIN ? (
            <div className="text-left 0 w-full flex flex-col space-y-10">
              <h2 className="text-2xl font-bold">Entrar</h2>
              <FormItem />
            </div>
          ) : (
            <div className="text-left 0 w-full flex flex-col space-y-10">
              <h2 className="text-2xl font-bold">Cadastro</h2>
              <FormItemCadastro />
            </div>
          )}
          {variant === VarianType.LOGIN ? (
            <p className="text-xs mt-5">
              Não tem uma conta ainda ?{" "}
              <span
                className=" text-xs underline mx-0 cursor-pointer"
                onClick={() => setVariant(VarianType.REGISTER)}
              >
                Criar conta
              </span>
            </p>
          ) : (
            <p className="text-xs mt-5">
              Ja tem uma conta ?{" "}
              <span
                className=" text-xs underline mx-0 cursor-pointer"
                onClick={() => setVariant(VarianType.LOGIN)}
              >
                Entrar
              </span>
            </p>
          )}
        </div>

        <div
          aria-label="overlay"
          className="absolute -z-20 w-screen h-screen top-0 left-0  opacity-15 cursor-pointer"
          onClick={closeModal}
        ></div>
      </div>
    </>
  );
}

export default AuthModal;
