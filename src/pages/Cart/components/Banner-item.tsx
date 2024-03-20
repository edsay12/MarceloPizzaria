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
        <BannerDetailsTitle>Carrinho</BannerDetailsTitle>
        <BannerDetailsDescription>
          Inicio {">"} Carrinho{" "}
        </BannerDetailsDescription>
      </BannerDetails>
    </Banner>
  );
}

export default BannerItem;
