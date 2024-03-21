import { Button } from "@mui/material";
import BannerItem from "./components/Banner-item";
import CartItem from "./components/Cart-item";

function Cart() {
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
        <div>
          <div className="flex justify-between items-center p-5 text-gray-400 border-solid border-t border-b border-l-0 border-r-0 border-gray-300 pt-3 pb-3 ">
            <div>
              <p>Detalhes</p>
            </div>
            <div className="flex gap-10  ">
              <p>Valor</p>
              <p>Quantidade</p>
            </div>
          </div>
          <CartItem />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
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
        </div>
      </section>
    </>
  );
}

export default Cart;
