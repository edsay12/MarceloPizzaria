import BannerItem from "./components/Banner-item";

function Cart() {
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
        <div>
          <div className="flex justify-between items-center text-gray-400 border-solid border-t border-b border-l-0 border-r-0 border-gray-300 pt-3 pb-3 ">
            <div>
              <p>Detalhes</p>
            </div>
            <div className="flex gap-10">
              <p>Valor</p>
              <p>Quantidade</p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Cart;
