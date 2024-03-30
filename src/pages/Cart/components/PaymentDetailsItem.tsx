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
import { CartContext, CartContextType } from "../../../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function PaymentDetailsItem() {
  const { totalPrice, totalItens } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate();
  return (
    <PaymentDetailsContainer>
      <PaymentDetailsContainerResume>
        <PaymentDetailsContainerResumeTitle>
          Resumo
        </PaymentDetailsContainerResumeTitle>
        <PaymentDetailsContainerResumeNumberOfItens>
          {totalItens()} itens
        </PaymentDetailsContainerResumeNumberOfItens>
      </PaymentDetailsContainerResume>

      <PaymentDetails>
        <PaymentDetailsTitle>Subtotal</PaymentDetailsTitle>
        <PaymentDetailsValue>${totalPrice()}</PaymentDetailsValue>
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
        <PaymentDetailsValue>${totalPrice()}</PaymentDetailsValue>
      </PaymentDetails>

      <Button variant="contained" className="bg-yellow-500" onClick={()=> navigate("/payment")}>
        Pagamento
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
