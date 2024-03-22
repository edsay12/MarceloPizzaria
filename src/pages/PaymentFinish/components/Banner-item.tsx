import {
  Banner,
  BannerDetails,
  BannerDetailsDescription,
  BannerDetailsTitle,
} from "../../../components/ui/banner";

function BannerItem() {
  return (
    <Banner>
      <BannerDetails>
        <BannerDetailsTitle>Pagamento</BannerDetailsTitle>
        <BannerDetailsDescription>
          Inicio {">"} Pagamento{" "}
        </BannerDetailsDescription>
      </BannerDetails>
    </Banner>
  );
}

export default BannerItem;
