import { Button } from "@mui/material";
import BannerItem from "./components/Banner-item";

import PaymentDetailsItem from "./components/PaymentDetailsItem";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import PixIcon from "@mui/icons-material/Pix";
import FormItem from "./components/form-item";
import TitleItem from "./components/title-Item";
import PaymentModalItem from "./components/paymentModalitem";

function PaymentFinish() {
 
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[1fr,24rem]  mt-20  ">
        <div>
          <div className="w-full bg-white flex flex-col gap-10 p-5">
            <TitleItem title="1. Informações de contato" />

            <FormItem />

            <TitleItem title=" 2. Metodo de pagamento" />

            <div className="w-full flex gap-10">
              <Button
                variant="contained"
                className="w-full p-5 rounded-full bg-white text-black "
                startIcon={<GoogleIcon />}
              >
                Pay
              </Button>
              <Button
                variant="contained"
                className="w-full  p-5 rounded-full bg-yellow-500"
                startIcon={<AppleIcon />}
              >
                Pay
              </Button>
              <Button
                variant="contained"
                className="w-full  p-5 rounded-full bg-white text-black"
                startIcon={<PixIcon />}
                
              >
                Pix
              </Button>
            </div>
          </div>
        </div>

        <div>
          <PaymentDetailsItem />
        </div>
        <PaymentModalItem/>
      </section>
    </>
  );
}

export default PaymentFinish;
