// Componente Search recebe duas props:
// - search: valor atual do campo de busca
// - setSearch: função para atualizar o valor da busca no estado do componente pai
const Search = ({ search, setSearch }) => {
    return (
        <div className="search"> {/* Container com classe para estilização */}
            <h2>Pesquisar:</h2>
            {/* Campo de input controlado para digitar o termo de pesquisa */}
            <input
                type="text"
                value={search} // valor controlado pelo estado "search"
                onChange={(e) => setSearch(e.target.value)} // atualiza o estado ao digitar
                placeholder="Digite para pesquisar..." // dica dentro do input
            />
        </div>
    );
};

export default Search; // Exporta o componente para ser usado em outros lugares da aplicação
