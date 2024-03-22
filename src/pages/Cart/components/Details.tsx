function Details() {
  return (
    <div className="flex  md:justify-between justify-center items-center p-5 text-gray-400 border-solid border-t border-b border-l-0 border-r-0 border-gray-300 pt-3 pb-3 ">
      <div>
        <p>Detalhes</p>
      </div>
      <div className="hidden gap-10 md:flex   ">
        <p>Valor</p>
        <p>Quantidade</p>
      </div>
    </div>
  );
}

export default Details;
