import BannerItem from "./components/Banner-item";
import CartItem from "./components/Cart-item";
import Details from "./components/Details";
import PaymentDetailsItem from "./components/PaymentDetailsItem";

function Cart() {
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
        <div>
          <Details/>
          <CartItem />
        </div>

        <div>
          <PaymentDetailsItem />
        </div>
      </section>
    </>
  );
}

export default Cart;
