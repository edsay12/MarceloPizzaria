function SearchResult() {
  return (
    <div className="w-full flex items-center justify-between p-3 bg-white shadow-2xl  ">
      <p className="font-semibold text-sm text-gray-400 ">
        0 Resultados escontrados
      </p>

      <select title="classificar" className=" rounded-full p-2 border-gray-300">
        <option value="asc">Ordem crescente</option>
        <option value="dsc">Ordem decrescente</option>
      </select>
    </div>
  );
}

export default SearchResult;
