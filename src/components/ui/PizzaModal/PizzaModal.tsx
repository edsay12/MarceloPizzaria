import { ChangeEvent, useState } from "react";
import pizzaImage from "/PizzaImage/atum.png";
import {
  Modal,
  ModalCloseButton,
  ModalContainer,
  ModalContainerOverlay,
} from "../Modal";
import { Form, Input, Label } from "../Form";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function PizzaModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [pizzaSizeSelected, setPizzaSizeSelected] = useState("grande");

  function closeModal() {
    setIsModalOpen(false);
  }
  function handleSizeChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setPizzaSizeSelected(value);
  }

  return (
    <>
      <ModalContainer isModalOpen={isModalOpen} className="p-0 lg:p-5">
        <Modal className={`lg:max-w-[800px] lg:max-h-[550px] w-full h-full`}>
          <ModalCloseButton onClick={closeModal} />

          <div className="flex lg:flex-row flex-col  gap-10 items-center">
            <img
              src={pizzaImage}
              alt={"imagem de uma linda pizza"}
              className="lg:max-w-[280px] lg:max-h-[280px] w-[200px]"
            />

            <div className="text-center lg:text-left max-w-[500px] text-wrap ">
              <h3 className="text-3xl font-bold text-gray-500 text-wrap">
                Camarão c/ catupiry
              </h3>
              <p className="text-sm font-normal text-gray-500 mt-3">
                Molho muçarela, camarões no molho catupiry e oregano
              </p>

              <h5 className="text-gray-500 text-lg uppercase font-light mt-5">
                Tamanho
              </h5>

              <Form action="POST" className="flex flex-row mt-5 gap-0 ">
                <Label
                  htmlFor="pizza1"
                  className={`${
                    pizzaSizeSelected === "pequena"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  } cursor-pointer p-3 rounded-l-full`}
                >
                  <div className="flex gap-3 items-center">
                    <p className="text-sm md:text-md">Pequena</p>
                    <span className="text-xs">240g</span>
                  </div>
                  <Input
                    type="radio"
                    title="Pizza Tamanho pequeno"
                    name="pizza"
                    id="pizza1"
                    value={"pequena"}
                    className="sr-only"
                    onChange={(e) => handleSizeChange(e)}
                  />
                </Label>
                <Label
                  htmlFor="pizza2"
                  className={`${
                    pizzaSizeSelected === "media"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  } p-3  cursor-pointer`}
                >
                  <div className="flex gap-1 items-center">
                    <p className="text-sm md:text-md">Media</p>
                    <span className="text-xs">300g</span>
                  </div>

                  <Input
                    type="radio"
                    title="Pizza Tamanho pequeno"
                    name="pizza"
                    id="pizza2"
                    value={"media"}
                    className="sr-only"
                    onChange={(e) => handleSizeChange(e)}
                  />
                </Label>
                <Label
                  htmlFor="pizza3"
                  className={`${
                    pizzaSizeSelected === "grande"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  } p-3 rounded-r-full cursor-pointer`}
                >
                  <div className="flex gap-3 items-center">
                    <p className="text-sm md:text-md">Grande</p>
                    <span className="text-xs">380g</span>
                  </div>
                  <Input
                    type="radio"
                    title="Pizza Tamanho pequeno"
                    name="pizza"
                    id="pizza3"
                    value={"grande"}
                    className="sr-only"
                    defaultChecked
                    onChange={(e) => handleSizeChange(e)}
                  />
                </Label>
              </Form>

              <h5 className="text-gray-500 text-lg uppercase font-light mt-5">
                Preço
              </h5>
              <p className="text-black text-xl mt-5">R$ 35,99</p>

              <div className=" flex justify-between  items-center mt-10 b">
                <Button
                  className="bg-yellow-500"
                  variant="contained"
                  endIcon={<ShoppingCartIcon />}
                >
                  Adicionar
                </Button>
                <Button
                  variant="text"
                  className="text-black"
                  onClick={closeModal}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Modal>

        <ModalContainerOverlay onClick={closeModal} />
      </ModalContainer>
    </>
  );
}

export default PizzaModal;