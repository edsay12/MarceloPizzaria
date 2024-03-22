import BannerItem from "./components/Banner-item";

import PaymentDetailsItem from "./components/PaymentDetailsItem";

function PaymentFinish() {
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
        <div>
          <div className="w-full bg-white">
            <h2 className="font-normal text-2xl text-gray-400">
              1. Informações de contato
            </h2>

            <form action="">
              <div className="flex gap-5 w-full flex-grow ">
                <label htmlFor="" className="flex flex-col gap-3 w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Eduardo"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-3  w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Luiz"
                  />
                </label>
              </div>
              <div className="flex gap-5 w-full flex-grow ">
                <label htmlFor="" className="flex flex-col gap-3 w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Eduardo"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-3  w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Luiz"
                  />
                </label>
              </div>
              <label htmlFor="" className="flex flex-col gap-3  w-full">
                Nome
                <input
                  type="text"
                  className="w-full p-2 shadow-lg outline-none rounded-lg"
                  placeholder="Luiz"
                />
              </label>

              <div className="flex gap-5 w-full flex-grow ">
                <label htmlFor="" className="flex flex-col gap-3 w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Eduardo"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-3  w-full">
                  Nome
                  <input
                    type="text"
                    className="w-full p-2 shadow-lg outline-none rounded-lg"
                    placeholder="Luiz"
                  />
                </label>
              </div>
            </form>

            <h2 className="font-normal text-2xl text-gray-400">
              2. Metodo de pagamento
            </h2>
          </div>
        </div>

        <div>
          <PaymentDetailsItem />
        </div>
      </section>
    </>
  );
}

export default PaymentFinish;
