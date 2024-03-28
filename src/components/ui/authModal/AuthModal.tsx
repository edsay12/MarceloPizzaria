import { useState } from "react";
import FormItem from "./components/FormItem";

import FormItemCadastro from "./components/FormItemCadastro";
import {
  Modal,
  ModalCloseButton,
  ModalContainer,
  ModalContainerOverlay,
} from "../Modal";

enum VarianType {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

function AuthModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [variant, setVariant] = useState<VarianType>(VarianType.LOGIN);
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <ModalContainer isModalOpen={isModalOpen}>
        <Modal className={`max-w-[380px] max-h-[500px] `}>
          <ModalCloseButton onClick={closeModal} />

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
        </Modal>

        <ModalContainerOverlay onClick={closeModal}/>
      </ModalContainer>
    </>
  );
}

export default AuthModal;
