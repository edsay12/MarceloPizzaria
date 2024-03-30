import { useContext } from "react";
import { CartContext, CartContextType } from "../../contexts/CartContext";
import BannerItem from "./components/Banner-item";
import CartItem from "./components/Cart-item";
import Details from "./components/Details";
import PaymentDetailsItem from "./components/PaymentDetailsItem";
import NoItensInCart from "./components/NoItensInCart";

function Cart() {
  const { pizzas } = useContext(CartContext) as CartContextType;
  return (
    <>
      <BannerItem />

      {pizzas.length > 0 && (
        <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
          <div>
            <Details />
            <CartItem />
          </div>

          <div>
            <PaymentDetailsItem />
          </div>
        </section>
      )}

      {pizzas.length === 0 && <NoItensInCart/>}
    </>
  );
}

export default Cart;
