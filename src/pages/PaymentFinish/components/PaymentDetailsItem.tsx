import {
  PaymentDetails,
  PaymentDetailsContainer,
  PaymentDetailsContainerResume,
  PaymentDetailsContainerResumeNumberOfItens,
  PaymentDetailsContainerResumeTitle,
  PaymentDetailsSeparator,
  PaymentDetailsTitle,
  PaymentDetailsValue,
} from "../../../components/ui/PaymentDetails";
import { Button } from "@mui/material";
import {
  PaymentModalContext,
  PaymentModalContextType,
} from "../../../contexts/paymentoModalContext";
import { useContext } from "react";
import { CartContext, CartContextType } from "../../../contexts/CartContext";

function PaymentDetailsItem() {
  const { oppenModal } = useContext(
    PaymentModalContext
  ) as PaymentModalContextType;
  const { clearCart } = useContext(CartContext) as CartContextType;

  const payment = () => {
    oppenModal();
    clearCart();
  };

  return (
    <PaymentDetailsContainer>
      <PaymentDetailsContainerResume>
        <PaymentDetailsContainerResumeTitle>
          Resumo
        </PaymentDetailsContainerResumeTitle>
        <PaymentDetailsContainerResumeNumberOfItens>
          3 itens
        </PaymentDetailsContainerResumeNumberOfItens>
      </PaymentDetailsContainerResume>

      <PaymentDetails>
        <PaymentDetailsTitle>Subtotal</PaymentDetailsTitle>
        <PaymentDetailsValue>$300</PaymentDetailsValue>
      </PaymentDetails>
      <PaymentDetails>
        <PaymentDetailsTitle>Entrega</PaymentDetailsTitle>
        <PaymentDetailsValue>Grátis</PaymentDetailsValue>
      </PaymentDetails>
      <PaymentDetails>
        <PaymentDetailsTitle>Taxa</PaymentDetailsTitle>
        <PaymentDetailsValue>Não inclusa</PaymentDetailsValue>
      </PaymentDetails>
      <PaymentDetailsSeparator />
      <PaymentDetails>
        <PaymentDetailsTitle>Total</PaymentDetailsTitle>
        <PaymentDetailsValue>$300</PaymentDetailsValue>
      </PaymentDetails>

      <Button variant="contained" className="bg-yellow-500" onClick={payment}>
        Pagar
      </Button>
    </PaymentDetailsContainer>
  );
}

export default PaymentDetailsItem;

{
  /* <div className="">
    <div className="">
        <h3 className="text-2xl">Resumo</h3>
        <p className="text-sm">3 itens</p>
    </div>
    <div className="flex items-center justify-between">
        <h4 className="text-2xl text-gray-300">Subtotal</h4>
        <p className="text-sm">$300</p>
    </div>
    <div className="flex items-center justify-between">
        <h4 className="text-2xl text-gray-300">Entrega</h4>
        <p className="text-sm">Grátis</p>
    </div>
    <div className="flex items-center justify-between">
        <h4 className="text-2xl text-gray-300">Taxa</h4>
        <p className="text-sm">Não inclusa</p>
    </div>
    <div className="w-full h-[2px] bg-gray-300"></div>
    <div className="flex items-center justify-between">
        <h4 className="text-2xl ">Total</h4>
        <p className="text-sm">$300</p>
    </div>
    <Button variant="contained" className="bg-yellow-500">Pagamento</Button>
</div> */
}
