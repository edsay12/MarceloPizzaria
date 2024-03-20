import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
const lists = [
  "Todos",
  "Pizza de Frango",
  "Pizza de Queijo",
  "Pizza Doce",
  "Pizza Portuguesa",
  "Pizza de Camarão",
  "Pizza de Queijo",
];
function FilterType() {
  return (
    <div className=" bg-white min-h-[200px] rounded-lg flex flex-col gap-8  p-3 pt-6 pl-6 pr-6 text-gray-500 shadow-2xl">
      <div>
        <h3 className="text-2xl">Filtrar por tipo</h3>
        <div className="w-8 bg-yellow-500 h-1"></div>
      </div>
      <FormGroup>
        {lists.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  className="color-red-500"
                  sx={{
                    "&.Mui-checked": {
                      color: "#ef4444",
                    },
                  }}
                />
              }
              label={item}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}

export default FilterType;
