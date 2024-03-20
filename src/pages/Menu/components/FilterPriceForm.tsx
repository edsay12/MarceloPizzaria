import { Button } from "@mui/material";

function FilterPriceForm() {
  return (
    <div className=" bg-white h-[210px] rounded-lg flex flex-col gap-8 pb-4  p-3 pt-6 pl-6 pr-6 text-gray-500 shadow-2xl">
      <div>
        <h3 className="text-2xl">Filtrar por preço</h3>
        <div className="w-8 bg-yellow-500 h-1"></div>
      </div>
      <form action="">
        <input
          type="range"
          className="accent-red-500 w-full bg-red-200"
          title="preço"
        />
      </form>
      <div className="flex items-center justify-between">
        <Button variant="contained" className="bg-yellow-500">
          Filtrar
        </Button>
        <div className="font-semibold text-gray-300">Preço : $50 - $100</div>
      </div>
    </div>
  );
}

export default FilterPriceForm;
