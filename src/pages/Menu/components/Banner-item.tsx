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
        <BannerDetailsTitle>Cardapio</BannerDetailsTitle>
        <BannerDetailsDescription>
          Inicio {">"} Cardapio{" "}
        </BannerDetailsDescription>
      </BannerDetails>
    </Banner>
  );
}

export default BannerItem;
