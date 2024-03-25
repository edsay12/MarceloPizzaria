import SearchIcon from "@mui/icons-material/Search";

function SearchForm() {
  return (
    <div className="bg-yellow-500  h-[130px] rounded-lg flex items-center p-3 pl-6 pr-6">
      <form action="" className="w-full">
        <div className="flex itens-center justify-between p-2 rounded-full bg-white w-full">
          <input
            type="text"
            title="pesquisar"
            className="border-none outline-none text-gray-400 pl-3 "
            placeholder="Pesquisar pizza"
            autoFocus
          />
          <button
            type="submit"
            title="Pesquisar"
            className="bg-red-500 outline-none border-none w-8 h-8 rounded-full cursor-pointer flex items-center justify-center "
          >
            <SearchIcon className="text-sm text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
