import { Button } from "@mui/material";
import paymentSuccess from "../../../assets/paymentSuccess.png";
import {
  PaymentModalContext,
  PaymentModalContextType,
} from "../../../contexts/paymentoModalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalCloseButton, ModalContainer, ModalContainerOverlay } from "../../../components/ui/Modal";

function PaymentModalItem() {
  const navigate = useNavigate();
  const { closeModal, isModalOpen } = useContext(
    PaymentModalContext
  ) as PaymentModalContextType;
  const closeAndREdirect = () => {
    closeModal();
    return navigate("/");
  };
  return (
    <>
      <ModalContainer isModalOpen={isModalOpen}>
        <Modal className="max-w-[450px] max-h-[620px] p-20 ">
          <ModalCloseButton onClick={closeModal}/>

          <img src={paymentSuccess} alt="" className="max-w-60" />
          <div className="max-w-[400px] mt-5">
            <h3 className="text-3xl">Pagamento Realizado</h3>
            <p>
              Nos mandamos um email para voce com mais detalhes sobre o pedido
              pedido.Obrigado.
            </p>
          </div>
          <Button
            variant="contained"
            className="bg-yellow-500 mt-28"
            onClick={closeAndREdirect}
          >
            Voltar para tela inicial
          </Button>
        </Modal>
        <ModalContainerOverlay onClick={closeModal}/>
      </ModalContainer>
    </>
  );
}

export default PaymentModalItem;
