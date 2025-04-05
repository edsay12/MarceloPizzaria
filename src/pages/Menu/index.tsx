import FilterPriceForm from "./components/FilterPriceForm";
import FilterType from "./components/FilterType";
import SearchResult from "./components/SearchResult";
import Pizzas from "./components/Pizzas";

import SearchForm from "./components/SearchForm";

import BannerItem from "./components/Banner-item";

function Menu() {
  return (
    <>
      <BannerItem />

      <section className="container grid gap-20 grid-cols-1  xl:grid-cols-[24rem,1fr]  mt-20  ">
        <div className=" flex  flex-col  gap-10">
          <SearchForm />
          <FilterPriceForm />
          <FilterType />
        </div>

        <div className="flex flex-col gap-5">
          <SearchResult />

          <Pizzas />
        </div>
      </section>
    </>
  );
}

export default Menu;
