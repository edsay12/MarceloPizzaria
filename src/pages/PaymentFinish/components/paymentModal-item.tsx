import { Button } from "@mui/material";
import paymentSuccess from "../../../assets/paymentSuccess.png";
import CloseIcon from "@mui/icons-material/Close";

function PaymentModalItem() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-20">
        <div
          className="relative bg-white p-10 rounded-lg flex flex-col items-center justify-center text-center shadow-2xl
        "
        >
          <div className="absolute top-5 right-5 cursor-pointer ">
            <CloseIcon />
          </div>

          <img src={paymentSuccess} alt="" className="max-w-60" />
          <div className="max-w-[400px] mt-5">
            <h3 className="text-3xl">Pagamento Realizado</h3>
            <p>
              Nos mandamos um email para voce com mais detalhes sobre o pedido
              pedido.Obrigado.
            </p>
          </div>
          <Button variant="contained" className="bg-yellow-500 mt-28">
            Voltar para tela inicial
          </Button>
        </div>
      </div>
    </>
  );
}

export default PaymentModalItem;
